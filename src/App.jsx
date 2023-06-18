import Landing from "./Pages/Landing/Landing"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Pages/Register/Register';
import Error from './Pages/Error/ErrorPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Profile, AllJobs, AddJob, SharedLayout, Stats, ProtectedRoute } from './Pages/Dashboard/Index'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute> <SharedLayout /> </ProtectedRoute>} >
        <Route index element={<Stats />} />
        <Route path='/all-jobs' element={<AllJobs />} />
        <Route path='/add-job' element={<AddJob />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center'/>
    </BrowserRouter>
  )
}

export default App
