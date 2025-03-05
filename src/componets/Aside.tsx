import { NavLink } from "react-router-dom";
import styles from './aside.module.css';
import { useState } from "react";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleBurgerClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.currentTarget.classList.toggle(styles.change);
    toggleMenu(); 
  };

  return (
    <aside>
      {!isOpen ? (
        <div className={styles.container_aside}>
          <div className={styles.logo_group}>
            <p className={styles.logo}>Financial Control</p>
            <div className={styles.burguer_button} onClick={handleBurgerClick}>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
            </div>
          </div>

          <div className={styles.pages_group}>
            <ul className={styles.ul_page_title}>
              <li><NavLink to="/">My Wallet</NavLink></li>
              <li><NavLink to="/analytics">My Analytics</NavLink></li>
              <li><NavLink to="/reports">Reports</NavLink></li>
              <li><NavLink to="/settings">Settings</NavLink></li>
              <li><NavLink to="/trash">Trash</NavLink></li>
            </ul>
          </div>

          <div className={styles.user_name_aside}>
            <p className={styles.user_name_in_aside}>Johnny S.</p>
          </div>
        </div> 
      ) : (
        <div className={styles.change} onClick={handleBurgerClick}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      )}
    </aside>
  );
};

export default Aside;
