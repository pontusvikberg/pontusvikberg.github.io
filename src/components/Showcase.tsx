import * as React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import DownArrow from './common/DownArrow';
import { projects } from '../data';
import CoverImage from './common/CoverImage';
import * as THREE from 'three';
import useReadingProgress from './common/UseReadingProgress';

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

const Showcase: React.FC = () => {
    const scrollRef = React.useRef<LocomotiveScroll | null>(null);
    const showcaseRef = React.useRef<HTMLDivElement>(null);
    const videoContainerRef = React.useRef<HTMLDivElement>(null);
    const [completion, setCompletion] = React.useState(0);
    const scroll = React.useRef({
        cache: 0,
        current: 0
    });

    const updateScrollCompletion = (obj: LocomotiveScroll.OnScrollEvent) => {
        const currentProgress = obj.scroll.y;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        console.log('scrollh', scrollHeight)
        if (scrollHeight) {
            setCompletion(
                Number((currentProgress / scrollHeight).toFixed(2)) * 100
            );
        }
    }

    React.useEffect(() => {
        // Create a new instance of LocomotiveScroll with the elements to scroll
        scrollRef.current = new LocomotiveScroll({
            el: document.querySelector('#scroll-container') as any,
            smooth: true,
            getDirection: true,
            getSpeed: true,
            multiplier: 2
        });

        scrollRef.current.on("scroll", (obj) => {
            updateScrollCompletion(obj);
            console.log('height', document.body.clientHeight)
            const distanceToFade = document.body.clientHeight * 0.1;
            obj.scroll.y > distanceToFade ? videoContainerRef.current?.classList.add("opacity-0") : videoContainerRef.current?.classList.remove("opacity-0");
            scroll.current.current = obj.scroll.y;
            const distance = scroll.current.current - scroll.current.cache;
            scroll.current.cache = scroll.current.current;
            if (!showcaseRef.current) return;
            showcaseRef.current.style.transform = `skewY(${clamp(distance, -2, 2)}deg)`;
        });

        // Promise.all([preloadImages(".grid-item-media")]).then(() => {
        //     scrollRef.current?.update();
        // });


        return () => {
            // Destroy the scroll instance when the component is unmounted
            if (scrollRef.current) {
                scrollRef.current.destroy();
            }
        }
    }, []);

    return (
        <div id="scroll-container" style={{ backgroundColor: "#01050c" }} className='h-[8000px] flex justify-center' data-scroll-container>
            {/* <span
                style={{ transform: `translateX(${completion - 100}%)`, backgroundColor: "#d40749" }}
                className="absolute bg-yellow-400 h-1 w-full top-0 z-10"
            /> */}
            <a href="https://sherpas.se" target={"_blank"} className='absolute z-10 top-0 left-0 p-5'>
                <img width={100} src="../../images/Sherpas_H_neg.png"></img>
            </a>
            <div ref={videoContainerRef} className='bg-zinc-900 w-full h-full absolute z-0 grayscale transition-all duration-700'>
                <video style={{ opacity: 0.005 }} className='w-full' muted={true} loop={true} playsInline={true} autoPlay={true} data-src="../../images/hero-data-src.mp4" data-video-small="../../images/hero-small.mp4" data-video-medium="../../images/hero-medium.mp4" data-video-large="../../images/hero-large.mp4" src="../../images/hero-default.mp4"></video>
            </div>
            <div className='container px-12 md:px-0' data-scroll-section>
                <div className='h-screen grid place-content-center ' >
                    <div className='grid grid-rows-2 text-left'>
                        <span style={{ color: "#d40749" }} className='prose prose-ultraXL font-bold uppercase' data-scroll data-scroll-position="top">Pontus</span>
                        <span className='prose prose-2xl uppercase' data-scroll data-scroll-speed="2">Selected work</span>
                    </div>
                    {/* <div className='flex justify-center mt-10'>
                        <DownArrow></DownArrow>
                    </div> */}
                </div>

                <div ref={showcaseRef} className='lg:space-y-[50rem] middle-column' >
                    {projects.map((project, index) => {
                        return (
                            <div className='text-left' key={index} data-scroll-position="top">
                                <span style={{ color: project.color }} className='prose prose-5xl font-black uppercase' data-scroll data-scroll-position="bottom">{project.title}</span>
                                <div id="distort" data-scroll data-scroll-speed="1" >
                                    <CoverImage src={project.imgSrc} ></CoverImage>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div >
    );
}

export default Showcase;