import { CardProps } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";

const Card: React.FC<CardProps> = ({ name }) => {
  return (
    <Link
      href={`/pokemon/${name}`}
      className="group relative w-44 h-60 flex flex-col items-center justify-center border-2 border-primary rounded-md hover:scale-105 hover:shadow-solid hover:shadow-red-700 transition-all duration-300"
    >
      <div className="relative h-4/5 p-5">
        <Image
          src={`https://img.pokemondb.net/artwork/${name}.jpg`}
          alt="asda"
          className="w-fit h-4/5 rounded-sm  object-cover object-center group-hover:scale-110 transition-all duration-300 "
          width={100}
          height={100}
        />
      </div>
      <div className="flex items-center justify-center bg-primary w-full h-10 absolute bottom-0">
        <p className="text-secondary">{name}</p>
      </div>
    </Link>
  );
};

export default Card;
