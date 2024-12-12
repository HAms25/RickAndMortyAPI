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
    <>
      <section className="text-center p-10">
        <h1 className="text-6xl text-slate-700 font-bold">
          The Rick and Morty API
        </h1>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
        {data?.map((character) => (
          <div
            key={character.id}
            className="group relative w-full h-64 max-w-xs mx-auto perspective-500"
          >
            {/* Contenedor de la tarjeta */}
            <div className="relative w-full h-full duration-500 transform-style-3d group-hover:rotate-y-180">
              {/* Cara frontal */}
              <div className="absolute w-full h-full backface-hidden">
                <Card className="bg-white shadow-md border border-gray-200 rounded-lg w-full h-full flex justify-center items-center">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </Card>
              </div>
              {/* Cara trasera */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <Card className="bg-gray-100 shadow-md border border-gray-200 rounded-lg w-full h-full flex flex-col justify-center items-center p-4">
                  <h2 className="text-lg font-bold text-gray-700">
                    {character.name}
                  </h2>
                  <p className="text-gray-600">{character.species}</p>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Page;
