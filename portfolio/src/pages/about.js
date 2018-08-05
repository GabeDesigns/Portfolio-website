import React, { Component } from "react";
import "../styles/about.css";


export class index extends Component {
    render() {
        return (
            <div>
                <fieldset className="box">
                    <legend className="header">About Me</legend>
                    <p>I've always been fascinated with computers and anything related to science. From a young age I began tinkering with computers, seeing how they work, and fixing them.
                    My passion grew more in highschool where I began to learn what programming was and how to code. C# was the first language I ever learned with
                    <span className="tech">Java , Javascript , HTML , CSS, Node.js , React.js</span><span className="highlight">( This website was made with it! )</span>.
                                From High School I worked a few IT related jobs, but my pasion is coding.
                                I hope to spread my passion for coding and lead a team of developers as a Lead Full Stack Web Dev.
                </p>
                </fieldset>
            </div>
        );
    }
}

export default index;