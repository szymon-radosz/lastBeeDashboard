import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DashboardMain from "./DashboardMain/DashboardMain";
import OfferListMain from "./OfferList/OfferListMain";
import loader from "./../../../images/loader.svg";

const appPath = "https://last-bee.com/";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alertSuccess: false,
            alertSuccessDescription: "",
            alertWarning: false,
            alertWarningDescription: "",
            loader: false
        };

        this.showAlertSuccess = this.showAlertSuccess.bind(this);
        this.showAlertWarning = this.showAlertWarning.bind(this);
        this.hideAlertSuccess = this.hideAlertSuccess.bind(this);
        this.hideAlertWarning = this.hideAlertWarning.bind(this);
        this.switchLoader = this.switchLoader.bind(this);
    }

    showAlertSuccess(info) {
        this.setState({
            alertSuccess: true,
            alertSuccessDescription: info
        });

        setTimeout(
            function() {
                this.setState({ alertSuccess: false });
            }.bind(this),
            4000
        );
    }

    showAlertWarning(info) {
        this.setState({
            alertWarning: true,
            alertWarningDescription: info
        });

        setTimeout(
            function() {
                this.setState({ alertWarning: false });
            }.bind(this),
            4000
        );
    }

    switchLoader(state) {
        return this.setState({
            loader: state
        });
    }

    hideAlertSuccess() {
        this.setState({
            alertSuccess: false
        });
    }

    hideAlertWarning() {
        this.setState({
            alertWarning: false
        });
    }

    render() {
        return (
            <Router>
                <div className="page-wrapper">
                    {this.state.loader && (
                        <div className="loaderContainer">
                            <div className="loader">
                                <img src={loader} />
                            </div>
                        </div>
                    )}

                    {this.state.alertSuccess && (
                        <div
                            className="alert alert-success alert-dismissible"
                            role="alert"
                        >
                            <a
                                href="#"
                                className="close"
                                onClick={this.hideAlertSuccess}
                            >
                                ×
                            </a>
                            <strong>
                                {this.state.alertSuccessDescription}
                            </strong>
                        </div>
                    )}

                    {this.state.alertWarning && (
                        <div
                            className="alert alert-danger alert-dismissible"
                            role="alert"
                        >
                            <a
                                href="#"
                                className="close"
                                onClick={this.hideAlertWarning}
                            >
                                ×
                            </a>
                            <strong>
                                {this.state.alertWarningDescription}
                            </strong>
                        </div>
                    )}

                    <aside className="menu-sidebar d-lg-block">
                        <div className="logo">
                            <Link to="/">LastBeeScrap</Link>
                        </div>
                        <div className="menu-sidebar__content js-scrollbar1">
                            <Sidebar appPath={appPath} />
                        </div>
                    </aside>

                    <div className="page-container">
                        <header className="header-desktop">
                            <div className="section__content section__content--p30">
                                <div className="container-fluid" />
                            </div>
                        </header>

                        <div className="main-content">
                            <div className="section__content section__content--p30">
                                <div className="container-fluid">
                                    <Route
                                        exact
                                        path="/"
                                        render={() => {
                                            return (
                                                <DashboardMain
                                                    appPath={appPath}
                                                    switchLoader={
                                                        this.switchLoader
                                                    }
                                                    showAlertSuccess={
                                                        this.showAlertSuccess
                                                    }
                                                    showAlertWarning={
                                                        this.showAlertWarning
                                                    }
                                                />
                                            );
                                        }}
                                    />
                                    <Route
                                        exact
                                        path="/offer-list"
                                        render={() => {
                                            return (
                                                <OfferListMain
                                                    appPath={appPath}
                                                    switchLoader={
                                                        this.switchLoader
                                                    }
                                                    showAlertSuccess={
                                                        this.showAlertSuccess
                                                    }
                                                    showAlertWarning={
                                                        this.showAlertWarning
                                                    }
                                                />
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;
