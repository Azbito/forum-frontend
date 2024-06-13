import { InputHTMLAttributes, ReactNode } from "react";
import styles from "@/styles/Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

export function Input({ label, onChange, value, ...rest }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <input onChange={onChange} value={value} {...rest} />
    </div>
  );
}
