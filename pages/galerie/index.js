import React, {useState, useEffect, useCallback, useRef} from 'react';
import Image from "next/image";
import {formatReturn, getSlugs, parsStringSug} from "/utils/getSlugs";
import Link from "next/link";
import Search from "../../components/form/search";



const Galerie = ({data}) => {
    const [searchValue, setSearchValue]=useState('')
    const [galerie, setGalerie]=useState([])
    const [loading,setLoading]=useState(false)
    const handleFilter=(data)=>{
      return  data.filter((item) => item.default.attributes.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
    }

    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState(4);

    const paginate =(array,page_size,page_number)=>{


        let total  = array.length
        let perPage = Math.ceil(total/page_size)
        return array.slice(0,page_size)
        //return array.slice((page_number -1)*page_size,page_number*page_size)
    }
    const loader = useRef(null);
    const handleObserver = useCallback((entries) => {

        const target = entries[0];
        if (target.isIntersecting) {
            setOffset((prev) => prev + 4)
            setPage((prev) => prev + 1);
        }
    }, []);
    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        }

        setGalerie(data)

        const observer = new IntersectionObserver(handleObserver, option);

        if (loader.current){
            observer.observe(loader.current);
            setLoading(true)
        }
        setLoading(false)
    },[data,handleObserver])
    const handleChange = (e)=>{
        setSearchValue(e.target.value)
    }

    return (
        <>
            <div  className='container mx-auto px-9 sm:flex justify-center align-items-center'>
                <div className='flex-auto'>
                    <h1 className='font-thin text-2xl py-4'>Ma Galerie </h1>
                    <Search handleChange={handleChange} handleSearch={searchValue}/>

                    <div   className='sm:grid sm:grid-cols-3 sm:gap-5  ' >
                        {handleFilter(paginate(galerie,offset,page))?.map((item)=>(
                            <div className='shadow-md rounded mt-3  bg-white' key={item.default.attributes.title}>

                                <figure className=' bg-auto md:bg-contain  mb-5'>
                                    <Image className="overflow-hidden"  src={`/${item.default.attributes.thumbnail}`} alt={item.default.attributes.title} width={400} height={400} objectFit='cover' layout='responsive' />
                                </figure>
                                <div className='p-3'>
                                    <h2 className='text-2xl font-medium'>{item.default.attributes.title}</h2>
                                    <p className='my-3'>Categories:
                                        <Link href={`/galerie/categories/${encodeURIComponent(parsStringSug(item.default.attributes.category))}`} passHref={true}>
                                            <span className='bg-blue-100 shadow ml-2.5 px-3 py-2  rounded-md cursor-pointer'><a>{item.default.attributes.category}</a></span>
                                        </Link>

                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                    {loading && <h2>Loading...</h2>}
                    <div ref={loader} />
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