import React from "react";
import KeyboardKey from "./keyboardKey";

const Keyboard = () => {
  const row_qwerty = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

  const row_asdf = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

  const row_zxcv = ["z", "x", "c", "v", "b", "n", "m"];

  return (
    <div className="keyboard">
      <div>
        {row_qwerty.map((key, index) => (
          <KeyboardKey data={key} key={index} />
        ))}
      </div>

      <div>
        {row_asdf.map((key, index) => (
          <KeyboardKey data={key} key={index} />
        ))}
      </div>
      <div>
        {row_zxcv.map((key, index) => (
          <KeyboardKey data={key} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
