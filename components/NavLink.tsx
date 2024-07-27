import React from 'react'
import Link from 'next/link';




const NavLink = ({src, link}: { src: string; link :string;}) => {
  return (
    <Link href={link}>
        < src={src} width={20} height={20} />
    </Link>
  )
}

export default NavLink