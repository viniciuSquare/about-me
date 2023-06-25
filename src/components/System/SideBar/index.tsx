import { CalendarCheck, CurrencyCircleDollar, PuzzlePiece } from "phosphor-react";
import { NavItem } from "./NavItem";
import { Separator } from "../Separator";

export function SideBar() {
  return(
    <aside className=' flex flex-col h-full bg-slate-50/40 max-w-[230px] border border-blue-400'>
      
      {/* <div className="separator min-w-full h-1 bg-slate-500"></div> */}
      <NavItem label="Finances" url="finances" icon={<CurrencyCircleDollar size={24} />} ></NavItem>
      <NavItem label="Agenda" url="Agenda" icon={<CalendarCheck size={24} />}></NavItem>
      <NavItem label="Projects" url="Projects" icon={<PuzzlePiece size={24} />} ></NavItem>
      
      <Separator/>

      <NavItem label="Canvas" url="tools/Canvas" ></NavItem>
      
      <Separator/>

      <NavItem label="About Me" url="AboutMe" ></NavItem>
    </aside>
  )
}