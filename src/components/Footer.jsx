
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";



export default function Footer() {
    

    return(
        <footer className="container-fluid" style={{position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "#2e2e2e"}}>
            <div className="row">
                <div className="col-4" />
                <div className="col-1" style={{margin: '20px'}}>
                    <a href="https://github.com/tjjohnson76">
                        <VscGithubAlt size={42}/>
                    </a>
                </div>

                <div className="col-1" style={{margin: '20px'}}>
                <a href="https://www.linkedin.com/in/tanner-j-johnson/">
                        <AiOutlineLinkedin size={42}/>
                    </a>
                </div>
                
                <div className="col-1" style={{margin: '20px'}}>
                <a href="https://stackoverflow.com/">
                        <FaStackOverflow size={42}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}