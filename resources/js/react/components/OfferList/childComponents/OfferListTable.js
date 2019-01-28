import React, { Component } from "react";
import OfferListTableRow from "./OfferListTableRow";

class OfferListTable extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <table className="table offerTable">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">
                            Title
                        </th>
                        <th scope="col" className="text-center">
                            Desc
                        </th>
                        <th scope="col" className="text-center">
                            Page URL
                        </th>
                        <th scope="col" className="text-center">
                            Img URL
                        </th>
                        <th scope="col" className="text-center">
                            Brand
                        </th>
                        <th scope="col" className="text-center">
                            Type
                        </th>
                        <th scope="col" className="text-center">
                            Price
                        </th>
                        <th scope="col" className="text-center">
                            Currency
                        </th>
                        <th scope="col" className="text-center">
                            Status
                        </th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.offers.map((offer, i) => {
                        return (
                            <OfferListTableRow
                                offer={offer}
                                key={i}
                                updateOffer={this.props.updateOffer}
                            />
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default OfferListTable;
