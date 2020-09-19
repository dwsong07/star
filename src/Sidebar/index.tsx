import React from "react";
import styles from "Sidebar/index.module.css";
import { FaHome, FaSun, FaMoon, FaCloudSun } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
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
        </div>
    );
};

export default Sidebar;
