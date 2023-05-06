import { useState } from 'react';

export default function Cards({tec, tittle}) {
    const [display, setDisplay] = useState(true);
    function AlterDisplay(){
        display? setDisplay(false) : setDisplay(true);
    }
    return(
        <>
            
            <div className="card" style={{ fontSize: '6.5rem', color: '#FF4495', display:'flex', flexDirection:'column',marginBottom:'5px' }} onClick={AlterDisplay}>
              {tec}
              <p className="test"style={{ display: display? 'none' : 'inline' }}>{tittle}</p> 
            </div>
          
        </>            
    )
}


