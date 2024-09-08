import { useEffect, useState } from 'react'
import useLocalStorage from "./lib/hooks/useLocalStorage"
import { Header } from "./components"
import { HomePage, ToDoItemPage } from "./pages"

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const fakeItems = [

]

/*
  TO DO:
    - Import all the routing components. BrowserRouter, etc...
    - Inside the BrowserRouter but before the Routes component, add the Header component.
    - You'll need two routes:
      - A home page route which loads the HomePage component 
      - A ToDo item route which load the ToDoItem component. This route should have a wildcard for the id of the item.

    - Check the Header component for instructions 
    - Check the HomePage and ToDoItemPage for instructions
    - Check the useLocalStorage hook to see what it does 

  Things To Start With:
    - Create dummy data, put it into state 
    - Can we list all items?
    - Can we click on an item and go to the item page?
    - If we go to item page and the id = 0, do we see a form?
    - Can we use the form to add a new item 
    - Can we save the new array into local storage?

*/

export default function App() {

  const { getFromStorage, saveToStorage } = useLocalStorage()
  const [ allItems, setAllItems ] = useState([])

  // Let's make some dummy data 
  const starterItems = [
    { id: 1, title: "Item 1 Title", description: "This is all about item 1" }
  ]

  /*
    When the app mounts let's check and see if there's anything in local storage. If not,
    we'll add the dummy data. Whatever ends up being out starter items will also be put
    into state.
  */
  useEffect( () => {
    const foundItems = getFromStorage("todolist")
    if(!foundItems){
      setAllItems(starterItems)
    } else {
      setAllItems(foundItems)
    }
  },[])


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage items={allItems} />} />
        <Route path="/item/:id" element={<ToDoItemPage items={allItems} setItems={setAllItems} />} />
      </Routes>
    </BrowserRouter>
  )
}

