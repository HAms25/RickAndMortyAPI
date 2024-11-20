"use client";

import React from "react";
import { useFetchData } from "@/hooks/useFetchData";
import Character from "@/components/Character";

const Page = () => {
  const { data, loading, error } = useFetchData(
    "https://rickandmortyapi.com/api/character"
  );

  if (loading) return <p className="text-center text-xl">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.map((character) => (
        <Character
        key={character.id} 
        name={character.name} 
        image={character.image} 
        species={character.species} 
      />
      ))}
    </div>
  );
};

export default Page;
