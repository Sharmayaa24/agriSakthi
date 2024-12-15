import React from "react";

import { ResponsivePie } from "@nivo/pie";

const donutData = [
  { id: "Received", value: 70 },
  { id: "Outstanding", value: 30 },
];

const DonutChart = () => (
  <div style={{ height: "400px" }}>
    <ResponsivePie
      data={donutData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={["#6ebdd1", "#afc979"]}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabel={(d) => `${d.id} (${d.value})`}
      arcLinkLabelsTextColor="#333333"
      arcLabelsTextColor="#ffffff"
    />
  </div>
);

export default DonutChart;
