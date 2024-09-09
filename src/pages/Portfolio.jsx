import { Project } from "../components"
import terminalPic from "/terminalPic.jpg"



export default function Portfolio() {

    const projectArray = [
        {id:1, liveUrl:"https://www.google.com/", gitUrl:"https://github.com/tjjohnson76", picture:{terminalPic}, title: "Title 1", tech: "MERN stack"},
        {id:2, liveUrl:"https://www.google.com/", gitUrl:"https://github.com/tjjohnson76", picture:{terminalPic}, title: "Title 2", tech: "MERN stack"},
        {id:3, liveUrl:"https://www.google.com/", gitUrl:"https://github.com/tjjohnson76", picture:{terminalPic}, title: "Title 3", tech: "MERN stack"},
        {id:4, liveUrl:"https://www.google.com/", gitUrl:"https://github.com/tjjohnson76", picture:{terminalPic}, title: "Title 4", tech: "MERN stack"},
        {id:5, liveUrl:"https://www.google.com/", gitUrl:"https://github.com/tjjohnson76", picture:{terminalPic}, title: "Title 5", tech: "MERN stack"},
        {id:6, liveUrl:"https://www.google.com/", gitUrl:"https://github.com/tjjohnson76", picture:{terminalPic}, title: "Title 6", tech: "MERN stack"}
    ]



    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2"></div>

                <div className="col-8">
                    <div className="row">
                        <h2>Portfolio</h2>
                    </div>
                    <div className="row" style={{marginBottom: "10px"}}>
                        <div className="col-6">
                        <Project projectInfo={projectArray[0]}/>

                        </div>
                        <div className="col-6">
                        <Project projectInfo={projectArray[1]}/>

                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "10px"}}>
                        <div className="col-6">
                        <Project projectInfo={projectArray[2]}/>

                        </div>
                        <div className="col-6">
                        <Project projectInfo={projectArray[3]}/>

                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "10px"}}>
                        <div className="col-6">
                        <Project projectInfo={projectArray[4]}/>

                        </div>
                        <div className="col-6">
                        <Project projectInfo={projectArray[5]}/>

                        </div>
                    </div>
                </div>

                <div className="col-2"></div>
            </div>
        </div>
    )
}