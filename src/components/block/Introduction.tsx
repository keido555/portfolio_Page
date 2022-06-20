import Image from "next/image";
import imageKen from "src/Image/Kenji.png";
import imageReason from "src/Image/5137043_s.jpg";

export const Introduction = () => {
  return (
    <div>
      <div className="mt-10 text-center">
        <p>Introduction</p>
        <h2 className="text-4xl">自己紹介</h2>
        <div className="mx-auto h-1 w-24 bg-cyan-400"></div>
      </div>
      <div className="mt-8 flex">
        <div className="... mr-8 w-2 flex-auto shadow-xl">
          <Image
            src={imageKen}
            layout="responsive"
            // width={"360px"}
            // height={"360px"}
            alt="KenImg"
          />
        </div>
        <div className="... mx-4 mr-8 w-64 flex-auto">
          <div className="my-4">
            <div className="h-10 w-24 rounded-2xl border-solid bg-slate-100 shadow-lg">
              <p className="my-auto pt-2 text-center text-xl">Name</p>
            </div>
            <h3 className="mt-4 ml-6 text-2xl">Wakimoto Kenji (29)</h3>
          </div>
          <div className="my-4">
            <div className="h-10 w-24 rounded-2xl border-solid bg-slate-100 shadow-lg">
              <p className="my-auto pt-2 text-center text-xl">Career</p>
            </div>
            <ul className="mt-4 ml-6 list-disc text-xl">
              <li>2017年3月龍谷大学文学部卒業</li>
              <li>同年4月、株式会社カワニシホールディングス経理部に入社</li>
              <li>同社にて総務業務や倉庫管理業務等幅広く携わる</li>
              <li>2020年初め頃よりHP制作に関する独学を開始</li>
              <li>同年秋頃に初案件を受注</li>
              <li>2021年5月より前職を退職し、フリーランスとして活動開始。</li>
              <li>
                同時期よりJava、Swift、Python等幅広く学習を開始する。中でもJavaScriptを活用したReactの学習をよく行う。
              </li>
              <li>2022年5月より転職に向けて活動を始める。</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-8 flex">
        <div className="... mr-8 w-64 flex-auto">
          <div className="my-12">
            <div className="h-10 w-96 rounded-2xl border-solid bg-slate-100 shadow-lg">
              <p className="my-auto pt-2 text-center text-xl">
                reason 転職を決意した訳
              </p>
            </div>
            <p className="mt-4 text-xl">
              2021年より幅広くプログラミングの学習を始めましたが、中でもJavaScriptを用いたReactやNext.jsにハマりました。
              当技術を用いて仕事を行ってみたかったことや、プログラマーとして企業に勤めるという経験を積みたいと思い立ち、2022年5月頃に転職（復職）を決意致しました。
            </p>
          </div>
        </div>
        <div className="... ml-8 w-2 flex-auto shadow-xl">
          <Image
            src={imageReason}
            layout="responsive"
            // width={"360px"}
            // height={"360px"}
            alt="KenImg"
          />
        </div>
      </div>
    </div>
  );
};
