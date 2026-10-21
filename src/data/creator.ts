// ════════════════════════════════════════════════════════════════════════════
//  SEU PORTFÓLIO
//  Este é o único arquivo que você precisa mudar para personalizar o site.
//
//  Regrinhas para não quebrar nada:
//  • Texto fica sempre entre aspas: 'assim'. Se o texto tiver aspas simples
//    dentro (ex.: d'água), use aspas duplas por fora: "pão d'água".
//  • Toda linha de campo termina com vírgula.
//  • true = sim, false = não (sem aspas).
//  • Para esconder uma seção inteira, mude `mostrar` para false.
//  • Seção opcional com a lista vazia [] some sozinha do site.
//
//  Se algo estiver errado, o build mostra uma mensagem em português dizendo
//  onde está o problema (ex.: "Faltou o nome do arquivo do vídeo 3").
// ════════════════════════════════════════════════════════════════════════════
import { defineCreator } from '../lib/schema';

export default defineCreator({
  // ── AJUSTES GERAIS ─────────────────────────────────────────────────────────

  // true mostra uma faixa no topo avisando que o portfólio é de demonstração,
  // com pessoa, marcas e números fictícios. Só serve para o modelo: antes de
  // publicar com o seu nome, tire o que sobrou de exemplo e mude para false
  // (o build não publica o site com o seu nome e esta faixa ligada).
  modoExemplo: false,

  // Endereço do site, ex.: 'https://portfolio-ugc.seunome.workers.dev' ou, com domínio
  // próprio, 'https://www.seunome.com.br'. Aparece na Cloudflare, na página do projeto.
  // Sem ele, a prévia do link no WhatsApp fica sem foto.
  endereco: 'https://portf-lio-railane-freitas.fomededicas.workers.dev',

  // Onde ficam os vídeos e as capas:
  //   'local' → na pasta public/videos, junto com o site. Não precisa de cartão nem de
  //             bucket. Limite: cada vídeo com até 24 MB (o "npm run comprimir" já cuida disso).
  //   'r2'    → num bucket do Cloudflare R2. Sem limite de tamanho por vídeo e o site fica
  //             mais leve no GitHub. Precisa ativar o R2 (pede cartão) e preencher urlDosVideos.
  modoDosVideos: 'r2',

  // Só no modo 'r2': endereço público do seu bucket no Cloudflare R2.
  // Aparece no painel da Cloudflare em R2 > seu bucket > Settings > Public Development URL.
  // Ex.: 'https://pub-1234567890abcdef.r2.dev'
  urlDosVideos: 'https://pub-cac7f4134cc040a3836f69be9ae3c4df.r2.dev',

  // Visual do site. Para comparar, a faixa de demonstração no topo do site tem links para os 5.
  // Opções:
  //   'revista'   → creme e preto, ar de revista impressa
  //   'noite'     → quase preto com rosa-blush, ar de revista de moda
  //   'rosa'      → tons de rosa com ameixa
  //   'terra'     → linho, marrom e verde-oliva, ar natural
  //   'alviverde' → verde e branco de time de futebol, topo verde com fio dourado
  //   'railane'   → sua identidade visual: topo laranja, fundo creme, fio verde e rosa
  tema: 'railane',

  // Opcional: troca as cores do tema. Use o formato '#RRGGBB'.
  // O build confere se o texto continua fácil de ler (contraste) e avisa se não estiver.
  // Ex.: cores: { destaque: '#8A2BE2' },
  cores: {},

  // ── TOPO ───────────────────────────────────────────────────────────────────
  topo: {
    nome: 'Railane Freitas',
    // Nome do arquivo da sua foto. A foto vai na pasta src/imagens.
    // Uma foto vertical (em pé) fica melhor. JPG, PNG ou WEBP.
    foto: 'foto-perfil.png',
    // Descreva a foto em poucas palavras. É lido em voz alta para pessoas cegas.
    fotoDescricao: 'Railane sorrindo, de blusa terracota, com as mãos na frente do corpo',
    // Seu nicho em uma linha. Aparece em letras pequenas acima do nome.
    nicho: 'Lifestyle, Casa & Decor, gastronomia',
    // Bio curta: 2 ou 3 frases sobre o que você cria.
    bio: 'Creator que transforma produto em experiência e trata cada entrega como uma história de marca.',
    botao: {
      // Texto do botão principal.
      texto: 'Quero um orçamento',
      // Para onde o botão leva: 'whatsapp', 'email' ou 'instagram'.
      // Precisa estar preenchido lá embaixo, em CONTATO.
      abre: 'whatsapp',
    },
  },

  // ── VÍDEOS ─────────────────────────────────────────────────────────────────
  // Para adicionar um vídeo: coloque o arquivo original na pasta videos-originais e rode
  // "npm run comprimir". No modo 'local' ele já salva em public/videos; no modo 'r2', envie
  // os arquivos de videos-prontos para o bucket. Depois copie um bloco { ... } abaixo.
  // A ordem aqui é a ordem no site.
  videos: {
    mostrar: false,
    titulo: 'Vídeos',
    // Opcional: uma frase antes dos vídeos.
    texto: 'Vídeos curtos para anúncio e redes sociais, separados por nicho.',
    // true: os vídeos tocam sem som enquanto aparecem na tela (a marca toca para ouvir).
    // false: ficam parados mostrando a capa até alguém tocar.
    previaAutomatica: true,
    lista: [],
  },

  // ── CAMPANHA SAZONAL ───────────────────────────────────────────────────────
  // Bloco de destaque logo abaixo do topo, com os vídeos marcados com
  // `campanha: 'Black Friday'` (ou o nome que estiver em `nome`).
  // Troque o nome para 'Natal', 'Dia das Mães' etc. Para esconder: mostrar: false.
  // Enquanto estiver ligada, aparece uma faixa no alto do site; nos temas 'revista', 'terra' e 'alviverde', o topo
  // inteiro também fica na cor da campanha (preto, ou a cor escolhida em `cor`).
  campanha: {
    mostrar: false,
    nome: 'Black Friday',
    chamada: 'Agenda aberta para Black Friday',
    texto: 'Ainda tenho datas para gravar conteúdos de Black Friday. Feche agora e receba os vídeos antes da semana da oferta.',
    // Texto do botão (abre o WhatsApp já falando da campanha).
    botao: 'Reservar minha data',
    // Opcional: mensagem que já vem escrita no WhatsApp quando a marca toca no botão.
    // Se não preencher: "Oi! Vi seu portfólio e quero falar sobre Black Friday."
    // mensagemWhatsapp: '',
    // Opcional: cor de fundo do bloco, no formato '#RRGGBB'. Se não preencher, fica preto
    // (combina com Black Friday). Ex.: Natal → cor: '#1F4D36', Dia das Mães → cor: '#7A2E4D'.
    // cor: '',
  },

  // ── DIFERENCIAIS ───────────────────────────────────────────────────────────
  // De 3 a 5 itens curtos.
  diferenciais: {
    mostrar: false,
    titulo: 'Por que trabalhar comigo',
    lista: [
      { titulo: 'Roteiro antes de gravar', texto: 'Mando o roteiro com gancho, demonstração e chamada para a marca aprovar.' },
      { titulo: 'Luz e som caprichados', texto: 'Gravo com luz natural e microfone de lapela. Nada de áudio abafado.' },
      { titulo: 'Duas rodadas de ajuste', texto: 'Ajusto corte, legenda e texto até ficar com a cara da marca.' },
      { titulo: 'Entrega no prazo', texto: 'Combinou, cumpriu. Aviso na hora se algo atrasar do lado de cá.' },
    ],
  },

  // ── MARCAS COM QUEM JÁ TRABALHEI ───────────────────────────────────────────
  // Opcional. Só coloque marcas com quem você realmente trabalhou.
  // Logo é opcional: coloque o arquivo (PNG com fundo transparente fica melhor) em
  // src/imagens e escreva o nome, ex.: logo: 'logo-lumi.png'. Com logo, as marcas aparecem
  // em cartões brancos; sem logo, aparece o nome.
  marcas: {
    mostrar: true,
    titulo: 'Marcas com quem já trabalhei',
    lista: [
      { nome: 'Dove', logo: 'logo-dove.png' },
      { nome: 'Nestlé', logo: 'logo-nestle.jpg' },
      { nome: 'Natura', logo: 'logo-natura.jpg' },
      { nome: 'O Boticário', logo: 'logo-boticario.jpg' },
      { nome: "Hellmann's", logo: 'logo-hellmanns.jpg' },
      { nome: 'Kopenhagen', logo: 'logo-kopenhagen.jpg' },
      { nome: 'Shopee', logo: 'logo-shopee.jpg' },
      { nome: 'Inter', logo: 'logo-inter.jpg' },
      { nome: 'Wine', logo: 'logo-wine.jpg' },
      { nome: 'Coala', logo: 'logo-coala.jpg' },
      { nome: 'Arroz Caçarola', logo: 'logo-alimentos-cacarola.png' },
      { nome: 'Duo Gourmet', logo: 'logo-duo-gourmet.png' },
      { nome: 'Hoomy', logo: 'logo-hoomy.png' },
      { nome: 'Seu Influencer UGC', logo: 'logo-seu-influencer.png' },
    ],
  },

  // ── RESULTADOS ─────────────────────────────────────────────────────────────
  // Opcional. Use só números e depoimentos reais, que você consegue provar.
  // Cada lista pode ficar vazia [] e aquela parte some.
  resultados: {
    mostrar: false,
    titulo: 'O que os vídeos entregaram',
    numeros: [],
    // Prints de métricas: o arquivo vai em src/imagens.
    prints: [],
    depoimentos: [],
  },

  // ── COMO EU TRABALHO ───────────────────────────────────────────────────────
  comoTrabalho: {
    mostrar: false,
    titulo: 'Como eu trabalho',
    prazo: '5 a 7 dias úteis depois de receber o produto',
    incluso: [
      'Roteiro aprovado antes da gravação',
      'Vídeo vertical 9:16 editado, com legenda',
      'Duas rodadas de ajuste',
      'Arquivo sem legenda, se a marca pedir',
    ],
    direitosDeUso: 'Uso orgânico vitalício nas redes da marca. Uso em anúncios pagos por até 4 meses, sem custo extra.',
    // Opcional: uma observação no fim da seção.
    observacao: 'Exclusividade, arquivos brutos e urgência são combinados à parte.',
  },

  // ── VALORES ────────────────────────────────────────────────────────────────
  // Pacotes com preço: a marca decide mais rápido quando já sabe quanto custa.
  // Cada pacote tem um botão que abre o WhatsApp já falando daquele pacote.
  valores: {
    mostrar: false,
    titulo: 'Pacotes e valores',
    // Opcional: uma frase antes dos pacotes.
    texto: 'Escolha o pacote que combina com a sua campanha.',
    pacotes: [
      // nome: o que a marca recebe. detalhe: um complemento curto (opcional).
      // preco: se ficar vazio, aparece "Sob consulta".
      // etiqueta (opcional): destaca o pacote, ex.: 'Mais pedido'.
    ],
    // Opcional: itens vendidos separados.
    avulsos: [],
    // Texto do botão de cada pacote.
    botao: 'Quero este pacote',
    // Opcional: uma observação no fim da seção.
    observacao: 'Todos os pacotes incluem roteiro, gravação, edição e duas rodadas de ajuste.',
  },

  // ── CONTATO ────────────────────────────────────────────────────────────────
  // Deixe vazio ('') o que você não quiser mostrar.
  contato: {
    titulo: 'Vamos criar juntos?',
    texto: 'Me conte o produto, o prazo e onde o vídeo vai rodar. Respondo em até um dia útil.',
    whatsapp: {
      // 55 + DDD + número. Pode escrever com espaço ou traço.
      numero: '55 71 99282-6484',
      // Mensagem que já aparece escrita quando a marca abre o WhatsApp.
      mensagem: 'Oi! Vi seu portfólio e quero conversar sobre um conteúdo',
    },
    email: 'fomededicas@gmail.com',
    // Só o perfil, com ou sem @.
    instagram: '@fomededicas',
    tiktok: '@fomededicas',
    // Opcional: link do mídia kit (https://...) ou um PDF colocado na pasta public (ex.: 'midia-kit.pdf').
    midiaKit: '',
  },

  // ── GOOGLE E COMPARTILHAMENTO ──────────────────────────────────────────────
  // Opcional. Se ficar vazio, o título vira "Nome · Creator UGC de nicho" e a descrição usa a bio.
  seo: {
    titulo: '',
    descricao: '',
  },
});
