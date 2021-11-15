import React from 'react';
import {formatReturn, getSlugs, parsStringSug} from "../../utils/getSlugs";
import Link from 'next/link'

const Tarifs = ({data}) => {

    return (
        <div>
            <h1 className='font-medium text-3xl'>Tatif</h1>
            <div className='sm:grid sm:grid-cols-3  sm:gap-5'>
                {data?.map((item,i)=>(
                    <div className='shadow-md rounded-md bg-white'  key={i}>
                        <h2 className='text-3xl font-medium text-center py-7'>
                            <Link href={`/tarifs/${encodeURIComponent(parsStringSug(item.default.attributes.prestation))}`}>
                                <a>{item.default.attributes.prestation}</a>
                            </Link>

                        </h2>

                        <p className='bg-red-400 pl-3 py-4 text-xl'>prix: <span>{`${item.default.attributes.prix} €`}</span></p>

                    </div>
                ))}
            </div>


        </div>
    );
};

export default Tarifs;

export const getStaticProps = async () =>{
    const tarifs= getSlugs(require.context('/content/tarifs',true, /\.md$/))
   const content= await tarifs.map(async (slug)=> await  import(`/content/tarifs/${slug}.md`))
  const data= await formatReturn(content)

    
    return{
        props:{data}
    }
}