import { CardFront, CardBack } from "@/components";
import { CharacterProps } from "./types";

const Character: React.FC<CharacterProps> = ({
  name,
  image,
  species,
  status,
  gender,
  origin,
  location
}) => {
  console.log(image);
  return (
    <div className="group relative w-full h-64 max-w-xs mx-auto perspective-500">
      <div className="relative w-full h-full duration-500 transform-style-3d group-hover:rotate-y-180">
        <CardFront image={image} name={name} />
        <CardBack name={name} species={species} status={status} gender={gender} origin={origin} location={location} />
      </div>
    </div>
  );
};

export default Character;
