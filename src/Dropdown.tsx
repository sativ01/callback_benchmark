import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

let renderCount = 0;

function DropdownComponent({
  value,
  setValue,
  index,
}: {
  value: number | string;
  setValue: (value: string | number, index: number) => void;
  index: number;
}) {
  // const handleChange = React.useCallback(
  //   (event: SelectChangeEvent) => {
  //     setValue(event.target.value, index);
  //   },
  //   [index, setValue]
  // );
  const handleChange = (event: SelectChangeEvent) =>
    setValue(event.target.value, index);

  renderCount++;
  console.log(renderCount);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value as any}
        label="Value"
        onChange={handleChange}
      >
        <MenuItem value={value}>
          <em>{value}</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

// export const Dropdown = DropdownComponent;
export const Dropdown = React.memo(DropdownComponent);
