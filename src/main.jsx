import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import CompetitionDetails from './components/CompetitionDetails/CompetitionDetails.jsx'
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='app-development' element={
        <CompetitionDetails
          competitionName={"App Development"}
          registrationFee='2500'
          maxMembers='3'
          winnerAmount='50000'
          runnerUpAmount='25000'
          detailedPara={"In the dynamic realm of app development, creativity and innovation intersect to shape the digital landscape. Our app development competition is not just a showcase of technical prowess but a celebration of ingenuity and problem-solving. Participants are challenged to push the boundaries of possibility, transforming ideas into sleek, functional applications that address real-world needs."}
        />}
      />
      <Route path='blockchain' element={
        <CompetitionDetails
          competitionName={"Blockchain"}
          registrationFee='1500'
          maxMembers='2'
          winnerAmount='50000'
          runnerUpAmount='15000'
          detailedPara={"In the rapidly evolving landscape of blockchain technology, our competition stands as a beacon of innovation and collaboration. Here, visionaries, developers, and enthusiasts converge to explore the limitless possibilities of decentralized solutions. "}
        />}
      />
      <Route path='cad-war' element={
        <CompetitionDetails
          competitionName={"CAD War"}
          registrationFee='4500'
          maxMembers='2'
          winnerAmount='100000'
          runnerUpAmount='50000'
          detailedPara={"Welcome to CAD War, where the battleground is digital and the weapons are lines of code. In this adrenaline-fueled competition, CAD warriors clash in a test of skill, precision, and creativity.  "}
        />}
      />
      <Route path='ai' element={
        <CompetitionDetails
          competitionName={"Artificial Intelligence"}
          registrationFee='4500'
          maxMembers='2'
          winnerAmount='100000'
          runnerUpAmount='50000'
          detailedPara={"In the realm of artificial intelligence, where algorithms mimic human cognition, our competition serves as a crucible for innovation and advancement. Here, leading AI enthusiasts and experts converge to push the boundaries of what's possible, crafting algorithms that decipher patterns, solve complex problems, and revolutionize industries."}
        />}
      />
      <Route path='bridge-construction' element={
        <CompetitionDetails
          competitionName={"Bridge Construction"}
          registrationFee='4500'
          maxMembers='2'
          winnerAmount='100000'
          runnerUpAmount='50000'
          detailedPara={"In the world of bridge construction, where engineering meets innovation, our competition stands as a testament to human ingenuity and architectural prowess. Participants from across the globe gather to design and construct bridges that defy convention and push the boundaries of structural integrity. "}
        />}
      />
      <Route path='cyber-security' element={
        <CompetitionDetails
          competitionName={"Cyber Security"}
          registrationFee='4500'
          maxMembers='4'
          winnerAmount='100000'
          runnerUpAmount='50000'
          detailedPara={"In the ever-evolving landscape of cyber security, where threats loom large and digital assets hang in the balance, our competition serves as a crucible for defenders and innovators alike. Here, cybersecurity experts from around the world converge to test their mettle against the relentless tide of cyber threats. Participants are tasked with fortifying networks, thwarting attacks, and safeguarding sensitive information from malicious actors."}
        />}
      />
      <Route path='data-visualization' element={
        <CompetitionDetails
          competitionName={"Data Visualization"}
          registrationFee='4500'
          maxMembers='4'
          winnerAmount='100000'
          runnerUpAmount='50000'
          detailedPara={"In the dynamic world of data visualization, where insights come to life and stories are told through pixels and charts, our competition serves as a canvas for creativity and innovation. Participants from diverse backgrounds converge to transform raw data into compelling visuals that illuminate patterns, trends, and narratives hidden within the numbers. "}
        />}
      />
      <Route path='engineering-project' element={
        <CompetitionDetails
          competitionName={"Engineering Project"}
          registrationFee='4500'
          maxMembers='3'
          winnerAmount='100000'
          runnerUpAmount='50000'
          detailedPara={"In the realm of engineering, where innovation meets practicality, our project competition stands as a testament to ingenuity and problem-solving. Participants from across disciplines come together to showcase their skills, creativity, and teamwork by tackling real-world challenges head-on."}
        />}
      />
      <Route path='free-hand-sketch' element={
        <CompetitionDetails
          competitionName={"Free Hand Sketch"}
          registrationFee='4500'
          maxMembers='4'
          winnerAmount='100000'
          runnerUpAmount='50000'
          detailedPara={"In the captivating realm of freehand sketching, where imagination flows freely and lines dance upon the page, our competition invites artists to unleash their creativity and skill. Participants wield pencils, pens, and brushes as they breathe life into their visions, translating ideas into captivating illustrations that captivate the eye and stir the soul. "}
        />}
      />
    </Route>
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
