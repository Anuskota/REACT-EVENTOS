import atanagildo from "./img/rey_atanagildo.png";
import sisebuto from "./img/rey_sisebuto.png"
import "./App.css";
import React, { useRef } from "react";

function App() {
  const refBox = useRef();
  const change = 23.16;

  const increment = (e) => {
   
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1;
    }
    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = "red";
    } else {
       e.target.style.backgroundColor = "white";
    }
  } 
    
  const changeCoin = ()=> {
    refBox.current.innerHTML = Number(refBox.current.innerHTML) * change
  };
  const changeImg = (j) => {
    if (j.target.src.includes("atanagildo")) {
        j.target.src=sisebuto
    } else {
      j.target.src = atanagildo;
      }
      
  }
  const read = (e) => {
    refBox.current.innerHTML = e.target.value;
  }

  return (
    <>
      <div ref={refBox} className="box" onClick={increment}>
        1
      </div>
      <button onClick={changeCoin}>Aceptar</button>
      <div>
        <img onClick={changeImg} src={atanagildo} alt="imagen" />
      </div>
      <input onChange={read } className="camp" />
    </>
  );
}

export default App;
