import React,{useEffect, useState} from 'react'
import styles from'../styles/Home.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'
function Navbar() {
 const router = useRouter()
 const logout=()=>{
  localStorage.removeItem("Login")
  localStorage.removeItem("SignUp")
  router.push('/')
 }
 const [toggle, setToggle] = useState(false)
 const [logS, setLogS] = useState(false)
 const [logou, setLogou] = useState(false)
 const tog=()=>{
   if(toggle){
    setToggle(false)
   }
   else{
    setToggle(true)
   }
 }
 useEffect(() => {
   if(localStorage.getItem("Login")!=null){
     setLogS(false)
     setLogou(true)
   }
   else{
     setLogS(true)
     setLogou(false)
   }
 })
 
 return (
  <>
   <div className="flex my-0 mt-0 fixed z-0 top-0 left-0 right-0 w-full cursor-pointer flex-col md:flex-row h-20 md:h-16 py-3 justify-between md:justify-start text-white" style={{background:"rgb(69,129,255)"}}>
     <Link href="/"><h1 className={styles.brand}>Health care pharmacy</h1></Link>
    <div className="flex space-y-2 justify-center">
     <ul className="flex items-center space-x-4 mx-3">
      <li><Link href="/contact" className="font-bold text-xs md:text-base">Contact us</Link></li>
      <li><Link href="/order" className="font-bold text-xs md:text-base">Order Now</Link></li>
      {logS && <li><Link href="/login" className="text-xs md:text-base">Login</Link></li>}
      {logou && <li onClick={logout} className="text-xs md:text-base">Logout</li>}
     </ul>
    </div><br />
   </div>
   <br /><br />
  </>
 )
}

export default Navbar