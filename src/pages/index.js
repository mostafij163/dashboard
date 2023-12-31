import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  BarChart as BarChartIcon,
  ShowChart as ShowChartIcon,
  Analytics as Logo,
} from "@mui/icons-material";

const drawerWidth = 240;
const sidemenus = [
  {
    title: "Dashboard",
    Icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    title: "Bar chart",
    Icon: BarChartIcon,
    path: "/dashboard/bar-chart",
  },
  {
    title: "Line chart",
    Icon: ShowChartIcon,
    path: "/dashboard/line-chart",
  },
];

const SideMenuItem = styled(ListItem)(
  ({ theme }) => `
  padding: 0.5rem;
  & .MuiListItemButton-root {
    padding: 0.5rem;
    margin: 0 1rem;
    border-radius: 12px;
    gap: 0.8rem
  }
  & .MuiListItemIcon-root {
    min-width: auto;
  }
  :hover .MuiListItemButton-root {
    background-color: ${theme.palette.primary.main};
  }

  :hover .MuiListItemIcon-root, :hover .MuiTypography-root {
    color: #fff
  }
`
);

const SidebarLogo = styled(Link)(
  ({ theme }) => `
  text-decoration: none;
  color: ${theme.palette.primary.main};
  & .MuiTypography-root {
    font-weight: 600
  }
`
);

export default function Root() {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          padding: "1rem 0",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <SidebarLogo to="/dashboard">
          <Toolbar
            sx={{ minHeight: "auto !important", padding: "1rem !important" }}
          >
            <Logo
              sx={{
                height: "3rem",
                width: "3rem",
              }}
            />
            <Typography variant="h5">Analytics</Typography>
          </Toolbar>
        </SidebarLogo>
        <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
          {sidemenus.map(({ title, path, Icon }) => (
            <SideMenuItem
              sx={
                location.pathname === path
                  ? {
                      "& .MuiListItemButton-root": {
                        backgroundColor: (theme) => theme.palette.primary.main,
                      },
                      "& .MuiListItemIcon-root, .MuiTypography-root ": {
                        color: "#fff",
                      },
                    }
                  : {}
              }
              key={path}
              disablePadding
              component={Link}
              to={path}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </SideMenuItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        style={{
          padding: "1rem 0",
          height: "100%",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
