import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from'../styles/Home.module.css'
export default function Home() {
  return (
<>
<Head>
  <title>Health Care Pharmacy</title>
  <meta name="description" content="Medical Pharmacy" />
  <meta name="keywords" content="Medical" />
</Head>
    <h1 class="my-3 text-center text-sm sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl oleo text-lime-500">Welcome to the Health Care Pharmacy</h1>
   {/* <button className="flex p-2 text-xs rounded-lg mx-auto bg-gradient-to-r font-sans italic from-emerald-400 to-emerald-500 text-white font-bold sm:text-sm md:text-sm lg:text-lg xl:text-lg"><Link href="/order">Order now</Link></button> */}

   {/* <Image
   src={banner2}
   height={400}/>

<br/>
<div className="bg-blue-400 text-white p-1 text-center text-[0.7rem] sm:text-sm md:text-base lg:text-lg xl:text-lg">
 <b> Address: #186/1A, Ponniyamman Koil Street, Madeena Nagar, Konavattam, Vellore - 632013</b>
</div> */}
</>
  )
}
