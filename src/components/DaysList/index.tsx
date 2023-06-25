import { useEffect, useState } from "react";
import { Day } from "../../models/Day";
import { DaysService } from "../../services/DaysService";
import { DayItem } from "./DayItem";

import styled from "./styled.module.css";

interface ListProps {
  loaderHandler: () => void;
}

export function DaysList() {
  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => setIsLoading(!isLoading);

  const [days, setDays] = useState<Day[]>();

  useEffect(() => {
    const daysService = new DaysService();

    daysService.getData().then(({ data }) => {
      setDays(
        data.map((responseElement: Day) => {
          const day = new Day();
          day.populateWithReponse(responseElement);
          return day;
        })
      );
      toggleLoading();
    });
  }, []);

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <aside className={styled.aside}>
      <h2>Days</h2>
      <ul>
        {days?.map((day) => (
          <DayItem day={day} />
        ))}
      </ul>
    </aside>
  );
}
