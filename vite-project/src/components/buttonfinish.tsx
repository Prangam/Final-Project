import React from "react";
import { Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

export default function ButtonFinish() {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <>
    <br/>
    <Button
      onClick={handleClick}
      variant="contained"
      color={flag ? "inherit" : "success"}
      sx={{color: "#9e9e9e", width: '100%', height: '3rem', borderRadius: '7px'}}
    >
      <b>Finish This Lession</b> &nbsp; <CheckIcon sx={{color: "#e0e0e0"}}/>
    </Button>
    </>
  );
}

