import Image from 'next/image'
import React from 'react'
import { notFound } from "next/navigation";
import { Metadata } from "next";

async function getData(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store"
    })
    if (!res.ok) {
        return notFound()
    }

    return res.json()
}

interface MetadataProps {
    params: { id: string }
}

export const generateMetadata = async ({ params }: MetadataProps,): Promise<Metadata> => {

    const id = params.id;

    const post = await getData(id);

    return {
        title: post.title,
    };
};


interface DataPost {
    userId: number
    id: number,
    title: string,
    body: string
}

interface BlogPostProps {
    params: {
        id: string
    }
}

const BlogPost = async ({ params }: BlogPostProps) => {
    const data: DataPost = await getData(params.id)

    return (
        <div className="">
            <div className='flex gap-[20px]'>
                <div className='flex-[1]'>
                    <h1>{data.title}</h1>
                    <p>Test</p>
                    <div className='flex gap-[10px] items-center'>
                        <Image src="https://images.pexels.com/photos/7640743/pexels-photo-7640743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={40} height={40} alt='test' className='object-contain object-top rounded-full' />
                        <span>John Doe</span>
                    </div>
                </div>
                <div className='flex-[1] w-full h-[400px] relative'>
                    <Image className='object-cover' src="https://images.pexels.com/photos/17060790/pexels-photo-17060790/free-photo-of-fashion-people-woman-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='test' fill />
                </div>
            </div>

            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi, deserunt porro veniam sapiente odio amet? Dolorem nemo architecto provident pariatur ab porro iusto aliquam. Dolorum, atque aliquam iure, at, exercitationem mollitia temporibus unde voluptatum provident totam cumque vel aliquid sequi odit voluptatibus! Velit eaque commodi quia repudiandae harum similique laboriosam nam ullam. Amet perferendis, corrupti ut ab saepe consequatur necessitatibus fugit, veniam et nesciunt commodi quis modi quia quo tenetur vero, blanditiis beatae porro voluptatibus impedit aliquam architecto qui? Quas obcaecati nam id quae consequuntur dicta illo perferendis veniam, ipsum, doloremque mollitia quis reiciendis, aperiam numquam rem illum enim.</p>
            </div>
        </div>
    )
}

export default BlogPost