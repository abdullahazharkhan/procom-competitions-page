import React from "react";
import CompetitionCard from "../CompetitionCard/CompetitionCard";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <div className="grid place-content-center space-y-6 bg-slate-950 p-8">
        <p className="text-center text-4xl md:text-6xl font-black text-neutral-50">
          Competitions
        </p>
        <p className="text-center text-neutral-400 font-bold">
          Fuel Your Passion, Ignite Competition 🎯
        </p>
      </div>
      <br />
      <div className="border-b border-slate-600"></div>
      <div className="w-full px-5">
        <CompetitionCard />
      </div>
    </div>
  );
};

export default Home;