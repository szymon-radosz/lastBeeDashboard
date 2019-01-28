import React, { Component } from "react";

class OfferListTableRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            page_url: "",
            img_url: "",
            brand: "",
            type: "",
            status: "",
            price: "",
            currency: "",
            id: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    componentDidMount() {
        this.setState({
            id: this.props.offer.id,
            title: this.props.offer.title,
            description: this.props.offer.description,
            page_url: this.props.offer.page_url,
            img_url: this.props.offer.img_url,
            brand: this.props.offer.brand,
            type: this.props.offer.type,
            status: this.props.offer.status,
            price: this.props.offer.price,
            currency: this.props.offer.currency
        });
    }

    render() {
        return (
            <tr className="OfferListTableRowTr">
                <td className="text-center">
                    <div className="form-group">
                        <textarea
                            className="OfferListTableRowTitle form-control"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>
                </td>
                <td className="text-center">
                    <div className="form-group">
                        <textarea
                            className="OfferListTableRowDesc form-control"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                </td>
                <td className="text-center">
                    <div className="form-group">
                        <input
                            name="page_url"
                            className="OfferListTableRowPageUrl form-control"
                            value={this.state.page_url}
                            onChange={this.handleChange}
                        />
                    </div>
                </td>
                <td className="text-center">
                    <div className="form-group">
                        <input
                            name="img_url"
                            className="OfferListTableRowImgUrl form-control"
                            value={this.state.img_url}
                            onChange={this.handleChange}
                        />
                    </div>
                </td>
                <td className="text-center">
                    <div className="form-group">
                        <input
                            name="brand"
                            className="OfferListTableRowBrand form-control"
                            value={this.state.brand}
                            onChange={this.handleChange}
                        />
                    </div>
                </td>
                <td className="text-center">
                    <div className="form-group">
                        <select
                            name="type"
                            className="OfferListTableRowType form-control"
                            value={this.state.type}
                            onChange={this.handleChange}
                        >
                            <option>{this.state.type}</option>
                            <option>Flights</option>
                            <option>Vacations</option>
                            <option>Accomodation</option>
                        </select>
                    </div>
                </td>
                <td className="text-center">
                    <div className="form-group">
                        <input
                            name="price"
                            className="OfferListTableRowBrand form-control"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </div>
                </td>
                <td className="text-center">
                    <div className="form-group ">
                        <select
                            name="currency"
                            className="form-control"
                            value={this.state.currency}
                            onChange={this.handleChange}
                        >
                            <option>{this.state.currency}</option>
                            <option>USD</option>
                            <option>GBP</option>
                        </select>
                    </div>
                </td>
                <td className="text-center">
                    <div className="form-group ">
                        <select
                            name="status"
                            className="form-control"
                            value={this.state.status}
                            onChange={this.handleChange}
                        >
                            <option>{this.state.status}</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                </td>
                <td className="text-center">
                    <div
                        className="btn blueBtn"
                        onClick={() =>
                            this.props.updateOffer(
                                this.state.id,
                                this.state.title,
                                this.state.description,
                                this.state.page_url,
                                this.state.img_url,
                                this.state.brand,
                                this.state.type,
                                this.state.status,
                                this.state.price,
                                this.state.currency
                            )
                        }
                    >
                        Save
                    </div>
                </td>
            </tr>
        );
    }
}

export default OfferListTableRow;
