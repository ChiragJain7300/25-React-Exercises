import { useEffect, useState } from "react";
import './css/imgSlider.css'
import {BsArrowBarLeft, BsArrowBarRight, } from "react-icons/bs"

export default function ImageSlider({ url }){
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState("");
    const [Loading, setLoading] = useState(false);

    useEffect(()=>{
        if(url != "") getImagesFromUrl(url);
    }, [url])
    console.log(images);

    const getImagesFromUrl = async (url) => {
        try {
            setLoading(true);
            const imagesRes = await fetch(url);
            const images = await imagesRes.json();
            if(images != null)
            {
                setImages(images);
                setLoading(false);
            }
            
        } catch (error) {
            setErrorMsg(error);
            setLoading(true);
        }
    }
    const handleNext = () => {
       setCurrentSlide(currentSlide === 9 ? 0 : (currentSlide + 1));
    }
    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? 9 : (currentSlide - 1));
     }
    if(Loading)
        return (<h1>The Images are Loading</h1>);
    if(errorMsg)
        return (<h1>OOPS!! Something has gone wrong</h1>)
    return (
        <>
            <h1>Image Slider</h1>
            <div id="imageSliderCont">
                <BsArrowBarLeft className="arrow left" onClick={handlePrev}/>
                {
                    images.map((imgObj, index) => (
                        currentSlide === index ? <div className="imgCont">
                        <img key={imgObj} src={imgObj.download_url} alt={imgObj.download_url} className="img"/>
                        </div> : null
                        
                    ))
                }
                <BsArrowBarRight className="arrow right" onClick={handleNext}/>
                <span className="circle-indicators">
                    {
                        images && images.length > 0 ? images.map((_,index) => (
                            <button key={index} onClick={() => setCurrentSlide(index)} className={index===currentSlide?"circle-indicator current-indicator":"circle-indicator"}></button>
                        )) : null
                    }
                </span>
            </div>
            
        </>
    );
}