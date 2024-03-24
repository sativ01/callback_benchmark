import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

let renderCount = 0;

function DropdownComponent({
  value,
  setValue,
  index,
}: {
  value: number | string;
  setValue: (value: number | string, index: number) => void;
  index: number;
}) {
  // const newValue = value
  const [newValue, setNewValue] = useState<number | string>('');

  React.useEffect(() => setNewValue(value), [value])


  const localCount = React.useRef(0)
  const handleChange = React.useCallback(
    (event: SelectChangeEvent) => {
      setValue(event.target.value, index);
    },
    [index, setValue]
  );
  // const handleChange = (event: SelectChangeEvent) =>
  //   setValue(event.target.value, index);

  renderCount++;
  localCount.current++;
  console.log(renderCount, localCount.current);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={(newValue ?? value) as any}
        label="Value"
        onChange={handleChange}
      >
        <MenuItem value={newValue ?? value}>
          <em>{newValue ?? value}</em>
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
