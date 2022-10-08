import React, { useEffect } from 'react'
import Dash from '../common/Dash';
import Text from '../common/Text';
import Title from '../common/Title'
interface ISelectedWorkDescriptionProps {
    title: string;
    description: string;
}
const SelectedWorkDescription = (props: ISelectedWorkDescriptionProps) => {
    const callback = (entries: any[]) => {
        entries.forEach((entry) => {
            // console.log(entry);

            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadeIn");
            } else {
                entry.target.classList.remove("animate-fadeIn");
            }
        });
    };
    const observer = new IntersectionObserver(callback);

    useEffect(() => {
        // const targets = document.querySelectorAll("#description-container");

        // targets.forEach((target) => {
        //     // target.classList.add("opacity-0");
        //     observer.observe(target);
        // });
    }, []);
    return (
        <div className='py-40 w-full flex justify-center relative'>
            <Dash position='top'></Dash>
            <div id="description-container">
                <div className='grid gap-4 grid-cols-1 w-[50vw]'>
                    <Title>{props.title}</Title>
                    <Text>{props.description}</Text>
                </div>
            </div>
        </div>
    )
}

export default SelectedWorkDescription