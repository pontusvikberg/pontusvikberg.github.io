import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom';
import { CSSProperties } from 'styled-components';

export interface CoverImgBounding {
    width: number;
    height: number;
    offsetTop: number;
    offsetLeft: number;
}

interface IProjectProps {
}

const Project = () => {
    const location = useLocation();

    return (
        <div className='relative bg-zinc-900 h-[2000px]' data-scroll-container>
            <div className='h-[40rem] overflow-hidden transition-all duration-300 animate-projectIn' data-scroll-section>
                <img className='object-cover w-full h-full transition-all duration-300' src={location.state.imgSrc} data-scroll></img>
            </div>
            <div className='animate-projectContent mt-[5rem] lg:mt-[10rem]' data-scroll-section>
                <div data-scroll>
                    <span className='prose prose-2xl font-bold uppercase'>Scanner</span>
                </div>
            </div>
        </div>
    )

    // const location = useLocation();
    // const bounding: CoverImgBounding = location.state.bounding;
    // useEffect(() => {
    //     console.log('loc', location.state)
    // }, []);

    // const wrapperStyle: CSSProperties = {
    //     position: "absolute",
    //     height: bounding.height,
    //     width: bounding.width,
    //     top: bounding.offsetTop,
    //     left: bounding.offsetLeft
    // }
    // return (
    //     <div className='relative bg-zinc-900 h-full'>
    //         <div style={wrapperStyle}>
    //             <div className='absolute transition-all duration-700 z-10 h-[25rem] w-100 overflow-hidden rounded-lg scale-[1.05]'>
    //                 <img className='object-cover w-full transition-all duration-300' src={location.state.imgSrc}></img>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Project