import React from "react";

const ConsoleHelper = (data) => {
  return;
    if (process.env.NODE_ENV === 'production') return;
    console.log(data);
  }
  
  export default ConsoleHelper;