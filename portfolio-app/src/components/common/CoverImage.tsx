
import React from 'react';
import styled from "styled-components";

interface ICoverImageProps {
    src: string;
}
export const CoverImage = (props: ICoverImageProps) => {
    const Asd = styled.div`
        background-image: url(${props.src});
        background-size: cover;
        background-position: top;
        height: 100%;
        width: 100%;
    `;
    return <Asd></Asd>;
}