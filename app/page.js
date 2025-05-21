
import Link from "next/link";
import './globals.css';
import styling from "./homeStyle.module.css";
import ImageSlider from "@/components/images/imageSlider";

export default function Home() {
  return (
    <>
    <header className={styling.head}>
        <div className={styling.imgSlide}>
          <ImageSlider/>
        </div>
        <div className={styling.text}>
          <h1>NEXTLEVEL FOOD FOR</h1>
          <h1>NEXTLEVEL FOODIES</h1>
          <p>Taste & share food from all over the world.</p>
          <div className={styling.links}>
            <Link href="/community" className={styling.link1}>Join the community</Link>
            <Link href="/meals" className={styling.link2}>Explore meals</Link>
          </div>
        </div>
    </header>
    <main>
        <section className={styling.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styling.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
