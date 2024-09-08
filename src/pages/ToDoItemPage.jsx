import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ToDoItemForm } from "../components"


export default function ToDoItemPage(props){

  const params = useParams()
  const [ currentItem, setCurrentItem ] = useState()

  function lookupItem(){
    if( params.id != "0" ){
      const foundItem = props.items.find( item => item.id == params.id )
      if( foundItem ){
        setCurrentItem(foundItem)
      }
    }
  }

  useEffect(() => {
    lookupItem()
  },[params])

  if( params.id != "0" && !currentItem ) return <></>
  return (
    <>
      { params.id == "0" ? (
        <ToDoItemForm setItems={props.setItems} />
      ):(
        <div>
          <h1>{currentItem.title}</h1>
          <p>{currentItem.description}</p>
        </div>
      )}
    </>
  )
}