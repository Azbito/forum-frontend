import { getUserData } from "@/services/get-user-data";
import React from "react";

export default function UserPage({ username, data }: any) {
  if (!username) {
    return <div>Error: No username provided</div>;
  }

  console.log(data.userData);

  return <div></div>;
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { username } = params;

  let userData = null;

  if (username) {
    userData = await getUserData(username);
  }

  return {
    props: {
      username,
      data: {
        userData,
      },
    },
  };
}
