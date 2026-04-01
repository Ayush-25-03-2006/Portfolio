import "./Skills.css";
import certificate1 from "../Certificates/Programming in Java Nptel Ayush.pdf";
import certificate2 from "../Certificates/internship.pdf";
function Skills() {
    const skillData = [
        { name: "Java", level: 90 },
        { name: "React", level: 70 },
        { name: "Spring Boot", level: 60 },
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 65 },
        { name: "MySQL", level: 60 },
        { name: "C", level: 90 },
        { name: "Data Structure", level: 70 },
        { name: "C++", level: 70 },
    ];

    return (
        <div className="skills-section">
            <h2 className="heading">My Skills</h2>
            {skillData.map((skill) => (
                <div key={skill.name} className="skill">
                    <span className="skill-name">{skill.name}</span>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            style={{ width: `${skill.level}%` }}
                        >
                            {skill.level}%
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <h3 className="heading">Skills Description</h3>
                <ul className="skills-description">
                    <li>
                        <strong>Java:</strong> Proficient in Java programming with experience
                        in building backend applications using Spring Boot also having Good Concept Of Dsa Through Java.
                    </li>
                    <li>
                        <strong>React:</strong> Skilled in creating dynamic and responsive
                        user interfaces using React.js.
                    </li>
                    <li>
                        <strong>Spring Boot:</strong> Experienced in developing RESTful APIs
                        and microservices with Spring Boot framework.
                    </li>

                    <li>
                        <strong>HTML & CSS:</strong> Strong understanding of web design
                        principles and ability to create visually appealing web pages.
                    </li>
                    <li>
                        <strong>JavaScript:</strong> Knowledgeable in JavaScript for
                        enhancing web interactivity and functionality.
                    </li>
                    <li>
                        <strong>MySQL:</strong> Familiar with database design and
                        management using MySQL.
                    </li>
                    <li>
                        <strong>C & C++:</strong> Solid foundation in programming concepts
                        using C and C++ languages.
                    </li>
                    <li>
                        <strong>Data Structures:</strong> Understanding of fundamental data
                        structures and algorithms for efficient problem-solving.
                    </li>
                </ul>
            </div>
            <div className="certification">
                <h3 className="heading">Java Certification</h3>
                <iframe
                    src={certificate1}
                    width="100%"
                    height="650px"
                    title="Java Certification"
                ></iframe>
            </div>
            <div className="certification">
                <h3 className="heading">Java Internship Certification</h3>

                <div className="pdf-container">
                    <div className="pdf-item">

                        <iframe
                            src={certificate2}
                            width="100%"
                            height="700px"
                            title="Java Internship Certification"
                        ></iframe>
                    </div>  
                </div>
            </div>

        </div>
    );
}

export default Skills;
