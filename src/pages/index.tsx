import type { NextPage } from "next";
import Image from "next/image";
import { Header } from "src/components/layout/Header";
import imageHome from "src/Image/5124911_s.jpg";

const Home: NextPage = () => {
  return (
    <div className="m-auto max-w-screen-2xl">
      <Header />
      <main>
        <section className="mt-8 flex">
          <div className="flex-none"></div>
          <div className="... ml-12 mt-8 w-64 flex-auto">
            <h1 className="text-8xl">Warashibe</h1>
            <h2 className="mt-8 text-2xl">ポートフォリオページです</h2>
          </div>
          <div
            className="... mr-8 w-48 flex-auto"
            // style={{ position: "relative", right: "0", width: "560px" }}
          >
            <Image src={imageHome} layout="responsive" alt="HomeImg" />
          </div>
        </section>
        <h2>Home</h2>
      </main>
    </div>
  );
};

export default Home;
