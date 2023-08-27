import React from 'react';
import { Button } from '@mui/material';
const CButton = (props) => {
  return (
    <Button
      variant={props.varient}
      onClick={props.onClick}
      style={{
        fontFamily: props.fontFamily ? props.fontFamily : 'Raleway',
        textTransform: 'initial',
      }}>
      {props.title}
    </Button>
  );
};

export default CButton;
