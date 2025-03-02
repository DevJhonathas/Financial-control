//ReactRouter Dom
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

//Assets

//Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import PageNotFound from "./pages/NotFound/PageNotFound";
import TrashPage from "./pages/Trash/TrashPage";

const App = () => {
  return (
    <>        
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/error" element={<PageNotFound/>}></Route>
          <Route path="/trash" element={<TrashPage/>}></Route>
          <Route path="*" element={<Navigate to="/error" />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
