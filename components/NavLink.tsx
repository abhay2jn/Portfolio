import React from 'react'
import Link from 'next/link';
import Image from 'next/image';




const NavLink = ({src, link}: { src: string; link :string;}) => {
  return (
    <a href={link}>
        <Image src={src} alt='github' width={20} height={20} />
    </a>
  )
}

export default NavLink