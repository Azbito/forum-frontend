import styles from "@/styles/Home.module.scss";
import { InputSearch } from "@/components/InputSearch";
import { ChangeEvent, useState } from "react";
import { CardLogin } from "@/components/CardLogin";
import { PublishArea } from "@/components/PublishArea";
import { Postage } from "@/components/Postage";
import { AuthenticateProps, authenticateUser } from "@/services/auth";
import { useCredentials } from "@/hooks/useCredentials";

export default function Home() {
  const [search, setSearch] = useState("");
  const { credentials, handleInputChange, handleLogin } = useCredentials();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.inputSearchContainer}>
          <InputSearch
            id="nameInput"
            label="Look for users"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className={styles.cardLoginContainer}>
          <CardLogin
            username={credentials.username}
            password={credentials.password}
            onInputChange={handleInputChange}
            onLogin={() => {
              handleLogin(authenticateUser);
            }}
          />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <PublishArea onClick={() => {}} onChange={() => {}} value={search} />
        <Postage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLThmJpyBt2rdhYZnABNKLx0_No9AKEyDB5A&s"
          alt=""
          name="user"
          description="description"
        />
      </div>
    </div>
  );
}
