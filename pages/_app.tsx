import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const threeScript=document.createElement('script')
    threeScript.setAttribute('id','threeScript')
    threeScript.setAttribute('src','three.r119.min.js')
    threeScript.setAttribute('src','vanta.net.min.js')
    document.getElementsByTagName('head')[0].appendChild(threeScript)
    return()=>{
      if(threeScript){
        threeScript.remove
      }
    }
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
