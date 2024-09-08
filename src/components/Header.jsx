import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header(props) {

  const menu = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Create To-Do Item", href: "/item/0" }
  ]



  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-4">
          <h1>To Do List</h1>
        </div>
        <div className="col-8">
          <ul className="nav">
            {menu.map(item => (
              <li className="nav-item" key={item.id}>
                <Link className="nav-link" to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}