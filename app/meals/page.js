import styling from './page.module.css';
import Link from "next/link";
import MealsGrid from '@/components/mealPage/mealsGrid';
import getMeals from '@/lib/mealsDb';

export default async function MeaListPage() {
    let meals = [];
    try {
        meals = await getMeals(); 
    } catch (error) {
        console.error("Error loading meals:", error);
    }

    return (
        <>
            <header className={styling.header}>
                <h1>Delicious meals, created <span>by you</span></h1>
                <h2>Choose your favorite recipe and cook it yourself. It is easy and fun!</h2>
                <Link href="/meals/share">Share Your Favourite Recipe</Link>
            </header>
            <main className={styling.main}>
                {meals.length > 0 ? (
                    <MealsGrid meals={meals} />
                ) : (
                    <p>No meals found. Please try again later.</p>
                )}
            </main>
        </>
    );
}