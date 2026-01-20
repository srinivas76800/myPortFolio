import "./globals.css";
import Stairs from "./Components/Stairs";
import ProjectComponent from "./Context/ProjectsData";

export const metadata = {
  title: "vivek -portfolio",
  description: "full stack developer -portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Poetsen+One&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`antialiased bg-[#121212]`}
      >
        <ProjectComponent>
          <Stairs>{children}</Stairs>
        </ProjectComponent>
      </body>
    </html>
  );
}