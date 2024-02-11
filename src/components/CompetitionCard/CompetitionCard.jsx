import React from "react";
import { FaAndroid } from "react-icons/fa"
import { MdEngineering } from "react-icons/md";
import { SiHiveBlockchain, SiCyberdefenders } from "react-icons/si";
import { FaBridge } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { VscGraphScatter } from "react-icons/vsc";
import { FaTools } from "react-icons/fa";
import { RiSketching } from "react-icons/ri";
import { Link } from "react-router-dom";

const CompetitionCard = () => {
    return (
        <div className="p-4 z-0">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Card
                    title="App Development"
                    subtitle="APPsolute Competition"
                    href="app-development"
                    Icon={FaAndroid}
                />
                <Card
                    title="Blockchain"
                    subtitle="Block by Block"
                    href="blockchain"
                    Icon={SiHiveBlockchain}
                />
                <Card
                    title="CAD War"
                    subtitle="Design Wars"
                    href="cad-war"
                    Icon={MdEngineering}
                />
                <Card
                    title="Artificial Intelligence"
                    subtitle="Elevate AI"
                    href="ai"
                    Icon={GiArtificialIntelligence}
                />
                <Card
                    title="Bridge Construction"
                    subtitle="Bridging Brilliance"
                    href="bridge-construction"
                    Icon={FaBridge}
                />
                <Card
                    title="Cyber Security"
                    subtitle="Cybersecurity Warriors"
                    href="cyber-security"
                    Icon={SiCyberdefenders}
                />
                <Card
                    title="Data Visualization"
                    subtitle="Visualize to Victories"
                    href="data-visualization"
                    Icon={VscGraphScatter}
                />
                <Card
                    title="Engineering Project"
                    subtitle="Innovate, Engineer, Excel"
                    href="engineering-project"
                    Icon={FaTools}
                />
                <Card
                    title="Free Hand Sketch"
                    subtitle="Sketch, Inspire"
                    href="free-hand-sketch"
                    Icon={RiSketching}
                />
                <Card
                    title="App Development"
                    subtitle="APPsolute Competition"
                    href="app-development"
                    Icon={FaAndroid}
                />
                <Card
                    title="Blockchain"
                    subtitle="Block by Block"
                    href="blockchain"
                    Icon={SiHiveBlockchain}
                />
                <Card
                    title="CAD War"
                    subtitle="Design Wars"
                    href="cad-war"
                    Icon={MdEngineering}
                />
                <Card
                    title="Artificial Intelligence"
                    subtitle="Elevate AI"
                    href="ai"
                    Icon={GiArtificialIntelligence}
                />
                <Card
                    title="Bridge Construction"
                    subtitle="Bridging Brilliance"
                    href="bridge-construction"
                    Icon={FaBridge}
                />
                <Card
                    title="Cyber Security"
                    subtitle="Cybersecurity Warriors"
                    href="cyber-security"
                    Icon={SiCyberdefenders}
                />
                <Card
                    title="Data Visualization"
                    subtitle="Visualize to Victories"
                    href="data-visualization"
                    Icon={VscGraphScatter}
                />
                <Card
                    title="Engineering Project"
                    subtitle="Innovate, Engineer, Excel"
                    href="engineering-project"
                    Icon={FaTools}
                />
                <Card
                    title="Free Hand Sketch"
                    subtitle="Sketch, Inspire"
                    href="free-hand-sketch"
                    Icon={RiSketching}
                />

            </div>
        </div>
    );
};

const Card = ({ title, subtitle, Icon, href }) => {
    return (
        <div className="bg-[url('/bg-img.JPG')] bg-center bg-no-repeat w-full p-4 rounded border-[1px] border-gray-800 relative overflow-hidden group bg-gray-800">
            <Link to={href}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#107fb7] to-[#8a15e7] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-700 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
                <Icon className="mb-2 text-2xl text-violet-100 group-hover:text-white transition-colors relative z-10 duration-300" />
                <h3 className="font-medium text-lg text-white group-hover:text-white relative z-10 duration-300">
                    {title}
                </h3>
                <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                    {subtitle}
                </p>
            </Link>
        </div>
    );
};

export default CompetitionCard;