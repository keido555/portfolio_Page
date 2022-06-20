import Image from "next/image";
import imageHome from "src/Image/5124911_s.jpg";

export const Top = () => {
  return (
    <div className="mt-8 flex">
      <div className="flex-none"></div>
      <div className="... ml-12 mt-8 w-64 flex-auto">
        <h1 className="text-8xl">Warashibe</h1>
        <h2 className="mt-8 text-4xl">ポートフォリオページです</h2>
        <div className="mt-10 ml-14">
          <button className="h-14 w-64 rounded-3xl bg-cyan-400 text-2xl text-zinc-50 shadow-xl transition ease-in-out hover:bg-cyan-200 hover:text-zinc-700">
            ブログへ
          </button>
        </div>
      </div>
      <div className="... mr-8 w-48 flex-auto">
        <Image src={imageHome} layout="responsive" alt="HomeImg" />
      </div>
    </div>
  );
};
