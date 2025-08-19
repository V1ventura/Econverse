import Image from "next/image";
import styles from "./parceiro.module.scss";

interface PartnerCardProps { 
    image: string;
    title: string;
    description: string;
    buttonText: string;
}

export function Parceiro({
  image,
  title,
  description,
  buttonText,
}: PartnerCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </div>
  );
}