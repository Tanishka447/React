import { useState } from 'react';
import './App.css';
import styles from "./App.module.css";
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
function App() {
  
  const [calVal, setCalVal] = useState("");
  const onButtonClick= (buttonText) =>{
    if(buttonText === "C"){
      setCalVal("");
    }else if(buttonText === "="){
      const res=eval(calVal);
      setCalVal(res);
    }else{
      const newDisplay =calVal +buttonText;
      setCalVal(newDisplay);
    }
  };

  return (
    <>
        <div className={styles.calculator}>
      <Display diaplayValue={calVal}></Display>
      <ButtonsContainer onButtonClick ={onButtonClick}></ButtonsContainer>
    </div>
    </>
  )
}

export default App
