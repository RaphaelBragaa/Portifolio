import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Tecnololgies from "./Components/Tecnologies/Tecnologies";
import GlobalStyle from "./Assets/Styles/GlobalStyle";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Header/>
        <Main/>
        <About/>
        <Tecnololgies/>
    </div>
  );
}


