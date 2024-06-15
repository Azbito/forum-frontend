import styles from "@/styles/Postage.module.scss";
import Image from "next/image";

interface PostageProps {
  src: string;
  alt: string;
  name: string;
  username: string;
  description: string;
}

export function Postage({
  src,
  alt,
  name,
  username,
  description,
}: PostageProps) {
  return (
    <div className={styles.postageContainer}>
      <div className={styles.postageHeader}>
        <b>{name}</b> <i>( {username} )</i>
      </div>
      <Image src={src ?? "/unk.jpeg"} alt={alt} width={500} height={500} />
      <p>{description}</p>
    </div>
  );
}
