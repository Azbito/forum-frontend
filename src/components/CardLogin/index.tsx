import React from "react";
import styles from "@/styles/CardLogin.module.scss";
import { Input } from "../Input";
import { Button } from "../Button";
import { ChangeEvent } from "react";

interface CardLoginProps {
  onUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLogin: () => void;
}

export const CardLogin: React.FC<CardLoginProps> = ({
  onUsernameChange,
  onPasswordChange,
  onLogin,
}) => {
  return (
    <div className={styles.container}>
      <Input
        label="Username or email"
        name="username"
        onChange={onUsernameChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        onChange={onPasswordChange}
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
};
