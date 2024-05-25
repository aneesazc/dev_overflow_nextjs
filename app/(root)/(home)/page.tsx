import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" signInUrl="/sign-in" />
    </div>
  );
};

export default Home;
