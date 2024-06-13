import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { InputSearch } from "@/components/InputSearch";
import { ChangeEvent, useState } from "react";
import { CardLogin } from "@/components/CardLogin";
import { PublishArea } from "@/components/PublishArea";

export default function Home() {
  const [search, setSearch] = useState("");

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
          <CardLogin />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <PublishArea onClick={() => {}} onChange={() => {}} value={search} />
      </div>
    </div>
  );
}
