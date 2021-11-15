import '../styles/globals.css'
import NavBar from "/components/navBar/navBar";

function MyApp({ Component, pageProps}) {
    if(Component.getLayout){
        return  Component.getLayout(<Component {...pageProps} />)
    }

  return (
      <>
        <NavBar/>
        <Component {...pageProps} />
      </>

  )
}

export default MyApp
