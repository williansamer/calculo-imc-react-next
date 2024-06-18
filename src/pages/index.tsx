import { Inter } from "next/font/google";
import ImcInicio from "./calcImc/ImcInicio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-start items-start w-full h-screen">
      <ImcInicio/>
    </div>
  );
}
