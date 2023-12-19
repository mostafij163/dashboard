import { Container, Typography, Paper, Box, styled } from "@mui/material";

const CardDescription = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.primary.main};
    padding: 1rem;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    text-align: left;
`
);

const CardBody = styled(Box)`
  padding: 1rem;
`;

export default function ChartCard({ children, title, caption }) {
  return (
    <Container maxWidth="xl">
      <Paper>
        <CardBody>{children}</CardBody>
        <CardDescription>
          <Typography variant="h6" fontWeight="600" color="#fff">
            {title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#dedede",
            }}
          >
            {caption}
          </Typography>
        </CardDescription>
      </Paper>
    </Container>
  );
}
