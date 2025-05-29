import React from "react";

const SwipeCards = () => {
    return(
        <div
        className="min-h-screen bg-neutral-100"
        style={{
            //backgroundImage: "./dummy_image.jpg",
        }}>
            { cardData.map( card => {
                return < Card key={card.id} {...card} />
            }) }

        </div>
    );
}

const Card = ({ id, url } : { id:number, url:string }) => {
    return <img src={url} alt="Placeholder"
    className="h-96 w-72 object-cover rounded-lg"
    />
}

export default SwipeCards;

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

