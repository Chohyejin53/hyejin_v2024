import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Stack from "./components/Stack";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Skip from "./components/Skip";
import Main from "./components/Main";

const App = () => {
    return <>
        {/* <Skip /> */}
        <Intro />
        <Header />
        <Main>
            <Stack />
            <Project />
            <Contact />
        </Main>
        <Footer />
    </>;
};

export default App;