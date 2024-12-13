"use client";

import React from "react";
import { useFetchData } from "@/hooks/useFetchData";
import Character from "@/components/CharacterCard/Character";
import { Rubik_Gemstones } from "next/font/google";
import Image from "next/image"

const pressStartFont = Rubik_Gemstones({
  weight: "400",
  subsets: ["latin"],
});

const Page = () => {
  const { data, loading, error } = useFetchData(
    "https://rickandmortyapi.com/api/character"
  );
  const titleText = "Rick and Morty API";

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-950 text-white">
        <div className="animate-spin w-32 h-32 mb-4">
          <Image
            src="https://res.cloudinary.com/dovqxavyy/image/upload/v1734065461/portal_bxsv63.png"
            alt="Portal Loading"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
        <p className={`text-4xl ${pressStartFont.className}`}>Loading...</p>
      </div>
    );

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <section className="text-center py-20 bg-slate-950">
        <h1 className={`${pressStartFont.className} relative text-8xl`}>
          <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 -z-10">
            {titleText}
          </span>
          <span className="text-cyan-400 drop-shadow-[0_0_10px_#00FF00] hover:drop-shadow-[0_0_20px_#00FF00] transition-all duration-300 ease-in-out">
            {titleText}
          </span>
        </h1>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
        {data?.map((character) => (
          <Character
            key={character.id}
            image={character.image}
            name={character.name}
            species={character.species}
          />
        ))}
      </section>
    </>
  );
};

export default Page;
