import { useState } from "react";
import HomeBarChartThreeA from "./HomeBarChartThreeA";
import HomeBarChartThreeB from "./HomeBarChartThreeB";
export default function HomeBarChartThree() {

    const [showChartA, setShowChartA] = useState(true);


  return (
    <div className="flex flex-1 flex-col rounded-2xl bg-white p-6 shadow">
    <div className="flex flex-col">
      <div className="flex justify-between gap-4">
        <div
          className={`${showChartA ? "bg-neutral-800 text-white" : "bg-white text-neutral-800"} flexCenter flex-1 rounded-sm border-2 border-neutral-800 py-1 text-base font-semibold `}
          onClick={() => setShowChartA(true)}
        >
          Puissance par pdc
        </div>
        <div
          className={`${showChartA ? "bg-white text-neutral-800" : "bg-neutral-800 text-white"} flexCenter flex-1 rounded-sm border-2 border-neutral-800 py-1 text-base font-semibold `}
          onClick={() => setShowChartA(false)}
        >
          Acteurs privés
        </div>
      </div>
      <h1 className=" my-4 pb-2 text-sm font-semibold text-neutral-800">
        {showChartA
          ? "Engagements des aménageurs par domaine de puissance ennombre de points de charge"
          : "Top 4 acteurs privés sur le territoire"}
      </h1>
    </div>
    <div className="flex-1 aspect-square  md:aspect-auto">
      {showChartA ? <HomeBarChartThreeA /> : <HomeBarChartThreeB />}
    </div>
  </div>
  )
}
