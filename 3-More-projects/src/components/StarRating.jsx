import { useState } from "react";
import "../App.css"
import {FaStar} from "react-icons/fa"
export default function StarRating({noOfStars=5, size=40}){
    const [hover, setHover] = useState(-1);
    const [rating, setRating] = useState(-1);

    const handleClick = (index) => {
        setRating(index);
    }
    const resetRating = () => {
        setRating(-1);
        setHover(-1);
    }
    const handleMouseMove = (index) => {
        setHover(index);
    }
    const handleMouseLeave = () => {
        setHover(rating);
    }

    return (
        <>
            <h1 style={{color: "yellow"}}>Star Rating</h1>
            {
                [...Array(noOfStars)].map((_, index) => (
                    <FaStar 
                        size={size} 
                        key={index} 
                        onClick={() => handleClick(index)} 
                        onMouseLeave={() => handleMouseLeave(index)} 
                        onMouseMove={() => handleMouseMove(index)}
                        className={index <= hover ? "active" : "inactive"}
                    />
                ))
            }
            <div>
                <button onClick={resetRating}>Reset Rating</button>
            </div>
            
        </>
    );
}