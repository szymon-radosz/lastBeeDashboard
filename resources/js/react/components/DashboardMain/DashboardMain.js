import React, { Component } from "react";
import DashboardAddedProductsToDb from "./childComponents/DashboardAddedProductsToDb";

class DashboardMain extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <DashboardAddedProductsToDb
                    switchLoader={this.props.switchLoader}
                    showAlertSuccess={this.props.showAlertSuccess}
                    showAlertWarning={this.props.showAlertWarning}
                    appPath={this.props.appPath}
                />
            </div>
        );
    }
}

export default DashboardMain;
