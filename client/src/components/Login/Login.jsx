import * as React from "react";
import { useState } from "react";
import styles from "./Login.module.css";
import Button from "@mui/material/Button";
import { login } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingError(true);
    setTimeout(async () => {
      try {
        if (email && password) {
          // Aquí deberías tener la lógica de autenticación, por ejemplo, una llamada a la API para verificar las credenciales

          const authenticationSuccess = await dispatch(login(email, password));

          if (authenticationSuccess) {
            navigate("/");
            // Si la autenticación es exitosa, redirige al usuario a la página de inicio
          } else {
            // Si la autenticación falla, muestra una alerta
            alert("el correo y/o la contraseña no coinciden");
          }
        }
      } catch (error) {
        console.log("error en la autenticacion");
      } finally {
        setLoadingError(false);
      }
    }, 3000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.login_container}>
        <div className={styles.box_login}>
          <h1>INICIAR SESIÓN</h1>
          <label>¿si no tienes cuenta? <a href="/auth/register" className={styles.register_blank}>registrarse</a></label>
          <div className={styles.input_container}>
            <div className={styles.input_label}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.input_label}>
              <label htmlFor="">Contraseña</label>
              <div className={styles.password_input}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} ${
                    styles.view_password
                  }`}
                  onClick={togglePasswordVisibility}
                >
                  Mostrar
                </span>
              </div>
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
              "Iniciar sesión"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
