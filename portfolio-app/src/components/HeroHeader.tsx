import React from 'react'
import styled from 'styled-components';
import Dash from './common/Dash';
import Title from './common/Title';
import { VideoHeader } from './common/VideoHeader';




const HeroHeader = () => {

    const yearSinceDevStart = () => {
        const started = 2016;
        return new Date().getUTCFullYear() - started;
    };
    return (
        <>
            <div className="h-screen grid place-content-center bg-black overflow-hidden saturate-150">
                {/* <VideoHeader src={"https://videos-cdn.readymag.com/57470024c12f9f797e5dfb4f/575f09bbf257065e3d8fba7d/cd733610-44d7-49b9-901e-8c89ad3ccbeb.mp4"}></VideoHeader> */}
                <VideoHeader src={"/herovideo.mp4"}></VideoHeader>
                <div className='grid z-10 sm:px-5 lg:px-0 animate-blur'>
                    <Title color='text-white'>IT CONSULTANT</Title>
                    <Title color='text-white'>LIVING IN SKELLEFTEÅ</Title>
                    <Title color='text-white'>{yearSinceDevStart()} YEARS EXPERIENCE</Title>
                    <Title color='text-white'>ACTIVE AT SHERPAS</Title>
                </div>
                <Dash position='bottom' label='Scroll to begin'></Dash>
            </div>
        </>

    )
}

export default HeroHeader