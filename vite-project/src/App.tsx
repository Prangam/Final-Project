import { Route, Routes } from "react-router-dom"
import Start from "./pages/start"
import Home from "./pages/home"
import Introlecture1 from "./pages/introlecture/introlecture1"
import Introlecture2 from "./pages/introlecture/introlecture2"
import Introlecture3 from "./pages/introlecture/introlecture3"
import Introlecture4 from "./pages/introlecture/introlecture4"
import Course_2 from "./pages/courses/course_2"
import Course_3 from "./pages/courses/course_3"
import Course_1 from "./pages/courses/course_1"
import Course_4 from "./pages/courses/course_4"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home />} />
        <Route path='/course1' element={<Course_1/>} />
        <Route path='/course2' element={<Course_2/>} />
        <Route path='/course3' element={<Course_3/>} />
        <Route path='/course4' element={<Course_4/>} />
        <Route path='/introlecture1' element={<Introlecture1/>} />
        <Route path='/introlecture2' element={<Introlecture2/>} />
        <Route path='/introlecture3' element={<Introlecture3 />} />
        <Route path='/introlecture4' element={<Introlecture4 />} />
 
      </Routes>
    </>
  )
}

export default App