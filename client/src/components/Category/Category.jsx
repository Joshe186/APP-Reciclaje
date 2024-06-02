import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import styles from "./Category.module.css";
import { Link } from "react-router-dom";

const images = [
  {
    url: "https://www.zschimmer-schwarz.es/app/uploads/2021/06/reciclar-plastico-proceso-de-reciclaje-residuos-plasticos-1280x720.jpg",
    title: "Plásticos",
    width: "50%",
    link: '/plasticos'
  },
  {
    url: "https://www.la7tv.es/asset/thumbnail,1280,720,center,center/media/la7tv/images/2023/03/10/2023031008341347678.jpg",
    title: "Cartón",
    width: "50%",
    link: '/cartón'

  },
  {
    url: "https://mercado.com.ar/wp/wp-content/uploads/2022/09/reciclar.jpg",
    title: "Papel",
    width: "33.3%",
    link: '/papel'

  },
  {
    url: "https://imagenes.elpais.com/resizer/TfU1dKfuc6JSEymY7nIEkHWzs1s=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZJ7XX53AUX73AIKAGD24X3HA3I.jpg",
    title: "Vidrio",
    width: "33.4%",
    link: '/vidrio'

  },
  {
    url: "https://espaciosustentable.com/wp-content/uploads/2016/08/24c2ba22e0204c88bd33031fd2ea8ff6_534x326.jpg",
    title: "Textil",
    width: "33.3%",
    link: '/textil'

  },
  
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 400,
  [theme.breakpoints.down("sm")]: {
    margin: "auto",
    width: "90% !important", // Overrides inline-style
    height: 100,
    marginTop: "1em"
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Category() {
  return (
    <div className={styles.container_category}>
    
      <div className={styles.text}>
      <div>
        <h1>Recycling Chile.</h1>
      </div>
      <p>
      El propósito fundamental de esta aplicación es contribuir al bienestar del medio ambiente mediante la implementación de un sistema de reciclaje en la comunidad. 
        </p>
<p>
Se busca promover la educación y conciencia ambiental, facilitar el acceso a puntos de centro de acopios cercanos, proporcionar información relevante y crear valor social. 
</p>
<p>
El objetivo es mejorar la eficiencia del reciclaje y fomentar la participación y comprometerse con la causa ecológica. 

</p>

        <h1>¿Qué es un residuo reciclable? </h1>
        <p>
            Los residuos reciclables son desechos que están hechos de materiales que pueden volver a ser insertados dentro del sistema de producción.
        </p>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
          marginTop: "4em",
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
            >
            <Link to={image.link} key={image.title}>
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
                >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
        </Link>
          </ImageButton>
        ))}
      </Box>
    </div>
    );
  }
  