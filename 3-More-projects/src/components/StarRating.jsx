import {FaStar} from "react-icons/fa"
export default function StarRating({noOfStars=5, size=40}){
    const handleClick = () => {}
    const handleMouseOver = (index) => {
        
    }
    const handleMouseLeave = (index) => {
        console.log(index);
    }

    return (
        <>
            <h1 style={{color: "yellow"}}>Star Rating</h1>
            {
                [...Array(noOfStars)].map((_, index) => (
                    <FaStar size={size} key={index} onClick={() => handleClick(index)} onMouseLeave={() => handleMouseLeave(index)} onMouseOver={() => handleMouseOver(index)}/>
                ))
            }
        </>
    );
}