import { ChangeEvent, useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";
import { InputSearch } from "@/components/InputSearch";
import { CardLogin } from "@/components/CardLogin";
import { PublishArea } from "@/components/PublishArea";
import { Postage } from "@/components/Postage";
import { authenticateUser } from "@/services/auth";
import { useCredentials } from "@/hooks/useCredentials";
import { makePost } from "@/services/make-post";
import { getAllPosts } from "@/services/get-all-posts";

export default function Home() {
  const [search, setSearch] = useState("");
  const [postDetails, setPostDetails] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { credentials, handleInputChange, handleLogin } = useCredentials();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlePostChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostDetails(event.target.value);
  };

  const fetchPosts = async () => {
    try {
      const postsData = await getAllPosts();
      setPosts(postsData.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostSubmit = async () => {
    if (postDetails) {
      try {
        setIsButtonDisabled(true);
        await makePost(postDetails);
        setPostDetails("");
        fetchPosts();

        setTimeout(() => {
          setIsButtonDisabled(false);
        }, 15 * 1000); // 15 seconds in milliseconds
      } catch (error) {
        console.log(error);
      }
    }
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
            onLogin={() => handleLogin(authenticateUser)}
          />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <PublishArea
          onClick={handlePostSubmit}
          onChangeTextArea={handlePostChange}
          value={postDetails}
          disabled={isButtonDisabled}
        />
        {posts.map((item) => (
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
