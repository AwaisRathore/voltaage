import exportIcon from "@/assets/export.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HomeHeader() {
  return (
    <div className="flex w-full flex-col justify-between gap-1 md:flex-row">
      <div className="flex flex-col gap-2">
        <div className="text-xs font-normal text-slate-300">Particuliers</div>
        <div className="text-2xl font-bold text-neutral-800">Particuliers</div>
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
  );
}
