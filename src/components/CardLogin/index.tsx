import styles from "@/styles/CardLogin.module.scss";
import { Input } from "../Input";
import { Button } from "../Button";
import { ChangeEvent } from "react";

interface CardLoginProps {
  username?: string;
  password?: string;
  onInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onLogin: () => void;
}

export function CardLogin({
  username,
  password,
  onInputChange,
  onLogin,
}: CardLoginProps) {
  return (
    <div className={styles.container}>
      <Input
        label="Username or email"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={onInputChange}
      />
      <Button color="buttonPost" onClick={onLogin}>
        Login
      </Button>
      <div className={styles.socialMedias}>
        <Button icon="google" onClick={() => alert("Work in progress")} />
        <Button icon="discord" onClick={() => alert("Work in progress")} />
        <Button icon="opera" onClick={() => alert("Work in progress")} />
      </div>
      <b onClick={() => alert("Work in progress")}>
        Don't you have an account yet?
      </b>
    </div>
  );
}
