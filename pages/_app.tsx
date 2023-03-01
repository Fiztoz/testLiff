import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect } from 'react'
// import {liff} from '@line/liff'
const liffId = "1660679590-jV8GGlze"

export default function App({ Component, pageProps }: AppProps) {

  useEffect( () => {

    const Liff = async () => {
    const liff = (await import('@line/liff')).default
    try{
      if(liffId !== undefined){
        await liff.init({ liffId })
      }
    }catch (error) {
        console.error('liff init error', error)
      }
    if(!liff.isLoggedIn()){
      liff.login()
    }
    }
    Liff()
  }, []);


  return <Component {...pageProps} />
}
