import React, {useEffect, useState} from "react";
import { blockInvalidChar } from "./blockInvalidChar";
import "./App.css"
import Button from "./Components/Button";
import InputField from "./Components/Inputfields";

function App() {
    const [leastCount,setleastCount] = useState( () => {
      const lastleastCount = localStorage.getItem("leastCount");
      return lastleastCount != null ? parseInt(lastleastCount):'';
    }
  )
    const [count,setCount]=useState(()=>{
      let count = localStorage.getItem("leastCount");
      return count != null ? parseInt(leastCount):null;
    });
    const [inputValue, setinputValue] = useState(null);
    const handleleastCount = (l)=>{
      setleastCount(Number(l.target.value))
    }
    const handleUpdate =(a) =>{
      const value = a.target.value
        setinputValue(Number(value)); 
    }
    const addToCounter = ()=>{
      setCount((+count)+(+inputValue))
    }
    const subFromCounter = () =>{
      setCount((+count)-(+inputValue))
    }    
    const resetAll = () =>{
      localStorage.removeItem("leastCount")  
      setinputValue('') 
      setleastCount('')   
      setCount('')
    }
    useEffect(()=>{
      localStorage.setItem('leastCount', leastCount )
    },[leastCount]);
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="bg-customColor px-16 py-12   shadow-2xl rounded-2xl border-4 max-w-[1100px]">
            <h1 className="font-bold text-3xl text-left"> The Least count is {leastCount}</h1>
            <h2 className="text-2xl mt-3  justify-center items-center"> Current count is {count < leastCount ? leastCount : count}</h2>
            
            <form>
              <div className="text-xl">
                <InputField fieldName="Count " type="number" placeholder="Enter a number" 
                            value={inputValue}
                            onChange={handleUpdate} onKeyDown={blockInvalidChar}/> 
                <InputField fieldName="Least Count" type="number" 
                            placeholder="Specify the LeastCount" 
                            value={leastCount} onChange={handleleastCount}  />
              </div>  
            </form>
            <h2 className="mt-2">Use Button to update the count</h2>           
            <div className="float-left inline-flex">
            <Button funCtion={subFromCounter}  buttonName="-" />
            <Button buttonName="0" funCtion={resetAll} />
            <Button funCtion={addToCounter} buttonName="+" />
            </div>
        </div>
        </div>
    )
}
export default App;