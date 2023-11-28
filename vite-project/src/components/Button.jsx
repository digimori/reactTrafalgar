import React from "react";
import Button from "react-bootstrap/Button";

const DefaultButton = () => {
  return (
    <Button
      style={{
        width: "200px",
        height: "56px",
        border: "1.4px solid #458FF6",
        backgroundColor: "#fff",
        color: "#458FF6",
        borderRadius: "55px",
      }}
    >
      PROP THIS
    </Button>
  );
};

export default DefaultButton;
