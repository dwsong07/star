import React from "react";
import styles from "App.module.css";
import Sidebar from "Sidebar";

const App = () => {
    return (
        <div className={styles.App}>
            <Sidebar />
            <h1>Hello!</h1>
        </div>
    );
};

export default App;
