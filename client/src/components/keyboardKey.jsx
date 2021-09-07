import { useState, useEffect } from "react";

const KeyboardKey = (props) => {
  const letter = props.data;

  const [active, setActive] = useState(false);

  const useKeyPress = () => {
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
    }, []);

    const upHandler = ({ key }) => {
      if (key === letter) {
        setActive(false);
      }
    };

    const downHandler = ({ key }) => {
      if (key === letter) {
        setActive(true);
      }
    };
  };

  useKeyPress();

  return (
    <button
      type="button"
      className={`keyboard__key ${active ? "keyboard__keypress" : ""}`}
    >
      {letter.toUpperCase()}
    </button>
  );
};

export default KeyboardKey;
