import HomeHeader from "./Home/HomeHeader";

import HomeBarChartOne from "./Home/HomeBarChartOne";
import HomeBarChartTwo from "./Home/HomeBarChartTwo";
import HomeBarChartThree from "./Home/HomeBarChartThree";
import HomeBarChartFour from "./Home/HomeBarChartFour";
import HomeCarousel from "./Home/HomeCarousel";
import info from "@/assets/info.svg";

export default function Dashboard() {
  return (
    <>
      <div className=" flex flex-col p-0 md:py-6 md:pl-0 md:pr-6">
        <div className="rounded-0 min-h-[calc(100vh-3rem)] overflow-clip bg-gray-100 md:rounded-2xl">
          <div className="flex flex-col bg-white px-4 py-8 md:px-6">
            <HomeHeader />
            <div className="mt-8 flex h-full flex-col gap-6  md:h-[450px] md:flex-row  md:gap-8">
              <div className="flex aspect-square w-full flex-1 flex-col	rounded-2xl bg-violet-100 p-6 md:aspect-auto md:w-1/2 md:p-8">
                <h1 className=" text-base font-semibold text-neutral-800">
                  Conseil Voltaage et engagements des aménageurs en nombre de
                  points de charge
                </h1>
                <div className="flex-1">
                  <HomeBarChartOne />
                </div>
              </div>
              <div className="aspect-square flex-1 overflow-clip rounded-2xl	md:aspect-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91929.54479081936!2d12.377692649745724!3d43.94284834380992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ceb5ff5e63f79%3A0xf39982342010!2sSan%20Marino!5e0!3m2!1sen!2s!4v1714281995782!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  // style="border:0;"
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="rounded-0 flex h-full flex-1 flex-col gap-1 px-4 py-8 md:px-6">
            <div className="flex h-full flex-col gap-6 md:h-[450px] md:flex-row">
              <div className="flex w-full flex-1 flex-col gap-6 rounded-2xl md:w-[33.3333%] ">
                <div className="flex h-[calc(50%-25px)] flex-1 flex-col rounded-2xl bg-white p-6 shadow">
                  <h1 className="flex justify-between pb-2 text-sm font-semibold text-neutral-800">
                    Nombre VEs par nombre de PdC
                    <img src={info} />
                  </h1>
                  <div className="aspect-[3/1] flex-1  md:aspect-auto">
                    <HomeBarChartTwo />
                  </div>
                </div>
                <div className="h-[calc(50%-25px)] flex-1">
                  <HomeCarousel />
                </div>
              </div>
              <HomeBarChartThree />
              <div className="flex flex-1 flex-col rounded-2xl bg-white p-6 shadow">
                <h1 className=" pb-2 text-base font-semibold text-neutral-800">
                  Questionnaires Voltaage
                </h1>
                <div className="aspect-square flex-1 md:aspect-auto">
                  <HomeBarChartFour />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
