import Head from "next/head";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Head>
      <title>TopJobs</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/MainIcon.svg" />
    </Head>
  );
};

export default Header;