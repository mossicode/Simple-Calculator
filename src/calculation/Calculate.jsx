import { useState } from 'react';
import './calculate.css'
import './index.css';
export default function Calculate() {
    const [hasDot, setHasDot]=useState(false);
    const [result, setResult]=useState('');
    function checkInput(text){
      if(text=="*") return "*";
      if(text=="/")return "/";
   
      return text;
    }
     const clickHandler=(e)=>{
     
      let input=checkInput(e.target.innerText)
      if(input=='.' ){
        if(hasDot==true)return
        else setHasDot(true)
      }
      if(input =='+' || input =="*" || input == '/' || input=='-' || input =='=' ){
        setHasDot(false)
        
      }
      setResult (result+input );
   
     }
     function clearbtn(){
      setResult('');
     }

     function oneDelete(){
      setResult(result.slice(0, -1))
     }
     function equalBtn(){
      setResult(String(eval(result)))
     }
  return (
    <>
      <div className="container">
        <div className="screen">{result}</div>
            <div className="buttons">
                <button className='color twoCol' onClick={clearbtn}>Clear</button>
                <button className='color' onClick={oneDelete}>C</button>
                <button    onClick={clickHandler} className='color'>/</button>
                <button  onClick={clickHandler}  >7</button>
                <button  onClick={clickHandler} >8</button>
                <button  onClick={clickHandler} >9</button>
                <button  onClick={clickHandler} className='color'>*</button>
                <button onClick={clickHandler} >4</button>
                <button onClick={clickHandler} >5</button>
                <button onClick={clickHandler} >6</button>
                <button  onClick={clickHandler} className='color'>-</button>
                <button onClick={clickHandler} >1</button>
                <button onClick={clickHandler} >2</button>
                <button onClick={clickHandler} >3</button>
                <button onClick={clickHandler}  className='color'>+</button>
                <button onClick={clickHandler} >0</button>
                <button onClick={clickHandler} >.</button>
                <button className='color twoCol' onClick={equalBtn}>=</button>
            </div>
       
      </div>
    </>
  )
}
