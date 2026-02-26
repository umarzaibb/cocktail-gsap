'use client';
import Navbar from "../components/navbar";
import {cocktailLists, mockTailLists} from '../variables/cocktail-variables';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  let videoRef=useRef(null);

  return (
    <>
     <Navbar></Navbar>
    <div className="bg-black">

      <video ref={videoRef} src={'output.mp4'} className="fixed bottom-0 left-64 "></video>
     
      <div className="h-[100vh] overflow-hidden">
        <img src={"hero-left-leaf.png"} className="relative top-20"></img>
        <img
          src={"hero-right-leaf.png"}
          className="absolute left-[84vw] bottom-[35vh] "
        ></img>
        <div className="ml-28 pb-12 pt-12 absolute z-1">
          <p className="text-white mb-4">Cool. Crisp. Classic.</p>
          <h2 className="text-yellow-100 font-black text-5xl font-[Playpen_Sans_Deva] overflow-hidden">
            Sip the Spirit <br />
            of Summer
          </h2>
        </div>

        <div className="absolute left-[75vw] bottom-[11vh]">
          <p className="text-white mb-4 text-lg">
            Every cocktail on our menu is a<br />
            blend of premium ingredients,
            <br />
            creative flair, and timeless recipes
            <br />— designed to delight your senses.
          </p>

          <a className="view-cocktails-anchor text-white hover:text-yellow-100">View cocktails</a>
        </div>

        <h1 className="hero-heading">MOJITO</h1>
      </div>
      <section id="cocktails">
        <div className="bg-black h-[100vh] pl-28 flex justify-between pr-28">
       <div>
         <h4 className="text-white font-bold text-lg mb-8 mt-40">Most popular cocktails:</h4>
        {cocktailLists.map(i=>(
          <div className="text-white flex" id={`${Math.random()}`}>
            <span className="w-32 mb-8">
            <p className="text-yellow-100 font-[Gveret_Levin] font-semibold">{i.name}</p>
            <p className="text-sm">{`${i.country} | ${i.detail}`}</p>
          </span>
          <span>
            <p className="ml-24 text-lg">{`-${i.price}`}</p>
          </span>
          </div>
        ))}
       </div>
        <div>
         <h4 className="text-white font-bold text-lg mb-8 mt-40">Most loved mocktails:</h4>
        {mockTailLists.map(i=>(
          <div className="text-white flex">
            <span className="w-32 mb-8">
            <p className="text-yellow-100 font-[Gveret_Levin] font-semibold">{i.name}</p>
            <p className="text-sm">{`${i.country} | ${i.detail}`}</p>
          </span>
          <span>
            <p className="ml-24 text-lg">{`-${i.price}`}</p>
          </span>
          </div>
        ))}
       </div>
       <div className="flex absolute top-[155vh] w-screen justify-between left-0">
        <img src={'cocktail-left-leaf.png'}></img>
        <img src={'cocktail-right-leaf.png'}></img>
       </div>
      </div>
      </section>
    </div>
    </>
  );
}
