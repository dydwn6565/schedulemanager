import React, { useState } from 'react'

import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const DatePicker: React.FC<{
  handleText: (event: string) => void;
}> = ({handleText}) => {
  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);
  return (
    <div>
      <>
        {console.log(value[0]?.toISOString())}
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: "Check-in", end: "Check-out" }}
        >
          <DateRangePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              handleText("Date");
            }}
            renderInput={(startProps, endProps) => (
              // <React.Fragment>
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </>
              // </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </>
    </div>
  );
};

export default DatePicker