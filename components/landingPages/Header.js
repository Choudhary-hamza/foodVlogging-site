import logoImage from "@/assets/logo.png";
import style from './Header.module.css';
import Link from "next/link";
import Image from "next/image";
import NavLinks from './NavLinks';

export default function LandingHeader(){
    return<header className={style.header}>
        <Link href="/" className={style.logo} >
        <Image src={logoImage} alt="this is the logo" width={60} height={60} priority />
        <p>NextLevel Food</p>
        </Link>
        <nav className={style.nav}>
            <ul >
                <li><NavLinks href='/'>Home</NavLinks></li>
                <li><NavLinks href='/meals'>Meals</NavLinks></li>
                <li><NavLinks href='/community'>community</NavLinks></li>
            </ul>
            </nav>
    </header>
}