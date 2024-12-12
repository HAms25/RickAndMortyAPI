"use client";

import React from "react";
import { useFetchData } from "@/hooks/useFetchData";
import Character from "@/components/CharacterCard/Character";

const Page = () => {
  const { data, loading, error } = useFetchData(
    "https://rickandmortyapi.com/api/character"
  );

  if (loading) return <p className="text-center text-xl">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <section className="text-center p-10">
        <h1 className="text-6xl text-slate-700 font-bold">
          The Rick and Morty API
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
