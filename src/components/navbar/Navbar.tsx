import Link from 'next/link';
import React from 'react'


const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const Navbar = () => {

    return (
        <header className='h-[100px] flex justify-between items-center'>
            <Link href='/' className='font-bold text-[22px]'>NextBlog</Link>
            <div className='flex items-center gap-5'>
                {links.map((link) => (
                    <Link key={link.id} href={link.url} >{link.title}</Link>
                ))}
                <button className='p-[5px] bg-[#194c33] text-white rounded hover:bg-[#53c28b] transition-all'>Logout</button>
            </div>


        </header>

    )
}

export default Navbar