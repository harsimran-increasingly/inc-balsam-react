import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div><div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href='/' passHref={true}>

                    <a className="btn btn-ghost normal-case text-xl">Home</a>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <Link href='/cart' passHref={true}>
                        <li><a>Cart Page</a></li>
                    </Link>
                    <Link href='/about' passHref={true}>

                        <li><a>About Us</a></li>
                    </Link>
                </ul>
            </div>
        </div></div>
    )
}

export default Navbar