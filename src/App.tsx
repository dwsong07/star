import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidebar from "Sidebar";
import Main from "Main";
import Sun from "Sun";

import styles from "App.module.css";

const App = () => {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Sidebar />
                <section className={styles.section}>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/sun" exact component={Sun} />
                    </Switch>
                </section>
            </BrowserRouter>
        </div>
    );
};

export default App;
