import { useState, useEffect, Fragment } from "react";
import Wheel from "@uiw/react-color-wheel";
import { hsvaToHex } from "@uiw/color-convert";

function App() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });

  return (
    <>
      <Fragment>
        <Wheel
          color={hsva}
          onChange={(color) => setHsva({ ...hsva, ...color.hsla })}
        />
        <div className={`w-full`}></div>
      </Fragment>
    </>
  );
}

export default App;
