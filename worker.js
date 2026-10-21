// Worker da Cloudflare: só roda nos vídeos (veja run_worker_first no wrangler.jsonc).
// Entrega o vídeo em pedaços quando o navegador pede (cabeçalho Range). O Safari do iPhone
// exige isso para tocar, e os arquivos do site sozinhos sempre respondem com o vídeo inteiro.
export default {
  async fetch(request, env) {
    const resposta = await env.ASSETS.fetch(request);
    const pedido = request.headers.get('Range')?.match(/^bytes=(\d*)-(\d*)$/);
    if (resposta.status !== 200 || request.method !== 'GET' || !pedido || pedido[1] + pedido[2] === '') {
      const inteira = new Response(resposta.body, resposta);
      if (resposta.status === 200) inteira.headers.set('Accept-Ranges', 'bytes');
      return inteira;
    }

    // ponytail: lê o vídeo inteiro a cada pedido (o modo 'local' limita a 24 MB, então é rápido).
    // Com muito acesso, o modo 'r2' entrega em pedaços sozinho, sem passar por aqui.
    const video = await resposta.arrayBuffer();
    const total = video.byteLength;
    // "bytes=100-199", "bytes=100-" (até o fim) ou "bytes=-500" (os últimos 500).
    const inicio = pedido[1] ? Number(pedido[1]) : Math.max(total - Number(pedido[2]), 0);
    const fim = pedido[1] && pedido[2] ? Math.min(Number(pedido[2]), total - 1) : total - 1;
    if (inicio > fim) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${total}` } });

    const headers = new Headers(resposta.headers);
    headers.set('Content-Range', `bytes ${inicio}-${fim}/${total}`);
    headers.set('Accept-Ranges', 'bytes');
    return new Response(new Uint8Array(video, inicio, fim - inicio + 1), { status: 206, headers });
  },
};
