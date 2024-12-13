import { Route, Routes } from 'react-router'
import AddForm from './Components/AddForm/AddForm'
import ViewData from './Components/ViewData/ViewData'
import EditForm from './Components/EditForm/EditForm'
import Header from './Components/Header/Header'
import DeleteData from './Components/DeleteData/DeleteData'
// import './App.css'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<AddForm />} />
        <Route path="/view" element={<ViewData />} />
        <Route path="/edit" element={<EditForm />} />
        <Route path="/delete" element={<DeleteData />} />
      </Routes>
    </>
  )
}

export default App
