
import Header from "./Components/Header/Header";
import GlobalStyle from "./Assets/Styles/GlobalStyle";
import { useRef } from "react";

export default function App() {
  //const myRef = useRef(null)
  //const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });  
  

  return (
      
      <div className="App">
        <GlobalStyle/>
        <Header/>
      </div>
    
  );
}


