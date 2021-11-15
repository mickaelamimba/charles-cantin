import React,{useEffect,useState} from 'react';
import Link from 'next/link'
import Image from "next/image";


const NavBar = () => {
    const [data,setData]=useState({})
    console.log(data)
    useEffect(() =>{
        (async () =>{
            const value = await import(`/content/pages/${'navigations'}.md`)
            setData(value.default)
        })()
    },[] )

const {attributes}=data||{}

    return (
        <nav className='py-5 shadow-md bg-white'>
            <ul className='sm:grid sm:grid-cols-3 sm:gap-5'>
                <div className='sm:col-span-2 sm:flex justify-around'>
                    {attributes?.menu.map((item)=>(
                        <li key={item.title}>
                            <Link href={item.url}>
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    ))}
                </div>

                <div className='sm:flex justify-end'>
                    {attributes?.réseaux.map((item)=>(
                        <li className='sm:px-3' key={item.title}>
                            <Link href={item.url}>
                                <a>
                                    <Image  src={`/${item.icons}`} width={15} height={15} objectFit='contain' />
                                    <span className='sm:px-2'>{item.title}</span>

                                </a>
                            </Link>
                        </li>
                    ))}
                </div>

            </ul>

        </nav>
    );
};

export default NavBar;

