import { useEffect, useState } from 'react'
import { useCallback,useRef } from 'react'

function App() {
let [length,setlength]=useState(8)
let [pass,setpass]=useState(" ")
let [number,setnumber]=useState(false)
let [specialchar,setspecialchar]=useState(false)

let chara="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let num="123456789"
let special="!@#$%^&*"

let refe=useRef(null) 


let password =useCallback(()=>{
  let temppass=" "


   if(number) {
    chara=chara+num
  }
  if(specialchar){
    chara=chara+special;
  }

  for(let i=0;i<length;i++){
    let ramdom= Math.floor(Math.random()*chara.length);
    temppass=chara.charAt(ramdom)+temppass
  }

  setpass(temppass)

},[length,number,specialchar])

useEffect(()=>{
  password()
},[length,number,specialchar,])

let passcopy=useCallback(()=>{
  window.navigator.clipboard.writeText(pass)
  refe.current?.select();
  // refe.current.style.backgroundColor ="green";  
  alert("password copied")
},[pass])

 
  return (
  <div>
    <div className='grid place-content-center w-screen h-screen'>
      <div className='text-amber-50 flex grid place-content-center mb-5 text-3xl'>
         Random Password Genarator
      </div>
      <div className='grid place-content-center bg-blue-950 h-50 w-100 rounded-2xl'>
        <div className='rounded-2xl mr-14 '>
       
          <input type="text" value={pass} className='bg-amber-50 h-10 text-[17px] w-80 rounded-l-2xl overflow-auto' ref={refe}/>
          <button className='bg-red-400 rounded-r-2xl w-15 h-10 absolute' onClick={passcopy}>copy</button>
        </div>

        <div className='mt-5'>
          <input type="range" min={8} max={100} onChange={(e)=>setlength(e.target.value)}/>
           <label className='text-white ml-2'>Length {length}</label>
        </div>

        <div className='text-amber-50 gap-1 mt-3 flex text-[18px]'>
          <input type="checkbox"
          checked={number}
          onClick={()=>setnumber(!number)
          }
          />
          <label>Number</label>

          <input type="checkbox" checked={specialchar}
          className='ml-10' onClick={()=>setspecialchar(!specialchar)}/>
          <label>Specialchar</label>
        </div>

      </div>

    </div>
  </div>
  )
}

export default App
