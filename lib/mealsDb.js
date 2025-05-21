import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs';
import sql from 'better-sqlite3';
const db=sql('meals.db');

export default async function getMeals(){
    await new Promise((resolve)=>setTimeout(resolve,2000));
    return db.prepare('SELECT * FROM meals').all();
}
export async function getBySlug(slug){
    const meal=await db.prepare('SELECT * FROM meals WHERE slug=?').get(slug);
    return meal || null;
}
export async function createMeal(meal){
    meal.slug=slugify(meal.title,{lower:true});
    meal.instructions=xss(meal.instructions);
    const extension=meal.image.name.split('.').pop();
    const fileName=`${meal.slug}.${extension}`
    const path=fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage= await meal.image.arrayBuffer();
    path.write(Buffer.from(bufferedImage),(error)=>{
        if(error){
            throw new Error('Failed to write image to file');
        }
    })
    meal.image=`/images/${fileName}`;
    db.prepare(`INSERT INTO meals(title,slug,image,summary, instructions,creator,creator_email) VALUES(
         @title,
         @slug,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
    )`).run(meal)
}