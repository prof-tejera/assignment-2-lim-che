import React, { useState } from "react";
import Display from "../views/Display";
import Button from "../views/Button";

const Helpers = () => {
  const [time, setTime] = useState({ milisec: 0, sec: 0, min: 0, hr: 0 });
  const [interval, setI] = useState();
  const [state, setState] = useState(0);

  const start = () => {
    run();
    setState(1); //start
    setI(setInterval(run, 10));
  };

  let newMilisec = time.milisec,
    newSec = time.sec,
    newMin = time.min,
    newHr = time.hr;

  const run = () => {
    if (newMin === 60) {
      newHr++;
      newMin = 0;
    }
    if (newSec === 60) {
      newMin++;
      newSec = 0;
    }
    if (newMilisec === 100) {
      newSec++;
      newMilisec = 0;
    }
    newMilisec++;
    return setTime({
      milisec: newMilisec,
      sec: newSec,
      min: newMin,
      hr: newHr,
    });
  };

  const stop = () => {
    clearInterval(interval);
    clearInterval(setI);
    setState(2); //stop
  };

  const reset = () => {
    clearInterval(interval);
    clearInterval(setI);
    setState(0); //initiate
    setTime({ milisec: 0, sec: 0, min: 0, hr: 0 })
  };

    const resume = () => start();

  return (
    <div>
      <div>
        <Display time={time} />
        <Button  state={state} reset={reset} stop={stop} start={start} resume={resume} />
      </div>
    </div>
  );
};

export default Helpers;
