import React, { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [active, setActive] = useState(false);
  const reset = () => {
    setMinutes = 0;
  };
  const onChange = (event) => {
    setMinutes(event.taget.value);
  };
  const changeActive = () => {
    setActive(!active);
  };
  return (
    <div>
      <div>Time Converter</div>
      <div>
        Minutes :{" "}
        <input
          placeholder="Minutes"
          value={minutes}
          type="number"
          onChange={onChange}
          disabled={active}
        />
        <div>
          Hours :
          <input
            type="number"
            placeholder="Hours"
            value={Math.floor(minutes / 60)}
            disabled={!active}
          />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={changeActive}>active toggle</button>
      </div>
    </div>
  );
}

export default App;
