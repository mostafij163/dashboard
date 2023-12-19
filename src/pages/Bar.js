import { Grid } from "@mui/material";

import { useAaplStockData, useGooglStockData } from "../api";
import BarChart from "../components/charts/BarChart";

const labels = ["January", "February", "March", "April", "May"];

export default function Bar() {
  const { data: appleData } = useAaplStockData();
  const { data: googleData } = useGooglStockData();

  const highestPriceDataset = [
    {
      label: "Apple Inc.",
      data: appleData?.data?.results?.map((result) => result.h),
    },
    {
      label: "Google Inc.",
      data: googleData?.data?.results?.map((result) => result.h),
    },
  ];

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item lg={12}>
        <BarChart labels={labels} datasets={highestPriceDataset} />
      </Grid>
    </Grid>
  );
}
