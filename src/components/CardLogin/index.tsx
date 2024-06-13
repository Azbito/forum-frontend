import styles from "@/styles/CardLogin.module.scss";
import { Input } from "../Input";
import { Button } from "../Button"; // Importing Color enum from Button component

export function CardLogin() {
  return (
    <div className={styles.container}>
      <Input label="Username or email" />
      <Input label="Password" />
      <Button color="buttonPost">Login</Button>
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
