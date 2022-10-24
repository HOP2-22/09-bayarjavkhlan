import Header from "./Header"
import {BrowserRouter , Routes , Route} from "react-router-dom"

const Web = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}/> 
          </Routes>
        </BrowserRouter>
    )
}

export default Web
