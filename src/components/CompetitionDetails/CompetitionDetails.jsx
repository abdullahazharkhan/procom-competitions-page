import React from 'react'
import NeuButton from '../NeuButton'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FiMousePointer } from "react-icons/fi";


function CompetitionDetails({ competitionName, detailedPara, registrationFee = "1000", maxMembers, winnerAmount, runnerUpAmount }) {
    return (
        <div>
            <div className="grid place-content-center space-y-6 bg-slate-950 p-8">
                <p className="text-center text-4xl md:text-6xl font-black text-neutral-50">
                    App Development <br /> <span className='underline underline-offset-8'> Competition </span>
                </p>
                <p className="text-center text-neutral-400 font-bold">
                    In the dynamic realm of app development, creativity and innovation intersect to shape the digital landscape. Our app development competition is not just a showcase of technical prowess but a celebration of ingenuity and problem-solving. Participants are challenged to push the boundaries of possibility, transforming ideas into sleek, functional applications that address real-world needs.
                </p>
                <NeuButton text={"Register Now"} />
            </div>
            <br />
            <div className="border-b border-slate-600"></div>
            <div className='prizes mt-10'>
                <p className="text-center text-2xl md:text-4xl font-black text-neutral-50 underline underline-offset-8">
                    Prizes
                </p>

            </div>
            {/* <div className='flex flex-row gap-6 mt-10'>
                <Card
                    title="Registration Fee"
                    Icon={RiMoneyDollarCircleFill}
                    data={registrationFee}
                />
                <Card
                    title="Free Hand Sketch"
                    Icon={RiMoneyDollarCircleFill}
                />
            </div> */}
        </div>
    )
}

// const Card = ({ title, Icon, data }) => {
//     return (
//         <div className="">
//             <div className='flex flex-row gap-2'>
//                 <Icon className="text-5xl text-white" />
//                 {data}
//             </div>
//         </div>
//     );
// };


export default CompetitionDetails