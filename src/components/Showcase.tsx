import React, { useEffect, useRef } from 'react'
import { projects } from '../data'
import CoverImage from './common/CoverImage'
import DownArrow from './common/DownArrow'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import imagesLoaded from "imagesloaded";
const clamp = (value: number, min: number, max: number) => value < min ? min : value > max ? max : value;
const preloadImages = (selector: any) => {
    return new Promise((resolve) => {
        imagesLoaded(
            document.querySelectorAll(selector),
            { background: true },
            resolve
        );
    });
};

const Showcase = () => {
    const scrollRef = React.useRef<LocomotiveScroll | null>(null);
    const ref = useRef(null);
    const showcaseRef = useRef<HTMLDivElement>(null);
    const scroll = useRef({
        cache: 0,
        current: 0
    });



    useEffect(() => {

        scrollRef.current = new LocomotiveScroll({
            el: document.querySelector('#scrollArea') as any,
            smooth: true,
            getDirection: true,
            lerp: 0.1,
        });
        // const scrollElement = new LocomotiveScroll({
        //     el: ref.current as any,
        //     smooth: true,

        //     getDirection: true,
        //     getSpeed: true,
        //     scrollFromAnywhere: true
        //     // multiplier: 10
        // });
        // scrollElement.on("scroll", (obj) => {

        //     scroll.current.current = obj.scroll.y;
        //     const distance = scroll.current.current - scroll.current.cache;
        //     scroll.current.cache = scroll.current.current;
        //     console.log(clamp(distance, -10, 10))
        //     if (!showcaseRef.current) return;
        //     showcaseRef.current.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`;
        // });

        // Promise.all([preloadImages(".grid-item-media")]).then(() => {
        //     scrollElement.update();
        // });
    }, []);

    return (
        <>
            {/* <div style={{ background: "linear-gradient(3deg, black, black, transparent)" }} className='w-full h-full bg-zinc-900 absolute z-0 grayscale'>
                <video style={{ opacity: 0.005 }} className='w-full' muted={true} loop={true} playsInline={true} autoPlay={true} data-src="https://cdn.dribbble.com/users/32512/screenshots/17066462/media/a1b8991f197da384b56f9b17c7a47c51.mp4" data-video-small="https://cdn.dribbble.com/users/32512/screenshots/17066462/media/c82e623674257fc1a4b0589a41df18cb.mp4" data-video-medium="https://cdn.dribbble.com/users/32512/screenshots/17066462/media/ffc7f30e1bbc7eca8a4107d7e12fdbf8.mp4" data-video-large="https://cdn.dribbble.com/users/32512/screenshots/17066462/media/a1b8991f197da384b56f9b17c7a47c51.mp4" src="https://cdn.dribbble.com/users/32512/screenshots/17066462/media/a1b8991f197da384b56f9b17c7a47c51.mp4"></video>
            </div> */}
            <div ref={ref} id="scrollArea" className='flex justify-center bg-zinc-900' data-scroll-container>
                <div className='container px-12 md:px-0' data-scroll-section>
                    <div className='py-52' data-scroll data-scroll-speed="2">
                        <span className='prose prose-2xl font-bold uppercase'>Projects</span>
                        <div className='flex justify-center mt-10'>
                            <DownArrow></DownArrow>
                        </div>
                    </div>
                    <div ref={showcaseRef} className='lg:space-y-[70rem] middle-column' data-scroll-section >
                        {projects.map((project, index) => {
                            return (
                                <div className='text-left transition-all duration-700 lg:skew-y-1 hover:skew-y-0' key={index} data-scroll  >
                                    <span style={{ color: project.color }} className='prose prose-5xl font-black uppercase'>{project.title}</span>
                                    <CoverImage src={project.imgSrc}></CoverImage>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Showcase