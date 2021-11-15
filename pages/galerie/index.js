import React, {useState,useEffect} from 'react';
import Image from "next/image";
import {formatReturn, getSlugs, parsStringSug} from "/utils/getSlugs";
import Link from "next/link";
import Search from "../../components/form/search";


const Galerie = ({data}) => {
    const [searchValue, setSearchValue]=useState('')
    const [galerie, setGalerie]=useState([])
    const handleFilter=(data)=>{
      return  data.filter((item) => item.default.attributes.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
    }
    useEffect(() => {
        setGalerie(data)
    },[data])
    const handleChange = (e)=>{
        setSearchValue(e.target.value)
    }
    return (
        <>
            <div className='container mx-auto py-4 sm:flex justify-center align-items-center'>
                <div>
                    <Search handleChange={handleChange} handleSearch={searchValue}/>
                    <div className='sm:grid sm:grid-cols-3 sm:gap-5 ' >
                        {handleFilter(galerie)?.map((item)=>(
                            <div className='shadow-md rounded mt-3  bg-white' key={item.default.attributes.title}>

                                <figure className=' bg-auto md:bg-contain overflow-hidden mb-5'>
                                    <Image  src={`/${item.default.attributes.thumbnail}`} alt={item.default.attributes.title} width={400} height={400} objectFit='cover' layout='responsive' />
                                </figure>
                                <div className='p-3'>
                                    <h2 className='text-2xl font-medium'>{item.default.attributes.title}</h2>
                                    <p>categories:
                                        <Link href={`/galerie/categories/${encodeURIComponent(parsStringSug(item.default.attributes.category))}`} passHref={true}>
                                            <span className='bg-blue-100 shadow p-1 rounded-md cursor-pointer'><a>{item.default.attributes.category}</a></span>
                                        </Link>

                                    </p>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>

    );
};
export const getStaticProps = async () =>{


    const galerieSlugs=getSlugs(require.context('/content/galeries',true, /\.md$/))
    const content = await galerieSlugs.map(async (slug)=> await  import(`/content/galeries/${slug}.md`))


    const  data = await formatReturn(content)

    return {
        props: {data}
    }
}
export default Galerie;