import styles from './circle.module.scss';

interface CirculoProps {
  imageSrc: string;
  altText?: string;
}

export function Circulo({ imageSrc, altText = "Circulo" }: CirculoProps) {
  return (
    <div className={styles.circle}>
      <a href="/" className={styles.circle}>
        <img src={imageSrc} alt={altText} className={styles.logo} /></a>
    </div>
  );
}