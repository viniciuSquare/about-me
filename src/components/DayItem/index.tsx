import { Day } from "../../../models/Day"
import styled from "./styled.module.css";

interface DayItemProps {
  day: Day
}

export function DayItem(props: DayItemProps) {
  const { day } = props;

  return (
    <li className={styled['day-item']} key={ day.id } > 
      <a href={ day.url as string }><span>{ day.title }</span></a>
    </li>
  )
}