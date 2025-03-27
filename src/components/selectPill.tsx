import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import Chip from '@mui/material/Chip';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { StdioNull } from "node:child_process";
import { setTextRange } from "typescript";

interface Props {
    options: Array<string>, 
    active?: boolean,
    setRng?: any
} 

const SelectPill = ({options, active, setRng}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    active && setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option: string) => {
    setSelected(option);
    setRng && setRng(option)
    handleClose();
  };

  return (
    <>
      <Chip
        label={selected || options[0]}
        clickable
        onClick={handleClick}
        deleteIcon={<ArrowDropDownIcon />}
        onDelete={handleClick}
        variant = 'outlined'
        size = 'small'
        color = {active?'info':'warning'}
        sx={{ 
            padding: "0px 0px", 
            fontSize: "12px", 
            cursor: active?'pointer': 'not-allowed'
        }}
      />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      
    </>
  );
};

export default SelectPill;
