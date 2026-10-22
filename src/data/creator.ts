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
    // Opcional: a mesma foto recortada, sem fundo (PNG). Com ela, a foto aparece saindo da
    // moldura em arco. Para voltar à foto normal, apague esta linha.
    fotoRecortada: 'foto-recortada.png',
    // Seu nicho em uma linha. Aparece em letras pequenas acima do nome.
    nicho: 'Lifestyle, Casa & Decor, gastronomia',
    // O que você faz, em poucas palavras. Aparece no alto do topo, no selo da foto e no título da aba.
    funcao: 'Creator UGC & Influencer',
    // Bio curta: 2 ou 3 frases sobre o que você cria.
    bio: 'Creator que transforma produto em experiência e trata cada entrega como uma história de marca.',
    botao: {
      // Texto do botão principal.
      texto: 'Quero criar com você',
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
    mostrar: true,
    titulo: 'Navegue pelos meus nichos',
    // Opcional: uma frase antes dos vídeos, ex.: texto: 'Vídeos curtos para anúncio e redes sociais.',
    // true: os vídeos tocam sem som enquanto aparecem na tela (a marca toca para ouvir).
    // false: ficam parados mostrando a capa até alguém tocar.
    previaAutomatica: false,
    // Seus nichos, na ordem dos atalhos no alto da seção (cada atalho leva direto aos vídeos
    // daquele nicho). Cada vídeo usa um destes nomes no campo `nicho`. Nicho sem vídeo não aparece.
    nichos: [
      'Campanhas promocionais',
      'Casa e decoração',
      'Casal',
      'Tech',
      'Serviços digitais',
      'Educacional',
      'Haircare',
      'Skincare',
      'Bodycare & fragrâncias',
      'Bem-estar',
      'Moda & acessórios',
      'Fitness',
      'Gastronomia & culinária',
      'Restaurantes',
      'Experiências',
    ],
    lista: [
      { arquivo: 'kopenhagen-dia-das-maes.mp4', marca: 'Kopenhagen', formato: 'Dia das Mães', nicho: 'Campanhas promocionais', duracao: '0:43', autoral: false },
      { arquivo: 'nestle-mercado-promocao.mp4', marca: 'Nestlé', formato: 'Promoção', nicho: 'Campanhas promocionais', duracao: '0:49', autoral: false },
      { arquivo: 'nestle-documentario-cafe.mp4', marca: 'Nestlé', formato: 'Documentário', nicho: 'Campanhas promocionais', duracao: '1:05', autoral: false },
      { arquivo: 'oboticario-vlog-promocao.mp4', marca: 'O Boticário', formato: 'Vlog', nicho: 'Campanhas promocionais', duracao: '0:55', autoral: false },
      { arquivo: 'promocao-ype.mp4', marca: 'Ypê', formato: 'Promoção', nicho: 'Campanhas promocionais', duracao: '0:59', autoral: false },
      { arquivo: 'dove-repara-no-glow.mp4', marca: 'Dove', formato: 'Promoção', nicho: 'Campanhas promocionais', duracao: '1:18', autoral: false },
      { arquivo: 'rexona-mascote-fenomenal.mp4', marca: 'Rexona', formato: 'Promoção', nicho: 'Campanhas promocionais', duracao: '0:59', autoral: false },
      { arquivo: 'coala-casa.mp4', marca: 'Coala', formato: 'UGC', nicho: 'Casa e decoração', duracao: '0:25', autoral: false },
      { arquivo: 'coala-personalidades.mp4', marca: 'Coala', formato: 'UGC', nicho: 'Casa e decoração', duracao: '0:23', autoral: false },
      { arquivo: 'cha-branco-casa.mp4', marca: 'Coala', formato: 'UGC', nicho: 'Casa e decoração', duracao: '0:15', autoral: false },
      { arquivo: 'organico-coala.mp4', marca: 'Coala', formato: 'UGC', nicho: 'Casa e decoração', duracao: '0:35', autoral: false },
      { arquivo: 'bendita-canfora-casa.mp4', marca: 'Bendita Cânfora', formato: 'UGC', nicho: 'Casa e decoração', duracao: '0:36', autoral: false },
      { arquivo: 'cif-casa.mp4', marca: 'Cif', formato: 'UGC', nicho: 'Casa e decoração', duracao: '0:29', autoral: false },
      { arquivo: 'hoomy-toalha.mp4', marca: 'Hoomy', formato: 'UGC', nicho: 'Casa e decoração', duracao: '0:48', autoral: false },
      { arquivo: 'lavanderia-dica.mp4', marca: 'Comfort', formato: 'Dica', nicho: 'Casa e decoração', duracao: '0:52', autoral: true },
      { arquivo: 'tech-inter.mp4', marca: 'Inter', formato: 'UGC', nicho: 'Tech', duracao: '1:03', autoral: false },
      { arquivo: 'ifood-tech.mp4', marca: 'iFood', formato: 'UGC', nicho: 'Tech', duracao: '0:31', autoral: false },
      { arquivo: 'shopee-tech-casa.mp4', marca: 'Shopee', formato: 'UGC', nicho: 'Tech', duracao: '0:46', autoral: false },
      { arquivo: 'app-waze.mp4', marca: 'Waze', formato: 'App', nicho: 'Tech', duracao: '0:59', autoral: false },
      { arquivo: 'duo-gourmet-tech.mp4', marca: 'Duo Gourmet', formato: 'UGC', nicho: 'Tech', duracao: '1:01', autoral: false },
      { arquivo: 'ugc-duo-gourmet-app.mp4', marca: 'Duo Gourmet', formato: 'App', nicho: 'Tech', duracao: '1:01', autoral: false },
      { arquivo: 'tech-trinta.mp4', marca: 'Trinta', formato: 'UGC', nicho: 'Tech', duracao: '0:29', autoral: false },
      { arquivo: 'tech-turbi.mp4', marca: 'Turbi', formato: 'UGC', nicho: 'Tech', duracao: '0:30', autoral: false },
      { arquivo: 'branding-clinica-estetica.mp4', marca: 'Laser Dream', formato: 'Branding', nicho: 'Serviços digitais', duracao: '1:01', autoral: false },
      { arquivo: 'musica-personalizada-amiga.mp4', marca: 'Um Presente Cantado', formato: 'UGC', nicho: 'Serviços digitais', duracao: '1:56', autoral: false },
      { arquivo: 'sheerme-app-experiencia.mp4', marca: 'SheerMe', formato: 'Experiência', nicho: 'Serviços digitais', duracao: '1:11', autoral: false },
      { arquivo: 'educacao-mentoria-camila.mp4', marca: 'Destrava UGC', formato: 'Mentoria', nicho: 'Educacional', duracao: '2:15', autoral: false },
      { arquivo: 'dove-storytelling-haicare.mp4', marca: 'Dove', formato: 'Storytelling', nicho: 'Haircare', duracao: '0:49', autoral: false },
      { arquivo: 'react-haicare.mp4', marca: "Elseve (L'Oréal)", formato: 'UGC', nicho: 'Haircare', duracao: '0:56', autoral: false },
      { arquivo: 'pantene-haircare.mp4', marca: 'Pantene', formato: 'UGC', nicho: 'Haircare', duracao: '0:26', autoral: false },
      { arquivo: 'natura-haircare.mp4', marca: 'Natura', formato: 'UGC', nicho: 'Haircare', duracao: '0:58', autoral: false },
      { arquivo: 'haircare-folitrix.mp4', marca: 'Folitrix', formato: 'UGC', nicho: 'Haircare', duracao: '0:35', autoral: false },
      { arquivo: 'haircare-loveme.mp4', marca: 'Love Me', formato: 'UGC', nicho: 'Haircare', duracao: '0:39', autoral: false },
      { arquivo: 'kbell-haircare.mp4', marca: 'K-Bell', formato: 'UGC', nicho: 'Haircare', duracao: '1:05', autoral: false },
      { arquivo: 'oboticario-skincare.mp4', marca: 'O Boticário', formato: 'UGC', nicho: 'Skincare', duracao: '1:26', autoral: false },
      { arquivo: 'neutrogena-protetor-solar-vlog.mp4', marca: 'Neutrogena', formato: 'Vlog', nicho: 'Skincare', duracao: '1:02', autoral: false },
      { arquivo: 'avon-protetor-solar.mp4', marca: 'Avon', formato: 'UGC', nicho: 'Skincare', duracao: '0:27', autoral: false },
      { arquivo: 'maybelline-beleza.mp4', marca: 'Maybelline', formato: 'UGC', nicho: 'Skincare', duracao: '0:46', autoral: false },
      { arquivo: 'natura-bodycare.mp4', marca: 'Natura', formato: 'UGC', nicho: 'Bodycare & fragrâncias', duracao: '0:45', autoral: false },
      { arquivo: 'secret-bodycare.mp4', marca: 'Secret', formato: 'UGC', nicho: 'Bodycare & fragrâncias', duracao: '0:37', autoral: false },
      { arquivo: 'domidona-mule.mp4', marca: 'Domidona', formato: 'UGC', nicho: 'Moda & acessórios', duracao: '0:50', autoral: false },
      { arquivo: 'domidona-tamanco-jelly.mp4', marca: 'Domidona', formato: 'UGC', nicho: 'Moda & acessórios', duracao: '0:33', autoral: false },
      { arquivo: 'moda-duones.mp4', marca: 'Duones', formato: 'UGC', nicho: 'Moda & acessórios', duracao: '1:13', autoral: false },
      { arquivo: 'fitness-roupa-academia.mp4', marca: 'Roupa de academia', formato: 'UGC', nicho: 'Fitness', duracao: '0:59', autoral: true },
      { arquivo: 'culinaria-maggi-airfryer.mp4', marca: 'Maggi', formato: 'Receita', nicho: 'Gastronomia & culinária', duracao: '0:42', autoral: false },
      { arquivo: 'culinaria-maggi-marmitas.mp4', marca: 'Maggi', formato: 'Receita', nicho: 'Gastronomia & culinária', duracao: '0:54', autoral: false },
      { arquivo: 'gastronomia-momento-meu.mp4', marca: 'Momento Meu', formato: 'UGC', nicho: 'Gastronomia & culinária', duracao: '1:01', autoral: false },
      { arquivo: 'culinaria-receita-mocha.mp4', marca: 'Receita de mocha', formato: 'Receita', nicho: 'Gastronomia & culinária', duracao: '1:07', autoral: true },
      { arquivo: 'gastronomia-restaurante.mp4', marca: 'Oxente Bar e Petiscaria', formato: 'Experiência', nicho: 'Restaurantes', duracao: '0:42', autoral: false },
      { arquivo: 'feijoada-experiencia.mp4', marca: 'Sabor de Casa', formato: 'Experiência', nicho: 'Restaurantes', duracao: '1:14', autoral: false },
      { arquivo: 'experiencia-restaurante-koreano.mp4', marca: 'Kion Korean Cuisine', formato: 'Experiência', nicho: 'Restaurantes', duracao: '0:52', autoral: true },
      { arquivo: 'experiencia-wellhub-app.mp4', marca: 'Wellhub', formato: 'App', nicho: 'Experiências', duracao: '0:58', autoral: false },
      { arquivo: 'topo-funil-experiencia-hospedagem.mp4', marca: 'Vila Cabana', formato: 'Experiência', nicho: 'Experiências', duracao: '0:47', autoral: true },
      { arquivo: 'sebo-dica.mp4', marca: 'Sebo de Salém', formato: 'Dica', nicho: 'Experiências', duracao: '0:44', autoral: false },
    ],
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
    titulo: 'Marcas que criaram comigo',
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

  // ── SOBRE ──────────────────────────────────────────────────────────────────
  // Um "sobre mim" em colagem: frases curtas em bilhetinhos e dois papéis com as suas skills.
  sobre: {
    mostrar: true,
    titulo: 'Sobre mim',
    // A frase grande do meio e o apelido escrito em cima dela.
    chamada: 'Oi, eu sou Railane',
    apelido: 'sua creator favorita',
    // Foto do meio da colagem (arquivo em src/imagens) e o que aparece nela.
    foto: 'oi-eu-sou-railane.png',
    fotoDescricao: 'Railane em pé, sorrindo, com a mão no bolso, em tons de rosa e terracota',
    // Até 2 fotos recortadas (sem fundo) que ficam dos lados da foto do meio.
    laterais: [
      { foto: 'sua-creator-favorita-sem-fundo.png', descricao: 'Railane sorrindo, em preto e branco' },
      { foto: 'cacheada-transicao-em-2022-sem-fundo.png', descricao: 'Railane sentada no chão, sorrindo, de roupa preta' },
    ],
    // Frases. `destaque` aparece em negrito; `fotos` (até 2) viram círculos. As frases sem foto
    // (até 3) ficam em volta das fotos do meio: a 1ª em cima à esquerda, a 2ª em cima à direita
    // e a 3ª embaixo. As outras ficam dos lados.
    fatos: [
      { destaque: 'Criadora de conteúdo', texto: 'desde 2018', fotos: ['creator-desde-2018.png'] },
      { destaque: 'Pisciana', texto: '31 anos' },
      { destaque: 'Soteropolitana', texto: 'casada', fotos: ['soteropolitana-casa.png'] },
      { destaque: 'Cacheada', texto: 'transição capilar em 2022' },
      { destaque: 'Farmacêutica', texto: 'de profissão' },
      { destaque: 'Ama viajar', texto: 'e viver novas experiências', fotos: ['ama-viajar-e-viver-experiencias-sem-fundo.png'] },
      {
        destaque: 'Equilíbrio',
        texto: 'entre vida saudável e prazerosa',
        fotos: ['equilibrio-vida-saudavel-sem-fundo.png', 'equilibrio-vida-prazerosa-sem-fundo.png'],
      },
      { destaque: 'Construindo', texto: 'o lar dos meus sonhos', fotos: ['construindo-o-lar.png'] },
    ],
    softSkills: ['Criatividade', 'Comunicação assertiva', 'Naturalidade', 'Responsabilidade'],
    hardSkills: ['Curadoria de experiências', 'Copy com foco em conversão', 'Storytelling estratégico', 'Conteúdo orgânico'],
  },

  // ── FEEDBACKS ──────────────────────────────────────────────────────────────
  // Prints de avaliações (arquivo em src/imagens). `de`: 'marca' ou 'seguidor'.
  // A ordem aqui é a ordem no site.
  feedbacks: {
    mostrar: true,
    titulo: 'Feedbacks',
    lista: [
      {
        imagem: 'feedback-domidona.jpg', legenda: 'Domidona', de: 'marca',
        texto: 'Super profissional e comprometida! Cumpriu o prazo e entregou um conteúdo que ficou ainda melhor do que esperávamos',
      },
      {
        imagem: 'feedback-ifood.jpg', legenda: 'iFood', de: 'marca',
        texto: 'Foi uma ótima parceria! A entrega ficou bem alinhada com o que pedimos e tivemos uma troca super tranquila durante o processo.',
      },
      {
        imagem: 'feedback-turbi.jpg', legenda: 'Turbi', de: 'marca',
        texto: 'Rai fez uma entrega muito ágil e seguindo perfeitamente o briefing. Adoramos o vídeo!',
      },
      {
        imagem: 'feedback-folitrix.jpg', legenda: 'Folitrix', de: 'marca',
        texto: 'Adoramos o resultado do vídeo! Passou perfeitamente a mensagem no tempo proposto, ótima iluminação e cenário.',
      },
      {
        imagem: 'feedback-coala.jpg', legenda: 'Coala', de: 'marca',
        texto: 'Railane conseguiu superar nossas expectativas! Seguiu exatamente o que pedimos e o resultado ficou incrível!',
      },
      {
        imagem: 'feedback-alimentos-cacarola.jpg', legenda: 'Arroz Caçarola', de: 'marca',
        texto: 'Trabalhar com a Railane foi demais! Super criativa e dedicada',
      },
      {
        imagem: 'feedback-kbell.jpg', legenda: 'K-Bell', de: 'marca',
        texto: 'Foi muito trabalhar com a Railane, muito competente, uma ótima oratória, e bons feedbacks.',
      },
      {
        imagem: 'feedback-um-presente-cantado.jpg', legenda: 'Um Presente Cantado', de: 'marca',
        texto: 'A Railane foi incrível, além de extremamente rápida! Recomendo!',
      },
      {
        imagem: 'feedback-sette-restaurante.png', legenda: 'Sette Restaurante', de: 'marca',
        texto: 'Oi Railane, tudo bom? Amamos o vídeo postado, bem editado e com os melhores takes. Gostamos muito mesmo',
      },
      {
        imagem: 'feedback-seguidora-3.jpg', legenda: 'Seguidora', de: 'seguidor',
        texto: 'Vim passar a minha lua de mel na pousada de Imbassaí que vc deu a dica esse ano, muito obrigada pela dica. Que Deus abençoe seu trabalho que sempre contribui com dicas top. Muito importante para nós.',
      },
      {
        imagem: 'feedback-seguidora-2.jpg', legenda: 'Seguidora', de: 'seguidor',
        texto: 'Boa noite gatinha!! Fechei o serviço da minha casa com Léo tbm!! Obrigada pelas dicas de blogueira!! Pego várias!!',
      },
      {
        imagem: 'feedback-seguidora.jpg', legenda: 'Seguidora', de: 'seguidor',
        texto: 'Boa!!! Vc com as melhores dicas sempre',
      },
    ],
  },

  // ── GALERIA DE FOTOS ───────────────────────────────────────────────────────
  // Fotos em molduras de polaroid. Os arquivos ficam em src/imagens/galeria.
  // A ordem aqui é a ordem no site. Opcional em cada foto: legenda (escrita embaixo da
  // polaroid) e descricao (o que aparece na foto, lido em voz alta para pessoas cegas).
  galeria: {
    mostrar: true,
    titulo: 'Galeria de fotos',
    fotos: [
      { foto: 'galeria/galeria-01.jpg', legenda: 'Domidona' },
      { foto: 'galeria/galeria-02.jpg', legenda: 'Pantene' },
      { foto: 'galeria/galeria-03.jpg', legenda: 'Duo Gourmet' },
      { foto: 'galeria/galeria-04.jpg', legenda: 'Hoomy' },
      { foto: 'galeria/galeria-05.jpg', legenda: 'Bauny' },
      { foto: 'galeria/galeria-09.jpg', legenda: 'Sogni Joias' },
      { foto: 'galeria/galeria-10.jpg', legenda: 'Tuiu' },
      { foto: 'galeria/galeria-11.jpg', legenda: 'Gino-Canesten' },
      { foto: 'galeria/galeria-12.jpg', legenda: 'Thermo Life Fit' },
      { foto: 'galeria/galeria-13.jpg', legenda: 'Aice Sorvetes' },
      { foto: 'galeria/galeria-14.jpg', legenda: 'Dove' },
      { foto: 'galeria/galeria-15.jpg', legenda: 'Mana Poke' },
      { foto: 'galeria/galeria-17.jpg', legenda: 'Neutrogena' },
      { foto: 'galeria/galeria-19.jpg', legenda: 'Myees' },
      { foto: 'galeria/galeria-20.jpg', legenda: 'Iá Café' },
      { foto: 'galeria/galeria-21.jpg', legenda: 'Wine Vinhos' },
      { foto: 'galeria/galeria-22.jpg', legenda: 'Trinta' },
      { foto: 'galeria/galeria-23.jpg', legenda: 'Coala' },
      { foto: 'galeria/galeria-24.jpg', legenda: 'Natura' },
      { foto: 'galeria/galeria-25.jpg', legenda: 'Azulim' },
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
    // Opcional: uma frase embaixo do título, ex.: texto: 'Respondo em até um dia útil.',
    // Opcional: uma foto sua ao lado dos contatos (arquivo em src/imagens).
    foto: 'vamos-criar-juntos.png',
    fotoDescricao: 'Railane olhando para trás por cima do ombro, sorrindo, de blusa listrada',
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
