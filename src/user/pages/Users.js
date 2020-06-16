import React from "react";

import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://i.pinimg.com/originals/94/6e/82/946e829a135f68d7a041e3a83b445f55.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}
