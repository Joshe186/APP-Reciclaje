import styles from "./styles.module.css";

export default function Board() {
  return (
    <div className={styles.container_reciclaje}>
      <div className={styles.box_reciclaje}>
        <div>
          <h1>¿Cómo reciclar cartón?</h1>
        </div>
        <div className={styles.img_container}>
          <img
            src="https://cdn0.ecologiaverde.com/es/posts/8/2/8/como_reciclar_carton_2828_600.webp"
            alt="not found"
            className={styles.img}
          />
        </div>
     
        <div className={styles.text_info}>
          <p>
          El cartón es un material que está formado por capas de papel y, para ello, se usa fibra virgen o papel reciclado. Es un material más grueso que el papel, duro y resistente que se usa, principalmente, para embalar productos. Teniendo en cuenta la cantidad de productos que se generan, es mucho el cartón que se utiliza y como consecuencia se obtienen grandes cantidades de residuos de este. Por suerte, este material se puede reciclar o reutilizar de muchas formas distintas, reduciendo así la explotación de materias primas.
          </p>
          <p>
          Si quieres saber más sobre el reciclaje del cartón, continúa leyendo este interesante artículo de EcologíaVerde en el que hablamos acerca de <strong>cómo reciclar cartón</strong>.
          </p>
        
        </div>
        <div>
          <h1>¿Cómo reciclar cartón en casa?</h1>
        </div>
        <div className={styles.text_info}>
          <p>
          Para <strong>reciclar el cartón</strong> hay que saber cuándo podemos depositarlo y dónde depositarlo. Además, a veces, antes de buscar la opción de reciclar, podemos reutilizarlo transformando el residuo en un nuevo objeto útil o usarlo para hacer manualidades.
          </p>
     
        </div>
        <div>
          <h1>¿Qué cartón se recicla?</h1>
        </div>
        <div className={styles.text_info}>
          <p>
          Podemos reciclar el cartón de las cajas que contienen productos, el del papel higiénico, los cartones de huevos, etc., aunque es conveniente retirar todas aquellas etiquetas adhesivas que puedan contener o cualquier grapa. Otra cosa a tener en cuenta cuando vamos a reciclar cartón es que no se puede reciclar aquel cartón que tiene restos de materia orgánica, por ejemplo, las cajas de pizza que están manchadas de grasa o aceite, ya que esto altera el proceso de reciclaje quedando el material contaminado y no aprovechable de esta forma.
          </p>
          <p>
          Por tanto, es muy necesario y fácil <strong>separar el cartón reciclable en casa</strong> para llevarlo luego al contenedor adecuado, así como decidir qué piezas de cartón se pueden reutilizar con manualidades o dándoles otros usos.
          </p>
          
        </div>
        <div>
          <h1>¿Cuál es el contenedor del cartón?</h1>
        </div>
        <div className={styles.text_info}>
          <p>
          Es muy importante saber dónde se recicla el cartón para facilitar el proceso de recuperar este material y darle más vida, sin malgastarlo. El contenedor para reciclar el cartón es <strong>el azul</strong>, así que en este contenedor se pueden depositar los cartones siempre que estén libres de restos orgánicos.
          </p>
      
          
        </div>
      </div>
    </div>
  );
}
