import React,{useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import styles from'../styles/Home.module.css'
import Script from 'next/script'
export default function Home() {
  let aa=``
  useEffect(()=>{
      let aa=localStorage.getItem(`Name`)  
  })
  return (
    <>
<Head>
  <title>Health Care Pharmacy</title>
  <meta name="description" content="Medical Pharmacy" />
  <meta name="keywords" content="Medical" />
</Head>
  <Script>
  nam=localStorage.getItem(`Name`)
  </Script>
  <br />
    <h1 class="my-3 text-center text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl oleo">
<Typewriter
  options={{
    strings: [ `Welcome ${d()} to Health Care Pharmacy`,`Order now on Health Care Pharmacy with 10% discount`,`More Than Just Medicine`],
    autoStart: true,
    deleteSpeed:10,
    delay:40,
    loop: true,
  }}/></h1>
   <button style={{background:`#02b50e`}} className="flex p-2 text-xs rounded-lg mx-auto bg-gradient-to-r font-sans italic text-white font-bold sm:text-sm md:text-sm lg:text-lg xl:text-lg"><Link href="/order">Order now</Link></button>
<br></br>
<img src={"https://muhammedraiyaan2.github.io/Server/banner.jpg"} alt="banner" />
<h1 className={"my-3 text-center text-sm md:text-xl address italic text-red-600 "}>Address: No.I86/IA, Madhina Nagar, Konavattam, Vellore - 632013</h1>
   {/* <Image
   src={banner2}
   height={400}/>

   <br/>
   <div className="bg-blue-400 text-white p-1 text-center text-[0.7rem] sm:text-sm md:text-base lg:text-lg xl:text-lg">
 <b> Address: #186/1A, Ponniyamman Koil Street, Madeena Nagar, Konavattam, Vellore - 632013</b>
</div> */}
</>
)
function d(){
  return aa
}
}