import { ButtonHTMLAttributes, ChangeEventHandler } from "react";
import { Button } from "../Button";
import styles from "@/styles/PublishArea.module.scss";

interface PublishAreaProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onChangeTextArea: ChangeEventHandler<any>;
}

export function PublishArea({
  onChangeTextArea,
  onClick,
  value,
  disabled,
  ...rest
}: PublishAreaProps) {
  return (
    <div className={styles.textAreaContainer}>
      <div className={styles.textAreaWrapper}>
        <textarea onChange={onChangeTextArea} value={value} />
        <div className={styles.buttonContainer}>
          <Button
            onClick={onClick}
            icon="feather"
            className={disabled ? styles.standby : styles.active}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}
