import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Tecnologies from "./Components/Tecnologies/Tecnologies"
import GlobalStyle from "./Assets/Styles/GlobalStyle";
import image from "./Assets/Images/rafa.jpg"
import Contact from "./Components/Contact/Contact";

export default function App() {
  const images = [image, image, image, image, image,image]
  const description = [
    "O site permite de forma fácil a escolha do seu combo, enviando em seguida o pedido por WhatsApp diretamente para o restaurante. O sistema consiste na seleção de apenas um item por coluna, para poder habilitar o botão de fechar pedido. Em seguida surgi uma tela informando os itens e valores dos itens adicionados, levando após confirmação o pedido é enviado para o restaurante via WhatsApp.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"


  ]
  return (
    <div className="App">
      <GlobalStyle/>
        <Header/>
        <Main/>
         <About/> 
        <Tecnologies/>
        <Projects images={images} descriptions={description}/>
        <Contact/>
        
    </div>
  );
}


