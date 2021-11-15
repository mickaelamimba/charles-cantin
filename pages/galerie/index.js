import React from 'react';
import Image from "next/image";
import {parsStringSug} from "../../utils/getSlugs";
import Link from "next/link";


const Galerie = ({data}) => {
    return (
        <div className='sm:grid sm:grid-cols-3 sm:gap-5 container mx-auto py-4' >
            {data?.map((item)=>(
                <div className='shadow-md rounded mt-3  bg-white' key={item.default.attributes.title}>

                    <figure className=' bg-auto md:bg-contain overflow-hidden mb-5'>
                        <Image  src={`/${item.default.attributes.thumbnail}`} width={400} height={400} objectFit='cover' layout='responsive' />
                    </figure>
                    <div className='p-3'>
                        <h2 className='text-2xl font-medium'>{item.default.attributes.title}</h2>
                        <p>categories:
                            <Link href={`/galerie/categories/${encodeURIComponent(parsStringSug(item.default.attributes.category))}`}>
                                <span className='bg-blue-100 shadow p-1 rounded-md cursor-pointer'><a>{item.default.attributes.category}</a></span>
                            </Link>

                        </p>
                    </div>


                </div>
            ))}
        </div>
    );
};
export const getStaticProps = async () =>{

   const galerieSlugs=((context)=>{
       const keys = context.keys()
       const data = keys.map((key,index)=>{
           let slug = key.replace(/^.*[\\\/]/,'').slice(0,-3)
           return slug
       })
       return data
   })(require.context('/content/galeries',true, /\.md$/))

    const content = await galerieSlugs.map(async (slug)=> await  import(`/content/galeries/${slug}.md`))

    const  datas= await Promise.all(content)
    const  data =JSON.parse(JSON.stringify(datas))

    return {
        props: {data}
    }
}
export default Galerie;