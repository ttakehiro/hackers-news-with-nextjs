import '../styles/global.scss'
import Head from 'next/head'
import React from 'react'
import { RecoilRoot } from 'recoil'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Casually</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <RecoilRoot>
        <div className='base'>
          <div className='container'>
            <Component {...pageProps} />
          </div>
        </div>
      </RecoilRoot>
    </>
  )
}

export default App