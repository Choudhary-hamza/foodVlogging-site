import {getBySlug} from '@/lib/mealsDb';
import NotFound from '@/app/not-found';
import Image from 'next/image';
import styling from './page.module.css';
export default async function MealsChildPage({params}) {
    const meal= await getBySlug(params.mealsChild);
    if(!meal){
        return <NotFound/>
    }
    else{
        return (
            <>
            <header className={styling.header}>
                <div className={styling.image}>
                <Image src={meal.image} alt={meal.title} fill >

</Image>
                </div>
                <div className={styling.headerText}>
                    <h1>
                        {meal.title}
                    </h1>
                    <p>by <span>{meal.creator}</span></p>
                    <h5>{meal.summary}</h5>
                </div>
            </header>
            <main className={styling.main}>
            <div dangerouslySetInnerHTML={{ __html: meal.instructions.replace(/\n/g, "<br/>") }} />
            </main>
            </>
        )
    }
}