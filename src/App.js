
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
import { useEffect, useState } from "react";


export default function App() {
  const [ showPointer, setShowPointer ] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setShowPointer(true);
      }else{
        setShowPointer(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
      
      <div className="App">
        <GlobalStyle/> 
          <Header/>
          <Main/>
          <About/>
          <Tecnololgies/>
          <Projects projects={projects} />
          <Contact/>
          { showPointer && <Pointer/>} 
      </div>
    
  );
}


