import Nav from "@components/Nav";
import "@styles/globals.css";
import React from "react";

export const metadata = {
  title: "Tutopia",
  description: "Tutopia share and discover tutorials",
};

const RootLayout = ({ children }: { children: any }) => {
  return (
    <html lang="pt-br">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
