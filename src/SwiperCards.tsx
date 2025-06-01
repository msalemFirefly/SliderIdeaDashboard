import React, { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';

type Card = {
    id:number;
    url:string;
}

const cardData: Card[] = [
    {
        id:1,
        url:"/dummy_image.jpg",
    },
    {
        id:2,
        url:"/dummy_image.jpg",
    },
    {
        id:3,
        url:"/dummy_image.jpg",
    },
    {
        id:4,
        url:"/dummy_image.jpg",
    },
    {
        id:5,
        url:"/dummy_image.jpg",
    }
]

const SwipeCards = () => {
    const [cards, setCards] = useState<Card[]>(cardData);
    
    return(
        <div
        className="min-h-screen bg-neutral-100 grid place-items-center"
        style={{
            //backgroundImage: "./dummy_image.jpg",
        }}>
            { cards.map( card => {
                return < Card key={card.id}
                cards={cards}
                setCards={setCards}
                {...card} />
            }) }
            <div className="min-h-screen bg-none z-0 grid place-items-center fixed">
                <h2 className="font-poppins">Your out of ideas.</h2>
            </div>

        </div>
    );
}

const Card = ({ id, url, cards, setCards } : { id:number; url:string; setCards: Dispatch<SetStateAction<Card[]>>; cards: Card[]; }) => {
    const x = useMotionValue(0);
    const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
    const rotate = useTransform(x, [-150, 150], [-18, 18]);

    const handleDragEnd = () => {
        if (Math.abs(x.get())  > 50){
            setCards(e => e.filter( (i) => i.id !== id ));            
        }
    } 

    return <motion.img src={url} alt="Placeholder"
        className="h-96 w-72 z-10 object-cover rounded-lg hover:cursor-grab active:cursor-grabbing"
        style={{
            gridRow:1,
            gridColumn:1,
            x,
            opacity,
            rotate
        }}
        drag="x"
        dragConstraints={{
            left:0,
            right:0,
        }}
        onDragEnd={handleDragEnd}
    />
}

export default SwipeCards;
