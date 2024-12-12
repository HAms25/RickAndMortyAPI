import Image from "next/image";

interface CharacterProps {
  name: string;
  image: string;
  species: string;
}

const Character: React.FC<CharacterProps> = ({ name, image, species }) => {
    console.log(image);
  return (
    <div className="text-center flex flex-col items-center h-full">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        priority
        className="w-full h-48 object-cover rounded mb-3"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{species}</p>
    </div>
  );
};

export default Character;