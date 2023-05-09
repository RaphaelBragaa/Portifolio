
import Header from "./Components/Header/Header";
import GlobalStyle from "./Assets/Styles/GlobalStyle";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Tecnololgies from "./Components/Tecnologies/Tecnologies";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { projects } from "./Utils/projects";
import Pointer from "./Components/Pointer/Pointer";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
      
      <div className="App">
        <GlobalStyle/> 
        
        <Header/>
        <Main/>
        {/*  <About/>
       <Tecnololgies/>
        <Projects projects={projects} />
        <Contact/>
       <Pointer/> */}
      </div>
    
  );
}


