import React from 'react'

interface ITitleProps {
    color?: string;
    children: any;
}
const Title = (props: ITitleProps) => {
    return (
        <span className={`prose prose-2xl font-bold ${props.color ? props.color : ''}`}>{props.children}</span>
    )
}

export default Title