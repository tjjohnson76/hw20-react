import { Link } from "react-router-dom"

export default function HomePage(props){

  return (
    <>
      { props.items.map( item => (
        <div key={item.id}>
          <Link path={`/item/${item.id}`}><h3>{ item.title }</h3></Link>

        </div>
      ))}
    </>
  )
}