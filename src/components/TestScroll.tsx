import * as React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import DownArrow from './common/DownArrow';
import { projects } from '../data';
import CoverImage from './common/CoverImage';

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

const TestScroll: React.FC = () => {
    const scrollRef = React.useRef<LocomotiveScroll | null>(null);
    const showcaseRef = React.useRef<HTMLDivElement>(null);
    const scroll = React.useRef({
        cache: 0,
        current: 0
    });

    React.useEffect(() => {
        // Create a new instance of LocomotiveScroll with the elements to scroll
        scrollRef.current = new LocomotiveScroll({
            el: document.querySelector('#scroll-container') as any,
            smooth: true,
            getDirection: true,
            getSpeed: true,
            // lerp: 0.5,
        });

        scrollRef.current.on("scroll", (obj) => {

            scroll.current.current = obj.scroll.y;
            const distance = scroll.current.current - scroll.current.cache;
            scroll.current.cache = scroll.current.current;
            if (!showcaseRef.current) return;
            showcaseRef.current.style.transform = `skewY(${clamp(distance, -5, 5)}deg)`;
        });

        Promise.all([preloadImages(".grid-item-media")]).then(() => {
            scrollRef.current?.update();
        });


        return () => {
            // Destroy the scroll instance when the component is unmounted
            if (scrollRef.current) {
                scrollRef.current.destroy();
            }
        }
    }, []);

    return (
        <div id="scroll-container" className='bg-zinc-900 h-[8000px] flex justify-center' data-scroll-container>

            <div className='container px-12 md:px-0' data-scroll-section>

                <div className='py-52'>
                    <span className='prose prose-2xl font-bold uppercase'>Projects</span>
                    <div className='flex justify-center mt-10'>
                        <DownArrow></DownArrow>
                    </div>
                </div>
                {/* <div className="header" data-scroll data-scroll-position="top">
                    <h1>My Header</h1>
                </div>
                <div className="description" data-scroll data-scroll-speed="9">
                    <p>My Description</p>
                </div> */}
                <div ref={showcaseRef} className='lg:space-y-[70rem] middle-column' >
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
        </div>
    );
}

export default TestScroll;