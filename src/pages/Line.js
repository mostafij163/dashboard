import { Grid } from "@mui/material";
import { useAaplStockData, useGooglStockData } from "../api";
import LineChart from "../components/charts/LIneChart";

const labels = ["January", "February", "March", "April", "May"];

export default function Dashboard() {
  const { data: appleData } = useAaplStockData();
  const { data: googleData } = useGooglStockData();

  const openClosePriceDataset = [
    {
      label: "Apple Inc. Close Price",
      data: appleData?.data?.results?.map((result) => result.c),
    },
    {
      label: "Google Inc. Close Price",
      data: googleData?.data?.results?.map((result) => result.c),
    },
    {
      label: "Apple Inc. Open Price",
      data: appleData?.data?.results?.map((result) => result.o),
    },
    {
      label: "Google Inc. Open Price",
      data: googleData?.data?.results?.map((result) => result.o),
    },
  ];

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item sm={12}>
        <LineChart labels={labels} datasets={openClosePriceDataset} />
      </Grid>
    </Grid>
  );
}
