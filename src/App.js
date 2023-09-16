import React,{useState} from "react"; 
const App=()=>{
     const[num1,setNum1]=useState("");
     const[num2,setNum2]=useState("");
     const[error1,setError1]=useState("");
     const[error2,setError2]=useState("");
     const[mainError,setMainError]=useState("");
     const[success,setSuccess]=useState("");
    const[add,setAdd]=useState("");
     const[substract,setSubstract]=useState("");
     const[multiply,setMultiply]=useState("");
     const[divide,setDivide]=useState("");
     function updateNum1(event){
        console.log(event.target.value);
        setNum1(event.target.value);
     }
     function updateNum2(event){
        console.log(event.target.value);
        setNum2(event.target.value);
     }
     function checkEmptiness(symbol){
         if(num1==""){
            setError1("Num1 cannot be Empty")
            console.log(error1);
            return;
         }
          if(num2==""){
            setError2("Num2 cannot be Empty")
            return;
         }
         console.log("here wearew",symbol)
         properSyntax(num1,num2,symbol);

     }

     function properSyntax(num1, num2,symbol){
       if((Number.isInteger(Number(num1)) && ((num1>0)||(num1<0))) && (Number.isInteger(Number(num2)) && ((num2>0)||(num2<0)))){
          setSuccess("success!")
          if(symbol=="+"){
           setAdd(parseInt(num1) + parseInt(num2))
           
          }
        else if(symbol=="-"){
          setSubstract( parseInt(num1) - parseInt(num2))
         
          }
        else if(symbol=="*"){
           setMultiply(parseInt(num1) * parseInt(num2))
          
          }
          else if(symbol=="/"){
           setDivide(parseInt(num1) / parseInt(num2))
        
        }
       }else{
            setMainError("Error!")
       }
    
     }
     
    return(
        <div className="main-div">
            <h1>React Calculator</h1>
            <input type="text" placeholder="Num 1" onChange={updateNum1} />
            <br />
            <br />
            <input type="text" placeholder="Num 2" onChange={updateNum2} />
            <br />
            <br />
            <button className="btn" onClick={()=>checkEmptiness("+")}>+</button>
            <button className="btn" onClick={()=>checkEmptiness("-")}>-</button>
            <button className="btn" onClick={()=>checkEmptiness("*")}>*</button>
            <button className="btn" onClick={()=>checkEmptiness("/")}>/</button>
            {
               checkEmptiness && num1=="" &&
                <p>{error1}</p>
            } 
            {
                checkEmptiness && num2=="" &&
                 <p>{error2}</p>
             }
             {
                (properSyntax && (Number.isInteger(Number(num1)) && ((num1>0)||(num1<0))) && (Number.isInteger(Number(num2)) && ((num2>0)||(num2<0)))) ?
                <p className="success">{success}</p>
                :
                <p className="error">{mainError}</p>
             }
             {
                success && "+"&& add!="" &&(
                
                  <p>Result: {add}</p>
                )
                
             }
             {
                success && "-"&& substract!="" &&(
                
                  <p>Result: {substract}</p>
                )
                
             }
             {
                success && "*"&& multiply!="" &&(
                
                  <p>Result: {multiply}</p>
                )
                
             }
             {
                success && "/"&& divide!="" && (
                
                  <p>Result: {divide}</p>
                )
                
             }
           
        </div>
    )
}
export default App;