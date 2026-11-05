import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import DeleteStudent from "./DeleteStudent";
import Form from "./Form";
import Students from "./Students";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to="/add">Add Student</Link> |{" "}
    <Link to="/students">Student list</Link> |{" "}

    <Routes>
       <Route path="/add" element={<Form />} />
        <Route path="/students" element={<Students/>} />
        <Route path="/delete/:id" element={<DeleteStudent />} />
    </Routes>
      
    </>
  )
}

export default App
