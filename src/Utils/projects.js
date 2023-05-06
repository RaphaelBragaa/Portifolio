import linkr from "../Assets/Images/linkr.png";
import eats2 from "../Assets/Images/eats2.png";
import trackit from "../Assets/Images/track.png";
import cineflex from "../Assets/Images/cineflex.png";
import MyWallet from "../Assets/Images/MyWallet.png";
import Drivent from "../Assets/Images/Drivent.png";
import { 
    SiJavascript, 
    SiHtml5, 
    SiCss3, 
    SiReact,
    SiMongodb,
    SiPostgresql,
    SiTypescript,
    SiJest,
    SiPrisma,
    SiFigma,
    SiRedis,
    SiCypress,
    SiExpress,
    SiLinux,
    SiGit,
    SiVisualstudiocode,
    SiVite
 } from 'react-icons/si';


export const projects = [
    {
      image: eats2,
      title:"Fominhas | Software Web de Comida por Delivery",
      description: "O site permite de forma fácil a escolha do seu combo, enviando em seguida o pedido por WhatsApp diretamente para o restaurante. O sistema consiste na seleção de apenas um item por coluna, para poder habilitar o botão de fechar pedido. Em seguida surgi uma tela informando os itens e valores dos itens adicionados, levando após confirmação o pedido é enviado para o restaurante via WhatsApp.",
      deploy:"http://fominha-eats.vercel.app/",
      repo:["https://github.com/RaphaelBragaa/FominhaEats"],
      tecnologies:[<SiJavascript/>, <SiHtml5/>, <SiCss3/>],
    },{
      image: linkr,
      title:"Linkr | Rede Social de Compartilhamento de Links",
      description: "Rede social de compartilhamento de links, um projeto Full-Stack desenvolvido em grupo com metodologia ágil, dividido em duas Sprints. Com a implementação de sistemas de autenticação JWT e busca de usuários através de consulta ao banco de dados, nossos usuários podem desfrutar de recursos avançados, incluindo deleção e edição de postagens, criação de hashtags utilizando bibliotecas externas e um sistema de seguidores para aumentar a interação e o engajamento.",
      deploy:"http://linkr-front-ashy.vercel.app/",
      repo:["https://github.com/gusalveess/Linkr-Front", "https://github.com/gusalveess/Linkr-Back"],
      tecnologies:[<SiReact/>, <SiPostgresql/>, <SiExpress/>],
    },{
      image:trackit,
      title:"Trackit | Software Web de Acompanhamento de Hábitos",
      description:"Aplicação mobile de criação e acompanhamento de hábitos, um projeto Front-End, com o uso de diversas bibliotecas externas para a implementação de funcionalidades mais robustas. Com recursos de inscrição e login com persistência, nossos usuários podem permanecer conectados à plataforma o tempo que desejarem. Implementei as operações básicas do CRUD (Criar, Ler, Atualizar e Excluir) para permitir aos usuários gerenciar seus hábitos de forma fácil e eficiente, além de incluir uma tela de histórico de hábitos para avaliação da eficácia dos mesmos, além de outras funcionalidades.",
      deploy:"https://projeto10-trackiit.vercel.app/",
      repo:["https://github.com/RaphaelBragaa/Trackit"],
      tecnologies:[<SiReact/>]
    },{
      image:MyWallet,
      title:"MyWallet | Software Web de Controle Financeiro",
      description:"Aplicação de controle financeiro, meu primeiro projeto Full-Stack, implementei funcionalidades de inscrição e login, operações básicas do CRUD (Criar, Ler, Atualizar e Excluir) para que o usuário possa gerenciar a entrada e saída de dinheiro  de forma fácil e eficiente, além de implementar arquitetura em camadas na construção da api.",
      deploy:"http://projeto13-mywallet-front-sigma-self.vercel.app/",
      repo:["https://github.com/RaphaelBragaa/projeto13-mywallet-front","https://github.com/RaphaelBragaa/projeto13-mywallet-back"],
      tecnologies:[<SiReact/>,<SiMongodb/>,<SiExpress/>]
    },{
        image:cineflex,
        title: "Cineflex | Software Web mobile de compra de ingresso para cinema",
        description:"Aplicação de compra de bilhetes para o cinema, um projeto Front-End, implementei funcionalidades de inscrição e login, operações básicas do CRUD (Criar, Ler, Atualizar e Excluir) para que o usuário possa gerenciar a entrada e saída de dinheiro  de forma fácil e eficiente, além de implementar arquitetura em camadas na construção da api.",
        deploy:"http://projeto9-cineflex-ruby-two.vercel.app/",
        repo:["https://github.com/RaphaelBragaa/projeto9-cineflex"],
        tecnologies:[<SiReact/>]
      },{
        image:Drivent,
        title: "Drivent | Software Gerenciador de Eventos",
        description:"Aplicação de compra de bilhetes para o cinema, um projeto Front-End, implementei funcionalidades de inscrição e login, operações básicas do CRUD (Criar, Ler, Atualizar e Excluir) para que o usuário possa gerenciar a entrada e saída de dinheiro  de forma fácil e eficiente, além de implementar arquitetura em camadas na construção da api.",
        deploy:"http://projeto9-cineflex-ruby-two.vercel.app/",
        repo:["https://github.com/RaphaelBragaa/projeto9-cineflex"],
        tecnologies:[<SiReact/>, <SiExpress/>, <SiTypescript/>, <SiPostgresql/>, <SiPrisma/>]
      },
     ]