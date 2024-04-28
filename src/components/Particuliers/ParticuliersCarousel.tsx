import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import list from "@/assets/list.svg";
import plug from "@/assets/plug.svg"
import home from "@/assets/home.svg"

const carouselData = [
  {
    text: "Nombre de questionnaires avec réponses ",
    price: "35",
    color: "text-[#6176F4]",
    bgColor: "bg-[#e9ebfc]",
    icon: list,
    iconBg: "bg-[#6176F4]",
  },
  {
    text: "Besoin d'installation de points de charge sur la voie publique ",
    price: "21",
    color: "text-[#CD7405]",
    bgColor: "bg-[#FFA12D1A]",
    icon: plug,
    iconBg: "bg-[#CD7405]",
  },
  {
    text: "Possibilité d'installation de borne à domicile ",
    price: "14",
    color: "text-[#156c13]",
    bgColor: "bg-[#156C131A]",
    icon: home,
    iconBg: "bg-[#156c13]",
  },
];

export default function ParticuliersCarousel() {
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {carouselData.map((item, index) => (
            <CarouselItem
              key={index}
              className="py-6 md:basis-1/2 md:p-6 lg:basis-1/3"
            >
              <div
                className={`${item.bgColor} flex flex-col gap-4 rounded-[40px] p-8`}
              >
                <div
                  className={` ${item.iconBg} flexCenter h-12 w-12 rounded-full`}
                >
                  <img src={item.icon} alt="" />
                </div>
                <div className={`${item.color} text-sm font-semibold`}>
                  {item.text}
                </div>
                <div className={`${item.color} text-3xl font-semibold`}>
                  {item.price}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flexCenter gap-2 lg:hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
}
