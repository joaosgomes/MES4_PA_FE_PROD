import React from "react";
import { Statistic } from "antd";

const { Countdown } = Statistic;

const CountdownComponent = ({ value, onFinish }) => {
  return (
    <Countdown
      value={value}
      onFinish={onFinish}
      format="D [Days] H [Hours] m [Minutes] s [Seconds]"
      title="Remaining Time"
      valueStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        color: "#8888",
      }}
    />
  );
};

export default CountdownComponent;
