import { redirect } from "next/navigation";
import classes from "./page.module.css";
import ImagePicker from "@/components/mealPage/ImagePicker";
import { createMeal } from "@/lib/mealsDb";
import SubmitButton from "@/components/mealPage/SubmitButton";
import { revalidatePath } from "next/cache";

export default function ShareMealPage() {
  async function submitHandler(formData) {
    "use server";
    // first we will get data from the form
    function isValidInput(text) {
      return !text || text.trim() === "";
    }
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };
    console.log(meal.image);
    if (
      isValidInput(meal.title) ||
      isValidInput(meal.summary) ||
      isValidInput(meal.instructions) ||
      isValidInput(meal.creator) ||
      isValidInput(meal.creator_email) ||
      meal.image.size === 0 ||
      !meal.image ||
      !meal.creator_email.includes("@")
    ) {
      alert("Please fill in all fields");
    }
    await createMeal(meal);
    revalidatePath("/meals");
    redirect("/meals");
  }
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={submitHandler}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="food image" name="image" />
          <p className={classes.actions}>
            <SubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}
