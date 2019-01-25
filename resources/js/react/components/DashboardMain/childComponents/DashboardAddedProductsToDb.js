import React, { Component } from "react";
import axios from "axios";
import _ from "underscore";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
const data = [
    { name: "2018-12", uv: 4000, pv: 2400, amt: 2400 },
    { name: "2018-12", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

class DashboardAddedProductsToDb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        let response;
        this.props.switchLoader(true);

        response = await axios.get(
            `${this.props.appPath}/api/getDailyAddedOffers`
        );

        console.log(response.data);
        this.setState({ data: response.data });

        this.props.switchLoader(false);
    }

    render() {
        return (
            <div className="DashboardAddedProductsToDb">
                <p className="section-header">Added offers</p>
                <BarChart
                    width={600}
                    height={300}
                    data={this.state.data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="fly4freeUS" fill="#5666f7" />
                    <Bar dataKey="travelPiratesUS" fill="#2d3dce" />
                    <Bar dataKey="secretFlyingUS" fill="#000" />
                </BarChart>
            </div>
        );
    }
}

export default DashboardAddedProductsToDb;
