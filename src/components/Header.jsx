import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header(props) {

  const menu = [
    { id: 1, label: "About Me", href: "/aboutme" },
    { id: 2, label: "Portfolio", href: "/portfolio"},
    { id: 3, label: "Contact", href: "/contact"},
    { id: 4, label: "Resume", href: "/resume"},
  ]



  return (
    <header className="container-fluid" style={{backgroundColor: "#2e2e2e", marginBottom: "20px"}}>
      <div className="row">
        <div className="col-4" style={{margin: "20px"}}>
          <h1>Tanner Johnson</h1>
        </div>
        <div className="col-4"></div>
        <div className="col-3" style={{margin: "20px"}}>
          <ul className="nav">
            {menu.map(item => (
              <li className="nav-item" key={item.id}>
                <Link className="nav-link" style={{color: "#fff"}} to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}