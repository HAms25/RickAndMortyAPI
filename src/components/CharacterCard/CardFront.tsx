import { Card } from "@/components";
import Img from "next/image"
import { CardFrontProps } from "./types";

const CardFront: React.FC<CardFrontProps> = ({image, name}) => {
    return (
        <Card className="absolute backface-hiddenbg-white shadow-md border border-gray-200 rounded-lg w-full h-full flex justify-center items-center">
            <Img 
                src={image}
                alt={name}
                width={300}
                height={300}
                className="rounded-lg w-full h-full object-cover"
            />
        </Card>
    )
}

export default CardFront;