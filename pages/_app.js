import Link from 'next/link'
import Head from 'next/head'
import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'
import {useEffect,useState} from 'react'
import {useRouter} from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'
function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const [dropDown, setDropDown] = useState(false)
  const [dropDown2, setDropDown2] = useState(false)
  var router = useRouter()
  useEffect(() => {
    router.events.on("routeChangeStart",()=>{setProgress(40)})
    router.events.on("routeChangeComplete",()=>{setProgress(100)})
  }, [router.query])
  const dropFalse = (e) => {
    if(dropDown2){
      setDropDown(false)
    }
    else{
      setDropDown(true)
    }
  }
  return( 
    <>
        <Head>
  <title>Health care pharmacy</title>
  <meta name="description" content="Medical Pharmacy" />
  <meta name="keywords" content="Medical" />
</Head>
<LoadingBar
        color='red'
        progress={progress}
        waitingTime={800}
        onLoaderFinished={() => setProgress(0)}
      />
<Navbar/>
  <Component {...pageProps} />
  <br /><br /><br /><br /><br /><br />
    <Footer/>
  </>)
}

export default MyApp
