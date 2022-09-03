import React from "react";
import Banner from "../Banner";
import NavBar from "../navbar/NavBar";
import Container from "./Container";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: Props) => {
  return (
    <div id="main-template">
      <Header />
      <div className="bg-white sticky top-0 z-50 shadow-sm">
        <Container>
          <NavBar />
        </Container>
      </div>
      <Banner />
      <div className="bg-[#F3F4F6]">
        <Container extraClass="py-8">{children}</Container>
      </div>
    </div>
  );
};

export default MainTemplate;
