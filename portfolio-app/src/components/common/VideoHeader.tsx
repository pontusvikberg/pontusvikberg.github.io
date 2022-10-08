
import React from 'react';
import styled from "styled-components";

const CustomVideo = styled.video`
        height: 100%;
        object-fit: cover;
        opacity: 1;
        width: 100%;
    `;
interface IVideoHeaderProps {
    src: string;
    type?: string
}

export const VideoHeader = (props: IVideoHeaderProps) => {

    return (
        <div className="absolute h-screen w-full z-0">
            <CustomVideo className='' loop autoPlay muted>
                <source src={props.src} type={props.type ? props.type : "video/mp4"}>
                </source>
            </CustomVideo>
        </div>
    )
}