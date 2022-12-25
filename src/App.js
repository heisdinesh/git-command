import React,{useState,useEffect} from 'react'
import Data from "./data/Data"
import {AiOutlineGithub,AiOutlineCopy} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [group,setGroup]= useState('')
  const [family,setFamily]= useState([]);
  const [show,setShow] =useState(false)
  const [name,setName] = useState('');
  const [command,setCommand]=useState('');
  const [explanation,setExplanation]=useState('')

  
 useEffect(()=>{
  const fam =  Data.filter((x)=>{return x.group === group})
 if(fam.length !==0){
  const fa = fam[0].family
  setFamily(fa)
  setShow(true)
 }
 },[group])
 
 useEffect(()=>{
  const nam = family.filter((x)=>{return x.name === name});
  console.log(nam)
  if(nam.length !==0){
    setCommand(nam[0].command)
    setExplanation(nam[0].explanation)
  }
  },[name])

 const handleCopy =()=>{
  navigator.clipboard.writeText(command)
  toast("Command copied to clipboard!",{
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    })
 }

  return (
    <div className="bg-gitp h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-between mb-3">
        <AiOutlineGithub className="text-white" size="8em" />
        <h1 className="text-white text-4xl font-semibold">Git <span className="text-gitmain">Command</span></h1>
        <p className="text-white text-sm w-64 text-center mt-3">All important git command at one place for easy reference.</p>
       
      </div>
      <div className="flex flex-col  items-center justify-around w-4/5 lg:w-4/12 ">
       {
        
        <select
        placeholder="choose"
         value={group} onChange={(event)=> setGroup(event.target.value)}
         className="w-full rounded-lg h-9 mt-3 px-3 bg-gitt"
        >
          <option value="" disabled >Learn git...</option>
        
          {
            Data.map((item)=>(
              <option value={item.group}>{item.group}</option>
            ))
          }
          
        </select>
       }
        {
          show && 
          <select
          value={name}
          
          onChange={(event)=>setName(event.target.value)}
          className="w-full rounded-lg h-9 mt-3 px-3 bg-gitt"
          >
            <option value='' default  >Of...</option>
            
            {family.map((item)=>(
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
        }
      </div>
      {name && <div className="mt-3  lg:w-4/12">
        <div className="p-4  bg-gits m-4 rounded-2xl gap-2 text-white flex items-center justify-between">
          <p className=" text-md ">{command} </p>
          
          <AiOutlineCopy className="cursor-pointer bg-gitp rounded-full p-1" size="2em" onClick={handleCopy} />
         
        </div>
        <div className="text-white text-md bg-gits m-4 rounded-2xl p-4">
          <p className="font-semibold text-lg text-gitmain">Explanation :</p>
          <p>{explanation}</p>
          
        </div>
        <ToastContainer
        className="m-4 rounded-lg"
              position="bottom-center"
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              />
       
      
      </div>}
      <footer className=" mt-2 absolute bottom-0 mb-1">
        <p className="text-white">Made with ❤️ by <a className="cursor-pointer font-semibold text-gitmain" target="_blank" href="https://linktr.ee/heisdinesh">heisdinesh</a></p>
      </footer>
    </div>
  )
  
}

export default App