import { useState } from "react";
import { CSSProperties } from "styled-components"

const slideStyles: CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const rightArrowStyles: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const leftArrowStyles: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const sliderStyles: CSSProperties = {
    position: "relative",
    height: "100%",
};

const dotsContainerStyles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
};

const dotStyle: CSSProperties = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
};
export interface ISlide {
    url: string;
    title: string;
}

interface IImageSliderProps {
    slides: ISlide[];
}
const ImageSlider = (props: IImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === props.slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${props.slides[currentIndex].url})`,
    };

    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground}></div>
            <div style={dotsContainerStyles}>
                {props.slides.map((slide: ISlide, slideIndex: number) => (
                    <div
                        style={dotStyle}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;