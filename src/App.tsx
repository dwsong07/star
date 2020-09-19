import React from "react";
import styles from "App.module.css";
import Sidebar from "Sidebar";
import Main from "Main";

const App = () => {
    return (
        <div className={styles.App}>
            <Sidebar />
            <Main />
        </div>
    );
};

export default App;
