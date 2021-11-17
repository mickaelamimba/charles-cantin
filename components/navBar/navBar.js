import React,{useEffect,useState} from 'react';
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from 'next/router'

const NavBar = () => {
    const [data,setData]=useState({})
    const router = useRouter()
    const {attributes}=data||{}
    useEffect(() =>{
        (async () =>{
            const value = await import(`/content/pages/${'navigations'}.md`)
            setData(value.default)
        })()
    },[] )



    return (
        <nav className='py-5 px-4 shadow-md bg-white'>
            <ul className='sm:grid sm:grid-cols-3 sm:gap-5'>
                <div className='sm:col-span-2 sm:flex justify-around'>
                    {attributes?.menu.map((item)=>(
                        <li className='py-4' key={item.title} >
                            <Link href={item.url} passHref={true}>
                                <a  className={router.asPath === item.url?'text-primary-text':'text-primary-main'}>{item.title}</a>
                            </Link>
                        </li>
                    ))}
                </div>

                <div className='md:flex justify-end align-items-center'>
                    {attributes?.réseaux.map((item)=>(
                        <li className='sm:px-3 py-4' key={item.title}>
                            <Link href={item.url} passHref={true}>
                                <a>
                                    <Image  src={`/${item.icons}`} alt={item.title} width={15} height={15} objectFit='contain' />
                                    <span className='px-2'>{item.title}</span>

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

