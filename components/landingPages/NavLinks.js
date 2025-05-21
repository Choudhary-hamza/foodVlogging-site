'use client';
import Link from "next/link";
import style from './Header.module.css';
import { usePathname } from "next/navigation";
export default function NavLinks({href,children}){
    const path=usePathname();

    return(
        <Link href={href} className={path===href?style.active:''}>{children} </Link>
    )
}