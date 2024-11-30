"use client";

import React from "react";
import { useFetchData } from "@/hooks/useFetchData";
import Character from "@/components/Character";
import { Card } from "@/components/ui/Card";

const Page = () => {
  const { data, loading, error } = useFetchData(
    "https://rickandmortyapi.com/api/character"
  );

  if (loading) return <p className="text-center text-xl">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <Card className="">
      {data?.map((character) => (
        <Character
        key={character.id} 
        name={character.name} 
        image={character.image} 
        species={character.species} 
      />
      ))}
    </Card>
  );
};

export default Page;
