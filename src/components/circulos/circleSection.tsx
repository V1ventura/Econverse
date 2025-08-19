import styles from './circleSection.module.scss';
import { Circulo } from './circle';

export function CirculosSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Navegue por marcas</h1>
      <div className={styles.circlesWrapper}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Circulo
            key={i}
            imageSrc="/imagens/Logocirculo.png"
            altText={`Logo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}