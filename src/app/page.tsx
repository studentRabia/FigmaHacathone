

import ChairLayout from "./components/chairLayout";
import FutureProduct from "./components/futureProduct";
import Hero from "./components/heor";
import Logos from "./components/logos";
import Titlebar from "./components/titlebar";
import TopCategories from "./components/topCategories";

export default function Home() {
  return (
  <div>
    <Hero/>
    <Logos/>
    <Titlebar title="Featured Products"/>
    <FutureProduct/>


    <ChairLayout/>
    <Titlebar  title="Top categories"/>
    <TopCategories/>
    <Titlebar  title="Our Product" className="text-center"/>
    <FutureProduct/>
    <FutureProduct/>

  


    {/* <Titlebar  title="Featured Products"/> */}
  </div>
  );
}
