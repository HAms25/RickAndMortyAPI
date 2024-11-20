import Image from "next/image"

interface CharacterProps {
    name: string;
    image: string;
    species: string;
}

const Character: React.FC<CharacterProps> = ({ name, image, species }) => {
    return (
        <div className="bg-white rounded shadow-md p-4 text-center">
            <Image
            src= {image}
            alt= {name}
            width= {300}
            height= {300}
            className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-600">{species}</p>
        </div>
    )
}

export default Character;