import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from './Common';
import Section2 from './Section2';
import web from "C:/Users/admin/Desktop/Projects/FirstWebsite/web/src/Images/johnny_automatic_music_group.svg";

const Home = () => {
    return (
        <>
            <Common name="Level Up your Talent with" imgsrc={web} visit="/service" btname="Get Started"/>
            <Section2/>
        </>
    );
};

export default Home;