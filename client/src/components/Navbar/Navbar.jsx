import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { dataPersonal } from "../../redux/action";
import styles from "./Navbar.module.css";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Navbar(props) {
  const { window } = props;
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const token = useSelector((state) => state.token);
  const role = useSelector((state) => state.role);
  const datapersonal = useSelector((state) => state.datapersonal);

  console.log(role);
  React.useEffect(() => {
    dispatch(dataPersonal(token));
  }, [token]);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleLogout = () => {
    // Eliminar el token del localStorage
    localStorage.removeItem('token');
    setTimeout(async () => {
    window.location.reload()
  }, 3000);

  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{}}>
      <div style={{ padding: "1em" }}>
        <strong>{datapersonal.name}</strong>
      <div className={styles.address}>{datapersonal.country}, {datapersonal.city}, {datapersonal.comuna} </div>
      </div>
      <Divider />
      <List>
      {token ? (
        <>
    
        <ListItem disablePadding>
          <ListItemButton href="/">
            <ListItemText primary="Residuos reciclables" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/recicla">
            <ListItemText primary="Recicla" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/copio">
            <ListItemText primary="Centros de acopio y reciclaje" />
          </ListItemButton>
        </ListItem>
        </>
      ):null}
        {token ? (
          <ListItem disablePadding>
            <ListItemButton href="/perfil">
              <ListItemText primary="Perfil" />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
          <ListItemButton href="/auth/login">
            <ListItemText primary="Iniciar sesión" />
          </ListItemButton>
        </ListItem>
        )}

{token ? (
      <ListItem disablePadding>
        <ListItemButton onClick={handleLogout}>
          <ListItemText primary="Cerrar sesión" />
        </ListItemButton>
      </ListItem>
    ) : null}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#005d1f" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Recycling Chile
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {token ? (
   <>
              <Button href="/" sx={{ color: "#fff" }}>
              Residuos reciclables
            </Button>
            <Button href="/recicla" sx={{ color: "#fff" }}>
              Recicla
            </Button>
            <Button href="/copio" sx={{ color: "#fff" }}>
            Centros de acopio y reciclaje
            </Button>
   </>
            ):null}
            {token ? (
              <Button href="/perfil" sx={{ color: "#fff" }}>
                Perfil
              </Button>
            ) : (
              <Button href="/auth/login" sx={{ color: "#fff" }}>
                Iniciar sesión
              </Button>
            )}

            {token ? (
              <Button href="/" onClick={handleLogout} sx={{ color: "#fff" }}>
                Cerrar sesión
              </Button>
            ) : null}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
