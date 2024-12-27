import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";

export const data = [
    {
      id: "Series 1",
      data: [
        { x: "6/11/24", y: 300000 },
        { x: "7/11/24", y: 400000 },
        { x: "8/11/24", y: 400000 },
      ],
    },
  ];
export default function SalesReportGraph() {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <div
        style={{
          height: "400px",
          width: "300px", 
          minWidth: "100%",
        }}
      >
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: 1200000,
            stacked: false,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: "middle",
            format: (value) => `${value / 1000}k`,
            tickValues: [200000, 400000, 600000, 800000],
          }}
          enablePoints={true}
          pointSize={10}
          pointColor={{ from: "color", modifiers: [] }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          enableArea={true}
          useMesh={true}
          curve="catmullRom"
          colors={["#1B66EF"]}
          defs={[
            linearGradientDef("gradientA", [
              { offset: 0, color: "#1B66EF", opacity: 0.5 },
              { offset: 90, color: "#1B66EF", opacity: 0.1 },
            ]),
          ]}
          fill={[{ match: "*", id: "gradientA" }]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 40,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.85,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          gridXValues={null}
          gridYValues={null}
        />
      </div>
    </div>
  );
}