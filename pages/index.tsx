import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Rubik } from "@next/font/google";

const rubik = Rubik();

export default function Home() {
  const layerOne = useRef<HTMLDivElement>({} as any),
    layerTwo = useRef<HTMLDivElement>({} as any);

  const [mouseX, setMouseX] = useState({ x: 0 });

  const getMouseX = (event: MouseEvent) => {
    return (event.clientX / window.innerWidth) * 100;
  };

  const mouseMovement = (event: MouseEvent): void => {
    setMouseX({ x: getMouseX(event) });
  };

  useEffect(() => {
    layerOne.current.style.width = `${
      Math.round(mouseX.x) - 1 == 99 ? 100 : mouseX.x
    }%`;
  }, [mouseX]);

  return (
    <div className={`${rubik.className}`}>
      <Head>
        <title>NEXT 13 Header</title>
        <meta name="description" content="Example header with NEXT.JS v13" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Right layer */}
      <div
        id="hero"
        className="w-screen h-screen relative"
        // @ts-ignore
        onMouseMove={mouseMovement}
      >
        <div
          className="absolute z-[2] overflow-hidden h-screen w-screen grid place-items-center bg-gradient-to-r from-neutral-800 to-neutral-900"
          ref={layerOne}
        >
          <h2 className="w-screen text-center text-7xl text-white font-black">
            Next.js 13 is so god damn
            <span className="text-white font-black italic"> good!</span>
          </h2>
        </div>
        {/* Left layer */}
        <div
          className="absolute overflow-hidden h-screen w-screen grid place-items-center bg-gradient-to-r from-red-400 to-red-700"
          ref={layerTwo}
        >
          <h2 className="w-screen text-center text-7xl text-white font-black">
            Next.js 13 is so god damn
            <span className="text-white font-black italic"> awesome!</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
