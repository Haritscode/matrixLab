import { useState } from 'react';
import styles from './styles/App.module.css';
import SideBar from './components/sidebar/SideBar';
import Main from './components/Main';
function App() {
  const [ActiveTab,setActiveTab]=useState('Token Address');
  return (
    <>
      <div className={styles.App}>
            <SideBar ActiveTab={ActiveTab} setActiveTab={setActiveTab}/>
            <Main ActiveTab={ActiveTab} />
            <div className={styles.footerBottom}>
            </div>
      </div>
    </>
  )
}

export default App
