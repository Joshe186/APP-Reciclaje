import { useDispatch } from "react-redux";
import styles from "./Register.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { register } from '../../redux/action';
import { useNavigate } from 'react-router-dom'
import CircularProgress from "@mui/material/CircularProgress";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingError, setLoadingError] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    comuna: "",
    city: "",
    role: "",
  });

  const handleSubmit =  async (e) => {
    e.preventDefault();
    setLoadingError(true);

    setTimeout(async () => {

    try {
      const Register = await dispatch(register(data))
      if (Register) {
        alert("Registrado correctamente")
        navigate("/auth/login")
      }
    } catch (error) {
      alert("El usuario ya existe")
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
    <form  onSubmit={handleSubmit}>
      <div className={styles.register_container}>
        <div className={styles.register_tittle}>
          <h1>REGISTRARSE</h1>
          <p>
            Elija que tipo de cuenta quiere registrar y llene el formulario.
          </p>
        </div>

        <div>
          <select name="role" value={data.role} onChange={handleChange} required>
          <option value="">seleccione el tipo  de cuenta</option>

            <option value="empresa">empresa</option>
            <option value="personal">personal</option>
          </select>
        </div>
        <div className={styles.input_container}>
          <div className={styles.input_label}>
            <label >{data.role === "personal" ? "Nombre completo": "Nombre de la empresa"}</label>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <div className={styles.input_label}>
            <label htmlFor="">Email</label>
            <input type="email" name="email" onChange={handleChange}  required/>
          </div>
        </div>
        <div className={styles.input_container}>
          <div className={styles.input_label}>
            <label htmlFor="">Contraseña</label>
            <input type="password" name="password" onChange={handleChange} required/>
          </div>
          <div className={styles.input_label}>
            <label htmlFor="">Pais</label>
            <input type="text" name="country"  onChange={handleChange} required/>
          </div>
        </div>

        <div className={styles.input_container}>
          <div className={styles.input_label}>
            <label htmlFor="">Ciudad</label>
            <input type="text" name="city" onChange={handleChange} required/>
          </div>
          <div className={styles.input_label}>
            <label htmlFor="">Comuna</label>
            <input type="text" name="comuna"  onChange={handleChange} required/>
          </div>
        </div>
        
        <Button
        type="submit"
        variant="contained"
          sx={{
            background: "#005d1f",
            ":hover": { background: "#005d1f" },
            "@media (max-width: 768px)": { width: "90%", margin: "auto" },
          }}
        >
                   {loadingError ? (
              <CircularProgress
                size={25}
                thickness={5}
                sx={{ color: "#fff" }}
              />
            ) : (
              "Registrarse"
            )}
          
        </Button>

        <div className={styles.login_account}>
          ¿Ya tiene una cuenta registrada?{" "}
          <a href="/auth/login">Iniciar sesión</a>
        </div>
      </div>
    </form>
  );
}
