import React from 'react';
import {getSlugs} from "../../utils/getSlugs";
import Link from "next/link";

export const getStaticProps = async({params})=>{
    const {slug}=params
    const content = await import(`/content/prestations/${slug}.md`)
    return{
        props: {content: content.default}
    }

}
export const getStaticPaths = async()=>{
    const prestation= getSlugs(require.context('/content/prestations',true, /\.md$/))
    const paths = prestation.map((slug)=> `/tarifs/${slug}`)
    return{
        paths,
        fallback:false
    }
}

const Prestation = ({content}) => {
    const  {attributes}= content
    return (
        <div>
            <section className='sm:grid sm:grid-cols-4 sm:gap-5 bg-blue-100 shadow rounded-md h-screen '>
                <div className='bg-primary-main px-3 text-2xl text-primary-text py-7'>
                    <h2>{attributes.title}</h2>
                </div>
                <div className='sm:col-span-3 py-4 px-2.5 '>
                    <p>{attributes.description}</p>
                </div>
            </section>
            <button className='bg-blue-100 shadow ml-2.5 hover:bg-primary-hover px-3 py-1 my-5 rounded-md cursor-pointer text-xl'>
                <Link href='/tarifs' passHref={true}>
                    <a>Tarif</a>
                </Link>
            </button>



            
        </div>
    );
};

    export default Prestation;
