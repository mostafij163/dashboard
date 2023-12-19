import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import ChartCard from "./ChartCard";

export default function BarChart({ labels, datasets }) {
  return (
    <ChartCard
      title="Highest Stock Price"
      caption="Highest stock price comparision for last five months of Apple inc. and Google inc."
    >
      <Bar
        data={{
          labels: labels,
          datasets: datasets,
        }}
      />
    </ChartCard>
  );
}
