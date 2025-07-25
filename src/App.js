import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Container from "./components/body/Container";
import Section from "./components/body/Section";
import Footer from "./components/Footer";

function App() {
  const navItems = [
    {
      label: "home",
      link: "/home",
      className: "bg-blue-400 rounded-md p-4",
      id: "1",
    },
    { label: "about", link: "/about", id: "13" },
    { label: "contact", link: "/contact", id: "123" },
  ];

  const mySkillsCards = [
    {
      id: "31231",
      title: "HTML",
      titleColor: "text-white",
      subTitle: "Structure & Semantics",
      bgColor: "bg-[#e74c3c]",
      subTitleColor: "text-white",
    },
    {
      id: "312",
      title: "CSS",
      titleColor: "text-white",
      subTitle: "Structure & Semantics",
      bgColor: "bg-[#3498db]",
      subTitleColor: "text-white",
    },
    {
      id: "213",
      title: "JAvaScript",
      titleColor: "text-white",
      subTitle: "Structure & Semantics",
      bgColor: "bg-[#f39c12]",
      subTitleColor: "text-white",
    },
  ];

  const RecentProjectCards = [
    {
      id: "31231",
      title: "E-Commerce Sitev",
      titleColor: "text-red-800",
      subTitle: "Structure & Semantics",
      bgColor: "bg-[#f8f9fa]",
      subTitleColor: "text-black",
    },
    {
      id: "312",
      title: "Landing Page",
      titleColor: "text-blue-800",
      subTitle: "Structure & Semantics",
      bgColor: "bg-[#f8f9fa]",
      subTitleColor: "text-black",
    },
  ];

  return (
    <div className="">
      <Header name={"ahmed"} title={"web"} />
      <NavBar navItems={navItems} />
      <Container>
        <Section
          title={"Welcome to My Portfolio"}
          subTitle={
            "I create beautiful and functional websites using modern technologies"
          }
          bgColor={`bg-gradient-to-br
         from-[#667eea]
         to-[#764ca3]`}
        />
        <Section
          title={"My Skills"}
          bgColor={"bg-slate-500"}
          cards={mySkillsCards}
        />
        <Section
          title={"Recent Projects"}
          bgColor={"bg-slate-500"}
          cards={RecentProjectCards}
        />
        <Section
          title={"Get In Touch"}
          bgColor={"bg-[#2c3e50]"}
          subTitle={"Email: john.doe@email.com"}
          subTitle2={"Phone: +1 (555) 123-4567"}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
