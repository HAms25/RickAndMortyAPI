import { Rubik_Gemstones } from "next/font/google";
import Image from "next/image"

const pressStartFont = Rubik_Gemstones({
    weight: "400",
    subsets: ["latin"],
  });
const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-zinc-950 text-white">
                <div className="animate-spin w-32 h-32 mb-4">
                  <Image
                    src="https://res.cloudinary.com/dovqxavyy/image/upload/v1734065461/portal_bxsv63.png"
                    alt="Portal Loading"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <p className={`text-4xl ${pressStartFont.className}`}>Loading...</p>
              </div>
    )
}

export default Loading;