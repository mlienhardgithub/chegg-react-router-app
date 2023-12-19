import React, { useEffect, useState } from "react";
//import { useRouteMatch } from "react-router-dom";

import Card from "./Card";

import { fetchUsersWithPosts } from "../api";
import ErrorMessage from "../common/ErrorMessage";

export const CardList = () => {
  //console.log('routeMatchOutput', useRouteMatch());
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(undefined);
  console.log('users', users);

  useEffect(() => {
    const abortController = new AbortController();

    fetchUsersWithPosts(abortController.signal).then(setUsers).catch(setError);

    return () => abortController.abort();
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const list = users.map((user) => <Card key={user.id} user={user} />);

  return (
    <main className="container">
      <section className="row">{list}</section>
    </main>
  );
};

export default CardList;
