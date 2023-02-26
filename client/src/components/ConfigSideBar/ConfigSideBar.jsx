import { useState, useRef } from 'react';
import ModInquiries from '../Modals/ModInquiries';
import "./ConfigSideBar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Admin from '../Admin/Admin';

function ConfigSideBar({isConfigBarOpen, toggleConfigBar, toggleProfile, closeSideBar, openAdmin, toggleAdmin, isSidebarOpen, isProfileOpen}) {
    const [isEnglish, setIsEnglish] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const languageToggle = useRef(null);
    const themeToggle = useRef(null);

    function handleLanguageToggle() {
        setIsEnglish(!isEnglish);
        languageToggle.current.textContent = isEnglish ? 'Español' : 'English';
        languageToggle.current.classList.toggle('active', isEnglish);
    }

    function handleThemeToggle() {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
        themeToggle.current.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        themeToggle.current.classList.toggle('active', isDarkMode);
    }

    function signOff() {
        console.log("signing off");
        // code to sign off the user
    }

    function handleTitleClick() {
        toggleConfigBar();
    }

    function handleProfileClick(){
        toggleProfile();
        if(isSidebarOpen)closeSideBar();
        if(openAdmin)toggleAdmin();  
    }
    
    function handleAdmin(){
     console.log("put here the Admin component")
    }
  
    return (
        <div className={`Configsidebar ${isConfigBarOpen ? 'open' : 'closed'}`}>
            <button className="config-title" onClick={handleTitleClick}><i className="fa-solid fa-gear"></i>Settings</button>
            <button className="language-toggle" onClick={handleProfileClick}><i className="fa-solid fa-user"></i>Your Profile</button>
            <button ref={languageToggle} className="language-toggle" onClick={handleLanguageToggle}>
                {isEnglish ? 'English' : 'Español'}
            </button>
            <button ref={themeToggle} className="theme-toggle" onClick={handleThemeToggle}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <ModInquiries/>
            <button className='dashboard' onClick={handleAdmin}><DashboardIcon className='i'/>Dashboard</button>
            <button className="signoff-report-button" onClick={signOff}> <i className="fa-solid fa-right-from-bracket"></i>Sign out</button>
        </div>
    );
}

export default ConfigSideBar;
