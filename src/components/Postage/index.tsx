import styles from "@/styles/Postage.module.scss";

interface PostageProps {
  src: string;
  alt: string;
  name: string;
  description: string;
}

export function Postage({ src, alt, name, description }: PostageProps) {
  return (
    <div className={styles.postageContainer}>
      <div className={styles.postageHeader}>
        <b>{name}</b>
      </div>
      <img src={src} alt={alt} />
      <p>{description}</p>
    </div>
  );
}
