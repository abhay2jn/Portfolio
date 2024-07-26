import { FaGithub } from 'react-icons/fa'
import React from 'react'
import Link from 'next/link';

const NavLink = ({src, link}: { src : string; link :string;}) => {
  return (
    <Link href={}>
        <FaGithub width={20} height={20} />
    </Link>
  )
}

export default NavLink