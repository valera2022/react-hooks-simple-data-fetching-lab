// create your App component here
import React,{useState,useEffect} from "react"


function App (){
    const [apiData,setData] = useState()

     useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => { setData(data.message)})
     },[])

     if(!apiData){
        return <h2>Loading...</h2>
     }
     return <img alt = "A Random Dog" src={apiData}/>

    //  {apiData.map((image) => image)

   
   
}

export default App