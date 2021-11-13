import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home=({content})=> {
    const  {attributes}= content
  console.log(content)
  return (
    <>
     <h1>{attributes.title}</h1>
      <p>{attributes.description}</p>
    </>
  )
}

export const getStaticProps = async () =>{
  const content = await import(`../content/pages/${'home'}.md`)
  return {
    props: {content: content.default}
  }
}
export default Home