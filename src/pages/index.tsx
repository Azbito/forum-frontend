import { ChangeEvent, useState } from "react";
import styles from "@/styles/Home.module.scss";
import { InputSearch } from "@/components/InputSearch";
import { CardLogin } from "@/components/CardLogin";
import { PublishArea } from "@/components/PublishArea";
import { useAuth } from "@/contexts/authContext";
import { makePost } from "@/services/make-post";
import { ProfileCard } from "@/components/ProfileCard";
import { getCurrentUser } from "@/services/get-current-user";
import { parseCookies } from "nookies";
import { getAllPosts } from "@/services/get-all-posts";
import { Postage } from "@/components/Postage";

export default function Home({ data }: any) {
  const { login } = useAuth();
  const [search, setSearch] = useState("");
  const [postDetails, setPostDetails] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<any>({
    username: "",
    password: "",
  });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlePostChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostDetails(event.target.value);
  };

  const handlePostSubmit = async () => {
    if (postDetails) {
      try {
        setIsButtonDisabled(true);
        await makePost(postDetails);
        setPostDetails("");

        setTimeout(() => {
          setIsButtonDisabled(false);
        }, 15 * 1000); // 15 seconds in milliseconds
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(data.postsData);
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
          {!data.currentUser ? (
            <CardLogin
              onLogin={() => {
                login(credentials);
              }}
              onUsernameChange={(e) =>
                setCredentials((prevState: any) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
              onPasswordChange={(e) =>
                setCredentials((prevState: any) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          ) : (
            <ProfileCard
              name={data.currentUser.name}
              post_amount=""
              url={data.currentUser.profile_picture}
              username={data.currentUser.username}
            />
          )}
        </div>
      </div>
      <div className={styles.rightColumn}>
        <PublishArea
          onClick={handlePostSubmit}
          onChangeTextArea={handlePostChange}
          value={postDetails}
          disabled={isButtonDisabled}
        />
        {data.postsData.map((item: any) => (
          <Postage
            key={item.id}
            src={item?.user.profile_picture}
            alt="user profile picture"
            name={item?.user.name}
            username={item?.user.username}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const cookies = parseCookies(context);
  let currentUser = null;
  let postsData = [];

  if (cookies.ticket) {
    currentUser = await getCurrentUser(cookies.ticket);
  }

  try {
    const responseData = await getAllPosts();
    postsData = responseData.posts || [];
  } catch (error) {
    console.error("Error fetching posts: ", error);
  }

  return { props: { data: { currentUser, postsData } } };
}
