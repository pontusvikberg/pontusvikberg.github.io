import React, { createRef, LegacyRef, useEffect, useRef, useState } from 'react'
import { AnyStyledComponent } from 'styled-components';
import { getScrollPercentage } from '../../helpers/useScrollPercentage';
import Dash from '../common/Dash';
import { VideoHeader } from '../common/VideoHeader';
interface ISelectedWorkHeaderProps {
    title: string;
    scrollPercentage: number;
    top: number;
    bottom: number;
}
const SelectedWorkHeader = (props: ISelectedWorkHeaderProps) => {
    const styleRef = useRef(null);
    const [reload, setReload] = useState<boolean>();
    const isScrollInside = () => {
        return props.scrollPercentage >= props.top && props.scrollPercentage <= props.bottom;
    }

    const isScrollAbove = () => {
        return props.scrollPercentage < props.top;
    };

    const isScrollBelow = () => {
        return props.scrollPercentage > props.bottom;
    };

    const scrollPercentage = () => {
        if (isScrollAbove()) return 0.00;
        if (isScrollBelow()) return 100;
        const rangePoints = props.bottom - props.top;
        const completedPoints = props.scrollPercentage - props.top;
        const result = Math.ceil((completedPoints / rangePoints) * 100);
        return result;
    };

    const setOpacity = () => {
        // opacity: 1 does not work for some reason... set 0.9999 instead
        const calcedPercentage = scrollPercentage() === 0 ? '0.9999' : (100 - scrollPercentage()) / 100;
        const el = styleRef.current as any;
        el.style.opacity = calcedPercentage;
        setReload(!reload);
    };

    useEffect(() => {
        setReload(!reload);
        setOpacity();
        if (isScrollInside()) {

        }
    }, [props.scrollPercentage]);

    return (
        <div className='h-[150vh] w-full relative' >
            <div className="sticky top-0 h-screen grid place-content-center bg-black overflow-hidden">
                {/* <div className='absolute h-screen w-full z-0 bg-indigo-500'></div> */}
                <VideoHeader src={"/mountains.mp4"}></VideoHeader>
                <div ref={styleRef} className={'w-screen xl:w-[90vw] h-screen bg-black z-9'} />
                <div className={'flex justify-self-center justify-center absolute w-screen xl:w-[90vw] h-screen z-10'}>
                    <div className="grid place-content-center h-full">
                        <span className='prose prose-2xl text-white font-bold'>{props.title.toUpperCase()}</span>
                        {/* {!Number.isNaN(scrollPercentage()) && <span className='text-white'>{scrollPercentage().toString()}</span>} */}
                    </div>
                </div>
            </div>
            <Dash position='bottom'></Dash>
        </div>

    )
}

export default SelectedWorkHeader