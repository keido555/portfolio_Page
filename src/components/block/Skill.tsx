import { ReactElement } from "react";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";

type Props = {
  key: string;
  icon: ReactElement;
  label: string;
};

export const Skill = () => {
  return (
    <div className="mt-24">
      <div className="mt-10 text-center">
        <p>Skill</p>
        <h2 className="text-4xl">技術</h2>
        <div className="mx-auto h-1 w-24 bg-cyan-400"></div>
      </div>

      {/* 一列目 */}
      <div className="my-16 mx-auto flex max-w-4xl justify-around">
        {/* JavaScript */}
        <div className="h-60 w-40 bg-zinc-200 shadow-2xl">
          <SiJavascript
            className="relative top-4 mx-auto rounded-full bg-white text-yellow-300"
            size="6rem"
          />
          <p className="mt-6 text-center text-2xl">JavaScript</p>
          <div className="mt-4 text-center">
            <p>Level</p>
            <div className="flex justify-center text-xl">
              <AiFillStar className="text-xl text-yellow-400" />
              <AiFillStar className="text-xl text-yellow-400" />
              <AiFillStar className="text-xl text-yellow-400" />
            </div>
          </div>
        </div>
        {/* TypeScript */}
        <div className="h-60 w-40 bg-zinc-200 shadow-2xl">
          <SiTypescript
            className="relative top-4 mx-auto rounded-full bg-white text-sky-600"
            size="6rem"
          />
          <p className="mt-6 text-center text-2xl">TypeScript</p>
          <div className="mt-4 text-center">
            <p>Level</p>
            <div className="flex justify-center text-xl">
              <AiFillStar className="text-xl text-yellow-400" />
              <AiFillStar className="text-xl text-yellow-400" />
              <AiFillStar className="text-xl text-yellow-400" />
            </div>
          </div>
        </div>
        {/* Java */}
        <div className="h-60 w-40 bg-zinc-200 shadow-2xl">
          <SiJava
            className="relative top-4 mx-auto rounded-full bg-white bg-red-500 text-white"
            size="6rem"
          />
          <p className="mt-6 text-center text-2xl">Java</p>
          <div className="mt-4 text-center">
            <p>Level</p>
            <div className="flex justify-center text-xl">
              <AiFillStar className="text-xl text-yellow-400" />
              <AiFillStar className="text-xl text-yellow-400" />
            </div>
          </div>
        </div>
        {/* Python */}
        <div className="h-60 w-40 bg-zinc-200 shadow-2xl">
          <SiPython
            className="bg-sian-50 relative top-4 mx-auto rounded-full bg-white"
            size="6rem"
          />
          <p className="mt-6 text-center text-2xl">Python</p>
          <div className="mt-4 text-center">
            <p>Level</p>
            <div className="flex justify-center text-xl">
              <AiFillStar className="text-xl text-yellow-400" />
              <AiFillStar className="text-xl text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
