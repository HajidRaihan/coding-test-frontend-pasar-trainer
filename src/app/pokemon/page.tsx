import Card from "@/components/Card";
import { fetchApi } from "@/services/apiService";
import { Pokemon } from "@/types/pokemon";

const ListPokemon = async () => {
  const data = await fetchApi("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");

  return (
    <div className="px-28 py-10">
      <p className="text-4xl text-center font-semibold mb-5 text-red-700">Pokemon List</p>
      <div className="flex flex-wrap justify-around gap-4">
        {data &&
          data.results.map((pokemon: Pokemon) => {
            return <Card key={pokemon.name} name={pokemon.name} />;
          })}
      </div>
    </div>
  );
};

export default ListPokemon;
