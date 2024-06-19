import Image from "next/image";
import { Feather } from "react-feather";
import { Button } from "../Button";
import styles from "@/styles/ProfileCard.module.scss";

interface ProfileProps {
  profile_picture?: string;
  name: string;
  username: string;
  url: string;
}

export function ProfileCard({
  profile_picture,
  name,
  username,
  url,
}: ProfileProps) {
  return (
    <div className={styles.profileCardContainer}>
      <div className={styles.profileContent}>
        <Image
          className={styles.image}
          src={profile_picture ?? "/unk.jpeg"}
          alt="profile picture"
          width={100}
          height={100}
        />
        <b className={styles.name}>{name}</b>
        <p>{username}</p>
        <Button
          color="default"
          onClick={() => {
            url;
          }}
        >
          See profile
        </Button>
      </div>
    </div>
  );
}
