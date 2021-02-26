import React from "react";

export const useKeyPress = (targetKey, functionOnKey, prop) => {
  const [keyPressed, setKeyPressed] = React.useState(false);

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      prop ? functionOnKey(prop) : functionOnKey();
      setKeyPressed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keyup", upHandler);
    };

    // eslint-disable-next-line
  }, []);

  return keyPressed;
};

export default useKeyPress;
