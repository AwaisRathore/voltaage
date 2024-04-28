import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import plug from "@/assets/plug.svg";
import offlinebolt from "@/assets/offlinebolt.svg";

const carouselData = [
  {
    text: "Nombre de stations ",
    price: "1,235",
    color: "text-[#156c13]",
    bgColor: "bg-[#156C131A]",
    icon: offlinebolt,
    iconBg: "bg-[#156c13]",
  },
  {
    text: "Nombre de points de charge",
    price: "1,235",
    color: "text-[#CD7405]",
    bgColor: "bg-[#FFA12D1A]",
    icon: plug,
    iconBg: "bg-[#CD7405]",
  },
];

export default function HomeCarousel() {
  return (
    <>
      <Carousel className="h-full w-full">
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem className=" translate-x-2 " key={index}>
              <div
                className={`${item.bgColor} -pr-2 flex w-full flex-col gap-4 shadow rounded-[40px] p-8`}
              >
                <div
                  className={` ${item.iconBg} flexCenter h-12 w-12 rounded-full`}
                >
                  <img src={item.icon} alt="" />
                </div>
                <div className={`${item.color} text-sm font-semibold`}>
                  {item.text}
                </div>
                <div className={`${item.color} text-2xl font-semibold`}>
                  {item.price}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 gap-2 ">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
}
