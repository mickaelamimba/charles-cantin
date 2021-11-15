import React from 'react';
import {formatReturn, getSlugs, parsStringSug} from "../../../utils/getSlugs";
import Image from "next/image";
import Link from "next/link";
export const getStaticProps = async({params})=>{
    const {slug}=params
    const content = await import(`/content/categories/${slug}.md`)
    const galerie= getSlugs(require.context('/content/galeries',true, /\.md$/))
    const data = await galerie.map(async (slug)=> await  import(`/content/galeries/${slug}.md`))
    const galeries=await Promise.all(data)
    const sort= galeries.filter((item)=>parsStringSug(item.default.attributes.category) === slug )
    const contentSort= await formatReturn(sort)


    return{
        props: {contentSort}
    }

}
export const getStaticPaths = async()=>{
    const categories= getSlugs(require.context('/content/categories',true, /\.md$/))
    const paths = categories.map((slug)=> `/galerie/categories/${slug}`)
    return{
        paths,
        fallback:false
    }
}


const Category = ({contentSort}) => {
    return (
        <div>
            <div className='sm:grid sm:grid-cols-3 sm:gap-5 container mx-auto py-4'>
                {contentSort?.map((item)=>(
                    <div className='shadow-md rounded-lg mt-3  bg-white' key={item.default.attributes.title}>

                        <figure className=' bg-auto md:bg-contain overflow-hidden mb-5'>
                            <Image src={`/${item.default.attributes.thumbnail}`} width={400} height={400} objectFit='cover' layout='responsive' />
                        </figure>
                        <div>
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

        </div>
    );
};

    export default Category;