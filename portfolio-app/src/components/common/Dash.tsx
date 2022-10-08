import React from 'react'
import styled from 'styled-components';

interface IDashProps {
    position: "top" | "bottom";
    label?: string;
}
const Dash = (props: IDashProps) => {
    return (
        <div className={`absolute w-full ${props.position === 'bottom' ? 'bottom-0' : 'top-0'}`}>
            <div className='grid grid-cols-2 relative'>
                <div></div>
                <Arrow style={{ borderColor: props.position === "bottom" ? "white" : "black" }} className='text-start flex items-center '>
                    {props.label && <span className={`prose prose-xs ml-5 animate-bounce ${props.position == "bottom" && 'text-white'}`}>{props.label}</span>}
                </Arrow>
            </div>
        </div>
    )
}

const Arrow = styled.div`
        border-left: 1px solid white;
        height: 70px;
    `;

export default Dash