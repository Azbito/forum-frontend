import { InputHTMLAttributes, ReactNode } from "react";
import { Search } from "react-feather";
import styles from "@/styles/InputSearch.module.scss";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

export function InputSearch({
  label,
  id,
  onChange,
  value,
  ...rest
}: InputSearchProps) {
  return (
    <div className={styles.container}>
      <input
        className={styles.inputSearchContainer}
        id={id}
        onChange={onChange}
        value={value}
        {...rest}
      />
      <Search size={12} className={styles.icon} />
      {!value && (
        <div className={styles.searchContainer}>
          <label className={styles.searchLabel} htmlFor={id}>
            {label}
          </label>
        </div>
      )}
    </div>
  );
}
