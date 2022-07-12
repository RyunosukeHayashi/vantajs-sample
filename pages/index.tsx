import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import React, { useState, useEffect, useRef } from 'react'
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min'
// @ts-ignore
import * as THREE from 'three'

const Home: NextPage = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        THREE,mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      }))
    }
    return () => {
      // @ts-ignore
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div style={{minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}} ref={myRef}>
    <section style={{marginRight:300}}>
    <h1 style={{margin:0,color:'white',fontSize:100}}>Synapse</h1>
    <p style={{color:'white'}}>ココロザシの技術共有アプリ</p>
    </section>
    <section style={{}}>
    <Image src={'/signin.png'} width={200} height={50} layout='fixed'/>
    </section>
  </div>
}

export default Home
