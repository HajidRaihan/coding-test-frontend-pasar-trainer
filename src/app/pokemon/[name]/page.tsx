"use client";

import { fetchApi } from "@/services/apiService";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { PokemonDetail, PokemonType } from "@/types/pokemon";
import DetailBadge from "@/components/DetailBadge";
import RadarChart from "@/components/RadarChart";
import Loader from "@/components/Loader";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Detail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetail>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchApi("https://pokeapi.co/api/v2/pokemon/" + name);
      setPokemon(response);
      console.log(response);
    };

    getData();
  }, [name]);

  return (
    <div className="md:mx-32 mt-10 p-4 md:max-h-screen">
      <div className="relative md:h-[450px] h-full mb-10 md:mb-0 md:flex block justify-between bg-white border p-10 rounded-lg shadow-xl">
        {pokemon ? (
          <>
            <div className="w-full md:w-1/3 flex flex-col items-center border-2 border-black shadow-solid h-96 shadow-primary rounded-xl py-5 px-">
              <h1 className="text-lg font-bold uppercase">{name}</h1>
              <div className="h-full w-full flex items-center justify-center overflow-hidden p-5">
                <Image
                  src={`https://img.pokemondb.net/artwork/${name}.jpg`}
                  alt="asda"
                  className="rounded-sm max-h-full max-w-full object-contain object-center"
                  width={200}
                  height={200}
                />
              </div>

              <div className="flex gap-2">
                <DetailBadge
                  type="type"
                  value={pokemon.types.map((t: PokemonType) => t.type.name).join(", ") || ""}
                  className="bg-red-700 text-white"
                />
                <DetailBadge
                  type="height"
                  value={pokemon.height + " m"}
                  className="bg-green-800 text-white"
                />
                <DetailBadge
                  type="weight"
                  value={pokemon.weight + " kg"}
                  className="bg-blue-800 text-white"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 max-h-96 mt-10 md:mt-0">
              <RadarChart stats={pokemon.stats} name={name as string} />
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Detail;
