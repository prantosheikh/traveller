import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Calendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [statea, setStatea] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div >
      <h2 className="text-3xl my-8">Calendar & Prices</h2>
      <div className="hidden md:block">
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          s
          ranges={state}
          direction="horizontal"
        />
      </div>
      <div className="md:hidden flex justify-center">
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setStatea([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={statea}
        />
      </div>
    </div>
  );
};

export default Calendar;
