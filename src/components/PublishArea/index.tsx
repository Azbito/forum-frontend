import { ChangeEventHandler } from "react";
import { Button } from "../Button";
import styles from "@/styles/PublishArea.module.scss";

interface PublishAreaProps {
  onClick: () => void;
  onChange: ChangeEventHandler;
  value: string | readonly string[] | number | undefined;
}
export function PublishArea({ onClick, onChange, value }: PublishAreaProps) {
  return (
    <div className={styles.textAreaContainer}>
      <div className={styles.textAreaWrapper}>
        <textarea onChange={onChange} value={value} />
        <div className={styles.buttonContainer}>
          <Button onClick={onClick} icon="feather" />
        </div>
      </div>
    </div>
  );
}
