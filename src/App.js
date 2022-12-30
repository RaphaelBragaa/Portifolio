import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import GlobalStyle from "./Assets/Styles/GlobalStyle";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Header/>
        <Main/>
        <About/>
    </div>
  );
}


