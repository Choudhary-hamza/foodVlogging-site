'use client';
import burgerPic from '@/assets/burger.jpg';
import curryPic from '@/assets/curry.jpg';
import dumplingsPic from '@/assets/dumplings.jpg';
import macncheesePic from '@/assets/macncheese.jpg';
import pizzaPic from '@/assets/pizza.jpg';
import schnitzelPic from '@/assets/schnitzel.jpg';
import tomatoSaladPic from '@/assets/tomatoSalad.jpg';
import { useState,useEffect  } from 'react';
import styling from './imageSlider.module.css';
import Image from 'next/image';
export default function ImageSlider() {
    const images=[
        {image:burgerPic, alt:"burger"},
        {image:curryPic,alt:"curry image"},
        {image:dumplingsPic,alt:"curry image"},
        {image:macncheesePic,alt:"curry image"},
        {image:pizzaPic,alt:"curry image"},
        {image:schnitzelPic,alt:"curry image"},
        {image:tomatoSaladPic,alt:"curry image"}
    ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
          );
        }, 5000);
        
        return () => clearInterval(interval);
      }, [currentImageIndex]);
    return (
        <div className={styling.slideShow}>
            {
                images.map((image, index) => (
                    <Image 
                    key={index}
                    src={image.image}
                    alt={image.alt}
                    className={index === currentImageIndex ? styling.active : ''}
                    />
                ))
            }
        </div>
    );
}