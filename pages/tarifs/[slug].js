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
            <section className='sm:grid sm:grid-cols-4 sm:gap-5 bg-blue-100 shadow rounded-md '>
                <div className='bg-red-400 py-7'>
                    <h2>{attributes.title}</h2>
                </div>
                <div className='sm:col-span-3 '>
                    <p>{attributes.description}</p>
                </div>
            </section>
            <button>
                <Link href='/tarifs'>
                    <a>Tarif</a>
                </Link>
            </button>



            
        </div>
    );
};

    export default Prestation;
