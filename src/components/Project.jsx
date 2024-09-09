import { useState } from "react"
import { Link } from "react-router-dom";
import { VscGithubAlt } from "react-icons/vsc";


export default function Project(props) {

    const [userHover, setUserHover] = useState(false);


    return (
        <div style={{
            backgroundImage: `url(${props.projectInfo.picture.terminalPic})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            width: "300px",
            height: "200px"
        }}
            onMouseEnter={() => setUserHover(true)}
            onMouseLeave={() => setUserHover(false)}
        >
            {userHover === true &&
                <div style={{ padding: "10px" }}>
                    <Link style={{ textDecoration: "none", color: "white" }} to={props.projectInfo.liveUrl} target="_blank" download>
                        <h3 style={{ backgroundColor: "#36454F", paddingLeft: "10px" }}>{props.projectInfo.title}</h3>
                    </Link>
                    <a href={props.projectInfo.gitUrl} style={{ color: "white" }}>
                        <h4>Github:
                            <VscGithubAlt size={42} />

                        </h4>
                    </a>
                    <p style={{ backgroundColor: "#36454F", paddingLeft: "10px" }}>{props.projectInfo.tech}</p>
                </div>
            }



        </div>

    )
}