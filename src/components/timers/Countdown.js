import React from "react";
import Count from "../../utils/Count";
import Card from "../../UI/Card";


class Countdown extends React.Component {


  render() {
    const repeat = (times) => {
      const data = {
        ...times,
      };
      console.log(times);
      return times;
    };
    return (<Card><Count></Count></Card>);
  }
}

export default Countdown;
