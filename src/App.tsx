//ReactRouter Dom
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

//Assets

//Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import PageNotFound from "./pages/NotFound/PageNotFound";
import TrashPage from "./pages/Trash/TrashPage";
import Reports from "./pages/Reports/Reports";
import Analytics from "./pages/Analytics/Analytics";
import UserSettings from "./pages/UserSettings/UserSettings";

//Components
import Aside from "./componets/Aside";

const App = () => {
  return (
    <>       
      <Router>
        <Aside/> 
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/analytics" element={<Analytics/>}></Route>
          <Route path="/reports" element={<Reports/>}></Route>
          <Route path="/settings" element={<UserSettings/>}></Route>
          <Route path="/trash" element={<TrashPage/>}></Route>
          <Route path="/error" element={<PageNotFound/>}></Route>
          <Route path="*" element={<Navigate to="/error" />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
