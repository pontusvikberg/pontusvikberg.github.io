import React, { MutableRefObject, useEffect, useRef } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { CoverImgBounding } from '../Project';

interface ICoverImageProps {
    src: string;
}
const CoverImage = (props: ICoverImageProps) => {


    /**
     * FIX ISSUE - IMAGE PARENT DOES NOT FILL OUT FULL WIDTH
     */


    const navigate = useNavigate();
    const imgContainerRef = React.createRef<HTMLDivElement>();
    const imgRef = React.createRef<HTMLImageElement>();
    const blurContainerRef = React.createRef<HTMLDivElement>();

    const onHover = () => {
        blurContainerRef.current?.classList.add("blur-3xl");
        imgRef.current?.classList.add("scale-[1.08]");
        imgContainerRef.current?.classList.add("scale-[0.98]");
    };

    const onLeave = () => {
        blurContainerRef.current?.classList.remove("blur-3xl");
        imgRef.current?.classList.remove("scale-[1.08]");
        imgContainerRef.current?.classList.remove("scale-[0.98]");
    }

    return (
        <div className='relative w-100 h-[50rem] flex justify-center my-[1rem] cursor-pointer' onClick={(e) => {
            console.log('screen height', window.innerHeight);
            console.log('screen width', window.innerWidth);
            const rect = e.currentTarget.getBoundingClientRect();
            const bounding: CoverImgBounding = {
                width: rect.right - rect.left,
                height: rect.bottom - rect.top,
                offsetTop: rect.top,
                offsetLeft: rect.left
            };

            navigate("project/example", { state: { bounding, imgSrc: props.src } })
        }}
        >
            <div ref={imgContainerRef} onMouseOver={onHover} onMouseLeave={onLeave} style={{ width: "100%" }} className='absolute transition-all duration-700 z-10 h-[50rem] w-100 overflow-hidden rounded-lg grid-item'>
                <img ref={imgRef} className='object-cover w-full transition-all duration-300 grid-item-media' src={props.src}></img>
            </div>
            <div ref={blurContainerRef} className='absolute transition-all duration-700 h-[50rem] w-100 overflow-hidden rounded-lg grid-item'>
                <img className='object-cover w-full grid-item-media' src={props.src}></img>
            </div>
        </div>
    )
}

export default CoverImage