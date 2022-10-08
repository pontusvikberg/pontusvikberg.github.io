import React from 'react'

interface ISummaryProps {
    color?: string;
    children: any;
}
const Summary = (props: ISummaryProps) => {
    return (
        <span className={`prose ${props.color ? props.color : 'text-gray-600'} break-all`}>{props.children}</span>
    )
}

export default Summary