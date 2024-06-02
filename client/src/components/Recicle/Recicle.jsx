import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "./Recicle.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { AllCompany } from "../../redux/action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxWidth: "90%", // Nuevo estilo para dispositivos móviles
  maxHeight: "90%", // Nuevo estilo para dispositivos móviles
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto", // Por defecto, permitir scroll

  // Media query para dispositivos con ancho menor a 768px (celulares)
  "@media (max-width: 768px)": {
    maxHeight: "80vh", // Limitar altura en dispositivos móviles
  },
};

// En el componente Modal
<Box sx={style}>
  {/* Contenido del modal */}
</Box>


export default function Recicle() {
  const dispatch = useDispatch();
  const [loadingError, setLoadingError] = React.useState(false);
  const allcompany = useSelector((state) => state.allcompany);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    address: "",
    role: "",
    bags: "", // Agrega un campo para la cantidad de bolsas
    phone: "", // Agrega un campo para el teléfono
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    dispatch(AllCompany());
  }, [dispatch]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingError(true);

    setTimeout(async () => {
      try {
        // Enviar el formulario por correo electrónico
        const mailtoLink = `mailto:${data.name}?subject=Solicitud de recolección de residuos&body=Email:${data.email}%0D, Telefóno:${data.phone}%0D, Dirección de recolección:${data.address}%0D, Cantidad de bolsas:${data.bags}%0D, Horario de retiro:${data.role}`;
        window.location.href = mailtoLink;
      } catch (error) {
        alert("El usuario ya existe");
        console.log(error);
      } finally {
        setLoadingError(false);
      }
    }, 3000);
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className={styles.container_recicle}>
      <div className={styles.box_recicle}>
        <div>
          <h1>Recolección de residuos </h1>
          <p>Separá tus residuos, ¡Nosotros los pasamos a buscar!</p>
        </div>
        <div>
          <img
            src="https://img.freepik.com/vector-premium/recoleccion-residuos-segregacion-reciclaje_458444-19.jpg"
            className={styles.img_recicle}
            alt="Reciclar residuos"
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "#005d1f",
              ":hover": { background: "#005d1f" },
              "@media (max-width: 768px)": { width: "90%", margin: "auto" },
            }}
            onClick={handleOpen}
          >
            Solicitar recolección
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form onSubmit={handleSubmit}>
                <div className={styles.register_container}>
                  <div className={styles.register_container}>
                    <div className={styles.register_tittle}>
                      <h1>Solicitar recolección </h1>
                      <p>
                        Solicite los servicios competando el formulario.
                      </p>
                    </div>

                    <div className={styles.input_container}>
                      <div className={styles.select_container}>
                        <label htmlFor="">
                          Seleccionar empresa recolectora
                        </label>
                        <select
                          name="name"
                          onChange={handleChange}
                          className={styles.select_label}
                          required
                        >
                          <option value="empresa">
                            Seleccionar empresa recolectora
                          </option>
                          {allcompany &&
                            allcompany.map((info) => (
                              <option value={info.email}>{info.name}</option>
                            ))}
                        </select>
                      </div>

                      <div className={styles.select_container}>
                        <label htmlFor="">Seleccionar tipos de residuos</label>
                        <select
                          name="product"
                          onChange={handleChange}
                          className={styles.select_label}
                          required
                        >
                          <option value="">
                            Seleccionar tipos de residuos
                          </option>

                          <option value="carton">Cartón</option>
                          <option value="vidrio">Vidrio</option>
                          <option value="tela">Tela</option>
                          <option value="papel">Papel</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.input_container}>
                      <div className={styles.input_label}>
                        <label>Cantidad de bolsas</label>
                        <input
                          type="number"
                          name="bags"
                          value={data.bags}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.input_label}>
                        <label>Dirección donde pasar a buscar</label>
                        <input
                          type="text"
                          name="address"
                          value={data.address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.input_container}>
                      <div className={styles.select_container}>
                        <label htmlFor="">Seleccionar horario de retiro</label>
                        <select
                          name="role"
                          value={data.role}
                          onChange={handleChange}
                          className={styles.select_label}
                          required
                        >
                          <option value="">
                            Seleccionar horario de retiro
                          </option>

                          <option value="10AM – 12PM">10AM – 12PM</option>
                          <option value="14PM – 16PM">14PM – 16PM </option>
                          <option value="18PM – 20PM">18PM – 20PM</option>

                        </select>
                      </div>
                      <div className={styles.input_label}>
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.input_container}>
                      <div className={styles.input_label}>
                        <label>Teléfono</label>
                        <input
                          type="text"
                          name="phone"
                          value={data.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        background: "#005d1f",
                        ":hover": { background: "#005d1f" },
                        "@media (max-width: 768px)": {
                          width: "90%",
                          margin: "auto",
                        },
                      }}
                    >
                      {loadingError ? (
                        <CircularProgress
                          size={25}
                          thickness={5}
                          sx={{ color: "#fff" }}
                        />
                      ) : (
                        "Solicitar recolección"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
