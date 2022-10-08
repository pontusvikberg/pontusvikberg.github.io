import React, { useEffect, useState } from 'react'


interface ITypewriterProps {
    className: string;
    delay?: number;
    children: any;
}

const Typewriter = (props: ITypewriterProps) => {
    const [word, setWord] = useState<string>("");
    const ms = 70;

    useEffect(() => {
        let interval: NodeJS.Timer;
        const timeout = setTimeout(() => {
            interval = setInterval((a: any) => {
                const fullWord: string = props.children.toString();
                if (word.length === fullWord.length) return;
                setWord(prevWord => fullWord.substring(0, prevWord.length + 1))
            }, ms)
        }, props.delay);
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        }
    }, []);

    return (
        <span key={`${new Date().getMilliseconds()}`} className='prose prose-2xl text-white font-bold'>{word}</span>
    )
}

export default Typewriter