import styles from "./styles.module.css";

export default function Paper() {
  return (
    <div className={styles.container_reciclaje}>
      <div className={styles.box_reciclaje}>
        <div>
          <h1>¿Cómo se recicla el papel? ¿Dónde debo tirarlo?
</h1>
        </div>
        <div className={styles.img_container}>
          <img
            src="https://reducereutilizarecicla.org/web/app/uploads/2022/09/post-reciclar-papel-1-768x432.png"
            alt="not found"
            className={styles.img}
          />
        </div>
   
        <div className={styles.text_info}>
          <p>
          Este producto, tan común en nuestro día a día, es un <strong>material</strong> formado por una <strong>pasta de fibras vegetales</strong> molidas y mezcladas con agua, la cual se seca y endurece después. También se le añaden sustancias como polipropileno o polietileno para que el papel adquiera las características propias del producto. 
          </p>
          <p>
          El proceso para <strong>fabricar papel</strong> es el siguiente: de la madera de los árboles se extraen las <strong>fibras de celulosa</strong>, que pasan por un proceso químico del que se extraerá esa pasta de la que hablábamos. Esta pasta pasa por otros procesos de lavado, filtrado, secado y blanqueo. Después de haber secado y liberado toda el agua de dicha pasta, se pasa a alisarla y prensarla y, por último, se tratará para darle el acabado final. 
          </p>
  
        </div>
        <div>
          <h1>Propiedades y características del papel </h1>
        </div>
        <div className={styles.text_info}>
          <p>
          Entre las muchas variedades de papel que existen, algunas propiedades difieren enormemente, mientras que otras mínimamente 
          </p>
          <p>
          Se pueden clasificar según: 
          </p>
          <p>
            .1 <strong>Sus particularidades físicas</strong>. Entendemos propiedades físicas como su peso, gramaje, grosor, calibre, forma, humedad y fricción. 
          </p>
          <p>
            .2 <strong>Sus particularidades ópticas</strong>. El principal motivo de satisfacción del fabricante de papel es el brillo. Entre las principales propiedades visuales encontramos el color, brillo, acabado, fluorescencia y opacidad. 
          </p>
        </div>
        <div>
          <h1>¿El papel es reciclable? </h1>
        </div>
        <div className={styles.text_info}>
          <p>
          La respuesta es sí, <strong>podemos reciclar la mayoría del papel</strong>, y decimos la mayoría porque lo que se recicla es la celulosa, material principal que lo forma, pero hay algunos <strong>tipos de papel</strong> en los que su material principal no es la celulosa, sino están compuestos de otros materiales que los convierten en no reciclables. 
          </p>
          <p>
          Debemos de <strong>tener cuidado</strong> con el <strong>papel higiénico</strong> o papel sanitario, papel manchado con grasas, papel encerado, plastificado o con parafina, papel de autocopiado o papel térmico de fax. Puesto que estos son los tipos que no podrás reciclar. 
          </p>
      
        </div>

        <div>
          <h1>Tipo de contenedor</h1>
        </div>
        <div className={styles.text_info}>
          <p>
          El <strong>contenedor azul</strong> es donde deberás depositar todo el papel que quieras reciclar, ya que es el contenedor destinado únicamente al reciclaje de envases y productos fabricados a partir de <strong>papel y cartón</strong>. Una vez introducidos los <strong>residuos de papel</strong> en el contenedor, se procederá a su transporte a la <strong>planta de reciclaje de papel</strong>, cuyo resultado serán <strong>toneladas de papel reciclado</strong>. 
          </p>
        
      
        </div>

        <div>
          <h1>¿Cómo son los procesos de reciclaje? </h1>
        </div>
        <div className={styles.text_info}>
          <p>
          El <strong>papel</strong> se llevará a su correspondiente planta de tratamiento, donde se clasificará según el tipo. Una vez clasificado, pasará por procesos químicos para que las <strong>fibras del papel</strong> se separen, y se quiten todos los materiales que no sean papel. 
          </p>
        
      <p>
      Luego se centrifuga y se <strong>eliminan las tintas</strong> sobrantes, para posteriormente lavarse de nuevo por si quedaran materiales ajenos a este. Finalmente se blanquea. Tras esto, el papel recuperado se usa para hacer de nuevo papel, cajas de cartón, periódicos, revistas… 
      </p>
        </div>
      </div>
    </div>
  );
}
