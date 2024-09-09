import { Link } from "react-router-dom"


export default function Resume() {


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2"></div>

                <div className="col-8">
                    <div className="row">
                        <h2>Resume</h2>
                    </div>
                    <div className="row">
                        <h5>Download my <Link style={{textDecoration: "none"}} to="/Tanner_Johnson_May2024.pdf" target="_blank" download>resume</Link></h5>
                    </div>
                    <div className="row">
                        <h5>Front-End Proficiences</h5>
                        <ul style={{paddingLeft: "50px"}}>
                            <li>
                                <p>Prof 1</p>
                            </li>
                            <li>
                                <p>Prof 2</p>
                            </li>
                            <li>
                                <p>Prof 3</p>
                            </li>
                            <li>
                                <p>Prof 4</p>
                            </li>
                            <li>
                                <p>Prof 5</p>
                            </li>
                            <li>
                                <p>Prof 6</p>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <h5>Back-End Proficiences</h5>
                        <ul style={{paddingLeft: "50px"}}>
                            <li>
                                <p>Prof 1</p>
                            </li>
                            <li>
                                <p>Prof 2</p>
                            </li>
                            <li>
                                <p>Prof 3</p>
                            </li>
                            <li>
                                <p>Prof 4</p>
                            </li>
                            <li>
                                <p>Prof 5</p>
                            </li>
                            <li>
                                <p>Prof 6</p>
                            </li>
                        </ul>
                    </div>

                </div>
    
                <div className="col-2"></div>
            </div>
        </div>
    )
}