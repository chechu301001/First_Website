import React from 'react';
import Common from './Common';
import web from "C:/Users/admin/Desktop/Projects/FirstWebsite/web/src/Images/Synthwave-backgroundish.svg";



const About = () => {
    return (
        <>
            <Common name="Welcome to About Page" imgsrc={web} visit="/contact" btname="Contact Now"/>
        </>
    );
};

export default About;