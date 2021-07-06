import "./index.css";

import React from "react";

function InputPadrao({
  placeholder = " ",
  onChangeText = () => null,
  type = "text",
  value = "",
  inputRef = () => null,
  onKeyEnter = () => null,
}) {
  return (
    <div className="componenteInput">
      <input
        ref={(e) => inputRef(e)}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onKeyEnter();
          }
        }}
      />
    </div>
  );
}

export default InputPadrao;
