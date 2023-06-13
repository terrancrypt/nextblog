import Link from 'next/link'
import React from 'react'

interface ButtonProps{
    text: string;
    url?: string;
    buttonType?: "button" | "submit";
}

const Button = ({text, url, buttonType}: ButtonProps) => {
  return (
 
        <Link href={url || ""}>
            <button type={buttonType || "button"} className="p-5 bg-[#194c33] text-white rounded w-max hover:bg-[#53c28b] transition-all">{text}</button>
        </Link>
   
  )
}

export default Button