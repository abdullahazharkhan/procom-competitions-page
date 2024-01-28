import React from 'react'
import NeuButton from '../NeuButton'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FiMousePointer } from "react-icons/fi";


function CompetitionDetails({ competitionName, detailedPara, registrationFee = "3000", maxMembers = "3", winnerAmount = "10000", runnerUpAmount = "5000" }) {
    return (
        <div>
            <div className="grid place-content-center space-y-6 bg-slate-950 p-8">
                <p className="text-center text-4xl md:text-6xl font-black text-neutral-50">
                    {competitionName} <br /> <span className='underline underline-offset-8'> Competition </span>
                </p>
                <br />
                <p className="text-center text-neutral-400 font-bold">
                    {/* In the dynamic realm of app development, creativity and innovation intersect to shape the digital landscape. Our app development competition is not just a showcase of technical prowess but a celebration of ingenuity and problem-solving. Participants are challenged to push the boundaries of possibility, transforming ideas into sleek, functional applications that address real-world needs. */}
                    {detailedPara}
                </p>
                <NeuButton text={"Register Now"} />
            </div>
            <br />
            <div className="border-b border-slate-600"></div>
            <div className='prizes mt-10'>
                <p className="text-center text-2xl md:text-4xl font-black text-neutral-50 underline underline-offset-8">
                    Details
                </p>
                <div className='flex flex-row justify-center gap-4 mt-10'>
                    <Card title={"Registration Fee"} amount={registrationFee} />
                    <Card title={"Max Members Allowed"} amount={maxMembers} />
                    <Card title={"People Registered"} amount={"100+"} />
                </div>
            </div>
            <br />
            <div className="border-b border-slate-600 mt-10"></div>
            <div className='prizes mt-10'>
                <p className="text-center text-2xl md:text-4xl font-black text-neutral-50 underline underline-offset-8">
                    Prizes
                </p>
                <div className='mt-10'>
                    <PrizeCard winAmount={winnerAmount} runnerUpAmount={runnerUpAmount} />
                </div>
            </div>
            <br />
            <div className="border-b border-slate-600 mt-10"></div>

        </div>
    )
}

const Card = ({ title, amount }) => {
    return (
        <div class="flex flex-col w-1/6 bg-white border border-t-4 border-[#107fb7] shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-[#107fb7] dark:shadow-slate-700/[.7]">
            <div class="p-4 md:p-5">
                <h3 class="text-4xl font-mono font-bold text-gray-800 dark:text-white">
                    {amount}
                </h3>
                <p class="mt-2 text-gray-500 dark:text-gray-400">
                    {title}
                </p>
            </div>
        </div>
    );
}

const PrizeCard = ({ winAmount, runnerUpAmount }) => {
    return (
        <div className=" text-slate-900 flex flex-row gap-10 justify-center">
            <div className="flex flex-col w-1/6 bg-white border border-t-4 border-[#ffe02f] shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-[#ffe02f] dark:shadow-slate-700/[.7]">
                <div className="p-4 md:p-5 flex flex-col ">
                    <img src="https://i.gifer.com/6x6G.gif" alt="" className='rounded-xl mx-auto' />
                    <h3 class="text-4xl text-center font-mono font-bold text-gray-800 dark:text-white">
                        Rs. {winAmount}
                    </h3>
                    <p class="text-center font-bold tex-2xl text-gray-500 dark:text-gray-400">
                        Winner
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-1/6 bg-white border border-t-4 border-slate-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:border-slate-500 dark:shadow-slate-700/[.7]">
                <div className="p-4 md:p-5 flex flex-col grayscale">
                    <img src="https://i.gifer.com/6x6G.gif" alt="" className='rounded-xl mx-auto' />
                    <h3 class="text-4xl text-center font-mono font-bold text-gray-800 dark:text-white">
                        Rs. {runnerUpAmount}
                    </h3>
                    <p class="text-center font-bold tex-2xl text-gray-500 dark:text-gray-400">
                        Runner Up
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CompetitionDetails