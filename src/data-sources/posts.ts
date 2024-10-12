import { Post } from '@/types/post';

export const posts: Post[] = [
  {
    id: 1,
    title: 'Parque de Calistenia',
    content:
      'Construção de espaços ao ar livre com barras e equipamentos para exercícios físicos gratuitos, incentivando práticas de atividades saudáveis.',
    coordinates: [-54.205, -23.06],
    color: '#FFBD8D',
    tag: 'Esportes e Lazer',
  },
  {
    id: 2,
    title: 'Festival de Talentos Locais',
    content:
      'Um evento anual que promove apresentações culturais e artísticas de cidadãos, como música, dança e teatro, destacando o talento da comunidade e valorizando a cultura local.',
    coordinates: [-54.21, -23.07],
    color: '#C397FD',
    tag: 'Educação e Cultura',
  },
  {
    id: 3,
    title: 'Centro de Apoio à Saúde Mental',
    content:
      'Criação de um espaço comunitário com psicólogos e terapeutas que ofereçam atendimento gratuito ou a preços reduzidos para pessoas que sofrem de depressão, ansiedade e outros problemas emocionais.',
    coordinates: [-54.19, -23.065],
    color: '#78E0F8',
    tag: 'Saúde e Bem-Estar',
  },
  {
    id: 4,
    title: 'Programa de Hortas Comunitárias',
    content:
      'Incentivo à criação de hortas comunitárias em terrenos baldios ou praças, gerando alimentos orgânicos para a população e promovendo a agricultura urbana sustentável.',
    coordinates: [-54.2, -23.05],
    color: '#74DBB6',
    tag: 'Meio Ambiente e Sustentabilidade',
  },
];
