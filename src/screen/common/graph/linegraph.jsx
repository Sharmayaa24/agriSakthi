import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const barData = [
  { category: "Jan", income: 1000, expenditure: 500 },
  { category: "Feb", income: 5500, expenditure: 750 },
  { category: "Mar", income: 2000, expenditure: 1000 },
  { category: "Apr", income: 2500, expenditure: 1250 },
  { category: "May", income: 3000, expenditure: 1500 },
  { category: "Jun", income: 3500, expenditure: 1750 },
  { category: "Jul", income: 1000, expenditure: 2000 },
  { category: "Aug", income: 4500, expenditure: 2250 },
  { category: "Sept", income: 5000, expenditure: 2500 },
  { category: "Oct", income: 1000, expenditure: 2750 },
  { category: "Nov", income: 4000, expenditure: 3000 },
  { category: "Dec", income: 6500, expenditure: 3250 },
];

const BarChart = () => (
  <div style={{ height: "300px" }}>
    <ResponsiveBar
      data={barData}
      keys={["income", "expenditure"]}
      indexBy="category"
      margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
      padding={0.3}
      colors={({ id }) => (id === "income" ? "green" : "#ee5122")}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      
      minValue="auto"
      maxValue="auto"
      groupMode="grouped"
      layout="vertical"
      enableGridX={false}
      enableGridY={false}
      barSize={0.5}
    />
  </div>
);
export default BarChart;