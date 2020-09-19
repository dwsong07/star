import React from "react";
import styles from "Sidebar/index.module.css";
import { FaHome, FaSun, FaMoon, FaCloudSun } from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className={styles.Sidebar}>
            <div>
                <FaHome />
            </div>
            <div>
                <FaSun />
            </div>
            <div>
                <FaMoon />
            </div>
            <div>
                <FaCloudSun />
            </div>
        </aside>
    );
};

export default Sidebar;
