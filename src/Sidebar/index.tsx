import React from "react";
import styles from "Sidebar/index.module.css";
import { FaHome, FaSun, FaMoon, FaCloudSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={styles.Sidebar}>
            <div>
                <Link to="/">
                    <FaHome />
                </Link>
            </div>
            <div>
                <Link to="/sun">
                    <FaSun />
                </Link>
            </div>
            <div>
                <Link to="/moon">
                    <FaMoon />
                </Link>
            </div>
            <div>
                <Link to="/weather">
                    <FaCloudSun />
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
