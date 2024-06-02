import styles from "./styles.module.css";

export default function Plastic() {
  return (
    <div className={styles.container_reciclaje}>
      <div className={styles.box_reciclaje}>
        <div>
          <h1>¿Cómo se recicla el plástico?</h1>
        </div>
        <div className={styles.img_container}>
          <img
            src="https://reducereutilizarecicla.org/web/app/uploads/2018/12/plastico3-768x483.jpg"
            alt="not found"
            className={styles.img}
          />
        </div>
        <div>
          <h1>¿Qué es el plástico?</h1>
        </div>
        <div className={styles.text_info}>
          <p>
            El plástico es uno de los materiales que más inundan nuestro día a
            día. Lo utilizamos para envasar todo tipo de productos, en la ropa,
            móviles, muebles o coches. Este uso tan extendido es debido a la
            gran versatilidad de este material: algunos son transparentes, otros
            resistentes a la corrosión y la mayoría tienen propiedades de
            aislamiento térmico y eléctrico. En este artículo vamos a hablar
            sobre cómo se recicla el plástico.
          </p>
          <p>
            Pero, ¿de qué se compone el plástico? Por lo general, se trata de
            polímeros de resinas y sustancias que provienen del petróleo que se
            moldean a partir de la presión y el calor como el pvc policloruro de
            vinilo que se reblandece con el calor y al enfriarse recupera su
            forma original. Dependiendo de su procedencia estos pueden ser
            naturales, si se obtienen directamente de materias primas vegetales,
            o sintéticos, elaborados a partir de compuestos derivados del
            petróleo, el gas natural o el carbón. Según esta composición,
            podemos encontrar diversos tipos de plástico: PET, PEAD, PVC, PEBD,
            PP, PS, etc.
          </p>
          <p>
            Como ya hemos visto, el plástico tiene grandes ventajas durante su
            vida útil, pero, una vez se convierte en un tipo de residuo, ¿qué
            debemos hacer con ellos? ¿Existe el reciclaje de plástico?
          </p>
        </div>
        <div>
          <h1>¿Es reciclable?</h1>
        </div>
        <div className={styles.text_info}>
          <p>
            En términos generales, los plásticos sí son reciclables y los
            encontramos en un gran número de envases del día a día: botellas de
            plástico y envases plásticos, bolsas, tarrinas, bandejas, utensilios
            de cocina desechables, envases de plástico y latas y briks, etc. ¡Tu
            labor para su reciclaje es importantísima!
          </p>
          <p>
            Existen algunas excepciones que hacen que algunos plásticos no
            puedan ser reciclados. ¿Qué tipos de plásticos no se reciclan?
            Aquellos mezclados con otros materiales difícilmente separables,
            plásticos muy degradados por las condiciones atmosféricas o aquellos
            muy pigmentados, es decir, aquellos que incorporan ciertos
            colorantes en su composición que modifican al propio plástico.
          </p>
        </div>
        <div>
          <h1>¿Cómo se recicla es plástico? ¿Cuál es su proceso?</h1>
        </div>
        <div className={styles.text_info}>
          <p>
            El proceso de reciclado del plástico comienza cuando se tira a la
            basura, concretamente en los contenedores amarillos. Es en este
            contenedor donde debemos depositar nuestros envases para, así, poder
            transportarlos a las plantas de selección.
          </p>
          <p>
            En estas, se separan en primer lugar los materiales y se clasifican
            por colores, optimizando así el uso de colorantes. Las piezas se
            rompen y trituran en pequeños trocitos, conocido como granza, para
            facilitar el tratamiento.
          </p>
          <p>
            Tras este proceso se lavan, cubriendo los trozos con agua y dejando
            que las impurezas más densas queden abajo. Se seca y centrifuga para
            eliminar otras impurezas que hayan podido quedar y se homogeneiza
            con un proceso mecánico para lograr un color y textura uniforme.
          </p>
          <p>
            Después vuelve a depurarse el material, dándole la forma y el color
            demandado para pasar por los respectivos controles de calidad.
          </p>
        </div>
      </div>
    </div>
  );
}
