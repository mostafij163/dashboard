import { Line } from "react-chartjs-2";
import ChartCard from "./ChartCard";

export default function LineChart({ labels, datasets }) {
  return (
    <ChartCard
      title="Open Close Stock Price"
      caption="Open close stock price comparison for last five months of Apple inc. and Google inc."
    >
      <Line
        data={{
          labels: labels,
          datasets: datasets,
        }}
      />
    </ChartCard>
  );
}
