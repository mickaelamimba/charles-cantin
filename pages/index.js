import Head from 'next/head'
import Image from 'next/image'


const Home=({content})=> {
    const  {attributes}= content

  return (
    <>
      <div className='bg-primary-main shadow py-7 overflow-auto'>
        <h1 className='font-bold text-primary-text text-3xl text-center'>{attributes.title}</h1>
      </div>


      <figure>
        <Image src={`/${attributes.thumbnail}`} alt={attributes.title} width={400} height={400} objectFit='contain' layout='responsive' />
      </figure>

    </>
  )
}

export const getStaticProps = async () =>{

  const content = await import(`/content/pages/${'home'}.md`)
  return {
    props: {content: content.default}
  }
}
export default Home