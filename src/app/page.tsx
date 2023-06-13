import Button from '@/components/Button/Button'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='flex items-center gap-[100px]'>
      <div className='flex-[1] flex flex-col gap-[50px]'>
        <h1 className='title text-[72px] bg-[linear-gradient(to_bottom,#194c33,#bbb)] bg-clip-text font-bold'>Better design for your digital products.</h1>
        <p className='text-2xl font-light'>Turning your Idea into Reality. We bring together the teams form the global tech industry.</p>
        <Button text='See Our Works' url='/portfolio'/>
      </div>
      <div className='flex-[1]'>
        <Image className='object-cover animate-[move_3s_infinite_ease_alternate]' src="/hero.png" alt="hero image" width={500} height={500} />
      </div>
    </main>
  )
}
