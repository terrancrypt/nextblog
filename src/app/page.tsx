import Image from 'next/image'


export default function Home() {
  return (
    <main className='flex items-center gap-[100px]'>
      <div className='flex-[1] flex flex-col gap-[50px]'>
        <h1 className='title text-[72px] bg-[linear-gradient(to_bottom,#194c33,#bbb)] bg-clip-text font-bold'>Better design for your digital products.</h1>
        <p className='text-2xl font-light'>Turning your Idea into Reality. We bring together the teams form the global tech industry.</p>
        <button className='bg-[#194c33] text-white p-5 rounded w-max hover:bg-[#53c28b] transition-all'>See Our Works</button>
      </div>
      <div className='flex-[1]'>
        <Image className='object-cover' src="/hero.png" alt="hero image" width={500} height={500} />
      </div>

    </main>
  )
}
