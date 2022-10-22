import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./reusable_components/Search_bar";
import UserListElement from "./user-list-element";

function UsersList() {
  // Used to set states for our clubsFeed variable
  const [usersList, setUsersList] = useState([]);

  const submitFunction = (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    axios
      .get("http://localhost:5000/search/users", {
        params: {
          username: username,
        },
      })
      .then((res) => {
        setUsersList(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    //in some user stories might fetch friends automatically
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <SearchBar
        submitFunction={submitFunction}
        placeholder={"Search users by their names"}
      />

      {usersList.map((item) => {
        return <UserListElement username={item.username} role={item.role} />;
      })}
    </div>
  );
}

export default UsersList;
