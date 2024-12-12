import { Card } from "@/components";

interface CardBackProps {
  name: string;
  species: string;
}

const CardBack: React.FC<CardBackProps> = ({ name, species }) => {
  return (
    <Card className="bg-gray-100 shadow-md border border-gray-200 rounded-lg w-full h-full flex flex-col justify-center items-center p-4">
      <h2 className="text-lg font-bold text-gray-700">{name}</h2>
      <p className="text-gray-600">{species}</p>
    </Card>
  );
};

export default CardBack;
