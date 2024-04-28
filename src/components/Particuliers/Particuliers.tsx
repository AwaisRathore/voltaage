import exportIcon from "@/assets/export.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ParticuliersCarousel from "./ParticuliersCarousel";

export default function Particuliers() {
  return (
    <>
      <div className=" flex flex-col p-0 md:py-6 md:pl-0 md:pr-6">
        <div className="rounded-0 overflow-clip bg-gray-100 min-h-[calc(100vh-3rem)] md:rounded-2xl">
          <div className="flex flex-col bg-white px-4 py-8 md:px-6">
            <div className="flex w-full flex-col justify-between gap-1 md:flex-row">
              <div className="flex flex-col gap-2">
                <div className="text-xs font-normal text-slate-300">
                  Particuliers
                </div>
                <div className="text-2xl font-bold text-neutral-800">
                  Particuliers
                </div>
              </div>
              <div className="mt-2 flex w-full max-w-80 items-center justify-between gap-2 md:mt-0">
                <Select>
                  <SelectTrigger className="w-[180px] rounded-none text-sm font-normal">
                    <SelectValue placeholder="Tous les communes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className=" text-sm font-normal" value="light">
                      Light
                    </SelectItem>
                    <SelectItem className=" text-sm font-normal" value="dark">
                      Dark
                    </SelectItem>
                    <SelectItem className=" text-sm font-normal" value="system">
                      System
                    </SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-2">
                  <img src={exportIcon} />
                  <div className="text-sm font-semibold text-indigo-500">
                    Export Data
                  </div>
                </div>
              </div>
            </div>
            <ParticuliersCarousel />
          </div>
          <div className="rounded-0 flex h-full flex-1 flex-col gap-1 px-4 py-8 md:px-6">
            <h1 className="text-xl font-semibold text-neutral-800">
              Marques des véhicules électriques :
            </h1>
            <div className="flex flex-wrap justify-between gap-4 mt-4">
              <div className="flex flex-1 items-center justify-center rounded bg-white p-6 text-base  font-semibold text-neutral-800 shadow ">
                Stellantis 
              </div>
              <div className="flex flex-1 items-center justify-center rounded bg-white p-6 text-base  font-semibold text-neutral-800 shadow ">
                Mercedes
              </div>
              <div className="flex flex-1 items-center justify-center rounded bg-white p-6 text-base  font-semibold text-neutral-800 shadow ">
                Renault
              </div>
              <div className="flex flex-1 items-center justify-center rounded bg-white p-6 text-base  font-semibold text-neutral-800 shadow ">
                Tesla
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
