import { Card } from "@/components";
import { CardBackProps } from "./types";

const CardBack: React.FC<CardBackProps> = ({ name, species, status, gender, origin, location }) => {
  const statusColor = status === "Alive" ? "bg-green-500" : "bg-red-500";
  return (
    <Card className="absolute backface-hidden rotate-y-180 text-white shadow-lg border bg-zinc-100 border-gray-700 rounded-lg w-full h-full flex-col p-4 grid">
      {/* Título */}
      <h2 className="text-xl text-center font-extrabold uppercase text-zinc-700 tracking-wider py-2 h-min">
        {name}
      </h2>
      {/* Línea separadora */}
      <div className="w-full h-1 bg-gradient-to-r from-green-700 via-cyan-700 to-zinc-600"></div>

      {/* Detalles */}
      <div className="flex justify-center items-center gap-2 h-min">
        <span className={`w-3 h-3 rounded-full ${statusColor}`}></span>
        <p className="text-base text-gray-600 font-semibold">
          {status} - {species}
        </p>
      </div>
      <p className="text-gray-600 text-sm">
        <span className="font-semibold text-gray-700">Gender:</span> {gender}
      </p>
      <p className="text-gray-600 text-sm">
        <span className="font-semibold text-gray-700">Last known location:</span> {origin.name}
      </p>
      <p className="text-gray-600 text-sm">
        <span className="font-semibold text-gray-700">First seen in:</span> {location.name}
      </p>
    </Card>
  );
};

export default CardBack;
