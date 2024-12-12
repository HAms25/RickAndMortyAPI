import { CardFront, CardBack } from "@/components";

interface CharacterProps {
  name: string;
  image: string;
  species: string;
}

const Character: React.FC<CharacterProps> = ({ name, image, species }) => {
  console.log(image);
  return (
    <div className="group relative w-full h-64 max-w-xs mx-auto perspective-500">
      <div className="relative w-full h-full duration-500 transform-style-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden">
          <CardFront image={image} name={name} />
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <CardBack name={name} species={species} />
        </div>
      </div>
    </div>
  );
};

export default Character;
