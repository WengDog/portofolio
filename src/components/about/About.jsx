import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosHeart, IoIosSchool, IoIosPaper, IoMdTrophy } from "react-icons/io"


import "./about.scss"


function About() {

    const [ index, setIndex ] = useState(0)

    const data = [
        {
            header: "Education",
            items: [
                {
                    title: "University",
                    desc: "Informatics Engineering student at Bandung Institute of Technology",
                },
                {
                    title: "High School",
                    desc: "SMAN 28 Jakarta",
                },
                {
                    title: "Junior High School",
                    desc: "SMPN 85 Jakarta",
                },

            ]
        },
        {
            header: "Experience",
            items: [
                {
                    title: "Head Organizer of Arkavidia 5.0 Gala Dinner",
                    desc: "An annual IT Festival that held by Informatics Engineering department of Bandung Institute of Technology",
                },
                {
                    title: "Vice Head of HMIF ITB Club Division",
                    desc: "Managing department consisting of 9 clubs for developing students skills and interests.",
                },
                {
                    title: "Assistant of Graphics and Artificial Intelligence Laboratory ITB",
                    desc: "Provide supplementary course material for graphics and artificial intelligence based courses.",
                },

            ]
        },
        {
            header: "Achievement",
            items: [
                {
                    title: "Bronze Medal The 5th International Islamic School Robot Olympiad, Lombok",
                    desc: "3rd place in Robot Theatre Senior Category. Program a series of indonesian traditional dance movement for the robot.",
                },

            ]
        },
        {
            header: "Hobbies and Interest",
            items: [
                {
                    title: "Sports",
                    desc: "I love football/futsal. I've been active in football since I was in elementary school and curently active in HMIF futsal club",
                },
                {
                    title: "Game",
                    desc: "love playing a lot of computer or console games, curently playing Genshin Impact",
                },
            ]
        },
    ];

    const Intro = () => {
        return (
            <div className="intro">
                <p>
                Hello, my name is <span>Muhammad Raihan Asyraf Desanto</span>. I'm a final year student majoring Informatics Engineering student at Bandung Institute of Technology.
                I'm passionate about Web Developments, especially coding and experimenting UI design. I'm also interested in machine learning and eager to learn more about natural language processing.
                </p>
            </div>
        )
    }

    const PointDesc = ({ data }) => {
        return (
            <div className="pointdesc-container">
                <h2>{data.header}</h2>
                {
                    data.items.map((e) =>(
                        <div className="point-wrapper">
                            <h3>{e.title}</h3>
                            <p>{e.desc}</p>
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div className="about" id="about">
            <h1>About me</h1>

            <div className="card">
                <div className="left"></div>
                <div className="right">
                    <div className="wrapper">
                        <div className="description">
                            {
                                index === -1
                                ? (<Intro />)
                                : (<PointDesc data={data[index]}/>)
                            }
                        </div>
                        <div className="sticky-menu">
                        <ul>
                            <li>
                                <div className={"icon " + (index === -1 && "active")} onClick={() => setIndex(-1)}>
                                    <CgProfile/>
                                </div>
                            </li>
                            <li>
                                <div className={"icon " + (index === 0 && "active")} onClick={() => setIndex(0)}>
                                    <IoIosSchool/>
                                </div>
                            </li>
                            <li>
                                <div className={"icon " + (index === 1 && "active")} onClick={() => setIndex(1)}>
                                    <IoIosPaper/>
                                </div>
                            </li>
                            <li>
                                <div className={"icon " + (index === 2 && "active")} onClick={() => setIndex(2)}>
                                    <IoMdTrophy/>
                                </div>
                            </li>
                            <li>
                                <div className={"icon " + (index === 3 && "active")} onClick={() => setIndex(3)}>
                                    <IoIosHeart/>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
