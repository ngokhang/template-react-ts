import Header from "../components/Header.tsx";
import React from "react";
import Footer from "../components/Footer.tsx";

interface Props {
    children: React.ReactNode;
}

const BaseLayout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Header />
        <main>
            {children}
        </main>
        <Footer/>
    </>
  );
}

export default BaseLayout;