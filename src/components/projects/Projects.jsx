import ProjectCard from "components/projects/ProjectCard"

import { FaShoppingCart, FaLaptopCode } from 'react-icons/fa';
import { MdPhoneAndroid } from 'react-icons/md';

import "./projects.scss"

function Projects() {
    const iconSize = 30
    const data = [
        {
            id: 1,
            reverse: false,
            icon: <FaLaptopCode size={iconSize} color="white"/>,
            title: "IChEC ITB (2019)",
            desc: "Worked in a group of five people developing a competition-related website. Implemented user interface based on the design given using HTML, CSS (using Bulma framework), and JS",
        },
        {
            id: 2,
            reverse: false,
            icon: <FaShoppingCart size={iconSize} color="white"/>,
            title: "ProperteeOne (2020)",
            desc: "Fixing bugs mainly related to PayPal API and testing various features before website's launch, based on PHP using Laravel.",
        },
        {
            id: 3,
            reverse: false,
            icon: <MdPhoneAndroid size={iconSize} color="white"/>,
            title: "Qash Point of Sales System (2020)",
            desc: "Developed an android application for cashier of a restaurants. Implemented with Typescript using React Native framework.",
        },
    ];

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="wrapper">
                {data.map((e) =>(
                    <ProjectCard isReverse={e.reverse} logo={e.icon} title={e.title} description={e.desc}/>
                ))}
            </div>
        </div>
    )
}

export default Projects
