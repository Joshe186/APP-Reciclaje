import { useEffect } from "react";
import styles from "./Perfil.module.css";
import { useSelector, useDispatch } from "react-redux";
import { dataPersonal } from "../../redux/action";
import { DeleteAccount } from '../../redux/action'
import Button from "@mui/material/Button";


export default function Perfil() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);
  const role = useSelector((state) => state.role);
  const datapersonal = useSelector((state) => state.datapersonal);

  useEffect(() => {
    dispatch(dataPersonal(token));
  }, [token]);


  const handleDelete = () => {
    setTimeout(async () => {
    dispatch(DeleteAccount(token))
  }, 2000);

  }
  return (
    <div className={styles.perfil_container}>
      <div className={styles.box_perfil}>
        <div className={styles.data}>
          <strong>Dirección:</strong>{" "}
          <label htmlFor="">{datapersonal.address}</label>
        </div>
        <div className={styles.data}>
          <strong>Email:</strong>{" "}
          <label htmlFor="">{datapersonal.email}</label>
        </div>
        <div className={styles.data}>
          <strong>Contraseña:</strong>{" "}
          <label htmlFor="">*************</label>
        </div>
      <Button
            type="submit"
            variant="contained"
            sx={{
              background: "#C80000",
              ":hover": { background: "#C80000" },
              "@media (max-width: 768px)": { width: "90%", margin: "auto" },
            }}
            onClick={handleDelete}
          >
        Eliminar
          </Button>
      </div>
    </div>
  );
}
