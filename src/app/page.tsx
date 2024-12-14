"use client";

import React from "react";
import { useFetchData } from "@/hooks/useFetchData";
import Character from "@/components/CharacterCard/Character";
import { Rubik_Gemstones } from "next/font/google";
import { Loading, Error } from "@/components";

const pressStartFont = Rubik_Gemstones({
  weight: "400",
  subsets: ["latin"],
});

const Page = () => {
  const { data, loading, error } = useFetchData(
    "https://rickandmortyapi.com/api/character"
  );
  const titleText = "Rick and Morty API";

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <>
      <section className="text-center py-20 bg-zinc-950">
        <h1 className={`${pressStartFont.className} relative text-8xl`}>
          <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-lime-800 to-emerald-900 -z-10">
            {titleText}
          </span>
          <span className="text-cyan-500 drop-shadow-[0_0_5px_#00FF00] hover:drop-shadow-[0_0_8px_#00FF00] transition-all duration-300 ease-in-out">
            {titleText}
          </span>
        </h1>
      </section>
      <div className="h-4 bg-gradient-to-b from-zinc-950 to-zinc-800"></div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10 bg-zinc-800">
        {data?.map((character) => (
          <Character
            key={character.id}
            image={character.image}
            name={character.name}
            species={character.species}
            status={character.status}
            gender={character.gender}
            origin={character.origin}
            location={character.location}
          />
        ))}
      </section>
    </>
  );
};

export default Page;
