import { useEffect, useState } from 'react'
import { Header, Footer } from "./components"
import { AboutMe, Portfolio, Contact, Resume } from './pages'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


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

 




  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/aboutme' element={<AboutMe />} /> 
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route exact path='/' element={<Navigate to='/aboutme' />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

