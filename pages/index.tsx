import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '../components/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import Script from 'next/script'

const Main: NextPage = () => {
  return (
    <>
      <Head>
        
        <meta/>

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="رزومه سید مسعود حسینی, Seyedmasoud Hosseini CV" />
        <meta property="og:description" content="Seyedmasoud Hosseini Sharif University of Technology"/>
        <meta property="og:title" content="Seyedmasoud Hosseini"/>
        <meta name="og:url" content="http://smasoudhosseini.ir"/>
        <meta name="keywords" content="سید مسعود حسینی, Seyedmasoud Hosseini, CV, رزومه , SUT, MUT, Cryptography " />
        <meta name="author" content="Seyedmasoud Hosseini" />
        
        <title>Seyedmasoud Hosseini</title>


      </Head>
      <Script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" />

      <Home/>
    </>
  )
}

export default Main
