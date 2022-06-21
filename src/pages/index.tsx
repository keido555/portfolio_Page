import type { NextPage } from "next";
import Image from "next/image";
import { Header } from "src/components/layout/Header";
import { Top } from "src/components/block/Top";
import { Introduction } from "src/components/block/Introduction";
import SimpleSlider from "src/components/block/Slider";

const Home: NextPage = () => {
  return (
    <div className="m-auto max-w-screen-xl">
      <Header />
      <main>
        <section>
          <Top />
        </section>
        <section>
          <Introduction />
        </section>
        <section>
          <SimpleSlider />
        </section>
      </main>
    </div>
  );
};

export default Home;
