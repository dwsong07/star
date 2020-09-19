import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidebar from "Sidebar";
import Main from "Main";
import Sun from "Sun";

import styles from "App.module.css";

const App = () => {
    return (
        <div className={styles.App}>
            <Sidebar />
            <section className={styles.section}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/sun" exact component={Sun} />
                    </Switch>
                </BrowserRouter>
            </section>
        </div>
    );
};

export default App;
