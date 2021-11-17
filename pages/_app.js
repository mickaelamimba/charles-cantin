import '../styles/globals.css'
import NavBar from "/components/navBar/navBar";
import Footer from "../components/footer/footer";

function MyApp({ Component, pageProps}) {
    if(Component.getLayout){
        return  Component.getLayout(<Component {...pageProps} />)
    }

  return (
      <>
        <NavBar/>
        <Component {...pageProps} />
          <Footer/>
      </>

  )
}

export default MyApp
