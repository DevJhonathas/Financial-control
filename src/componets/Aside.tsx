import { NavLink } from "react-router-dom"

const Aside = () => {
  return (
    <aside>
      <div className="container_aside">
        <div className="logo_group">
          <p className="logo"></p>
          <div className="burguer_button">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>

        <div className="pages_group">
          <ul className="ul_page_title">
            <li><NavLink to="/">My Wallet</NavLink></li>
            <li><NavLink to="/analytics">My Analytics</NavLink></li>
            <li><NavLink to="/reports">Reports</NavLink></li>
            <li><NavLink to="/settings">Settings</NavLink></li>
            <li><NavLink to="/trash">Trash</NavLink></li>
          </ul>
        </div>

        <div className="user_name_aside">
          <p className="user_name_in_aside">Johnny S.</p>
        </div>
      </div>
    </aside>
  )
}

export default Aside
