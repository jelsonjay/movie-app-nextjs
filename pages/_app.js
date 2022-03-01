import Header from 'components/Header'
import {ThemeProvider} from '@emotion/react'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'

function MyApp({ Component, pageProps, navbar}) {

  console.log(navbar)

  return (
<>
<ThemeProvider theme={theme}>
   <GlobalStyles />
    <Header navbar={navbar}/>
    <Component {...pageProps} />
 </ThemeProvider>
</>
    
    
  )
}

const {publicRuntimeConfig} = getConfig()

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navbars`)
  const navbar = await res.json()

  return{
    navbar
  }
}

export default MyApp
