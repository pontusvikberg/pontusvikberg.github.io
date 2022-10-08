import React from 'react'
import { CoverImage } from './CoverImage'
import Text from "./Text";
import Title from './Title';
interface IPromoProps {
    title: string;
    description: string;
    src: string;
    bg: string;
    imageRight?: boolean;
    className?: string
}
const Promo = (props: IPromoProps) => {
    return (
        <div className={`relative ${props.className}`}>
            <div className={`flex mx-20 2xl:mx-0 ${props.imageRight ? '2xl:mr-20' : '2xl:ml-20'} ${props.bg} z-10 min-h-[348px]`}>
                <div className={`w-full flex ${props.imageRight ? 'flex-row-reverse' : ''}`}>
                    <div className='relative w-full'>
                        <CoverImage src={props.src}></CoverImage>
                        <div className='blur-2xl absolute -z-10 w-full h-full top-0'>
                            <CoverImage src={props.src}></CoverImage>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className='grid gap-4 grid-cols-1 p-10'>
                            <Title color="text-white uppercase">{props.title}</Title>
                            <Text color='text-white'>{props.description}</Text>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Promo