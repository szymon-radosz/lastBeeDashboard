import React, { Component } from "react";
import axios from "axios";
import OfferListTable from "./childComponents/OfferListTable";

class OfferListMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            maxPage: 0,
            offerList: []
        };
        this.loadOffers = this.loadOffers.bind(this);
        this.setPage = this.setPage.bind(this);
        this.updateOffer = this.updateOffer.bind(this);
    }

    async setPage(value) {
        console.log(value);
        await this.setState({ currentPage: value });
        await this.loadOffers();
    }

    async loadOffers() {
        let response;
        this.props.switchLoader(true);

        response = await axios.get(
            `${this.props.appPath}/api/offers?page=${this.state.currentPage}`
        );

        await this.setState({
            offerList: []
        });

        await this.setState({
            offerList: response.data.data,
            currentPage: response.data.current_page,
            maxPage: response.data.last_page
        });

        this.props.switchLoader(false);

        console.log(response.data);
    }

    async nextPage() {
        if (this.state.currentPage < this.state.maxPage) {
            let response;

            await this.setState({ currentPage: this.state.currentPage - 1 });

            response = await axios.get(
                `${this.props.appPath}/api/offers?page=${
                    this.state.currentPage
                }`
            );

            this.setState({
                offerList: []
            });

            this.setState({
                offerList: response.data.data
            });
        } else {
            console.log("you are on last page");
        }
    }

    async prevPage() {
        if (this.state.currentPage > 1) {
            let response;

            await this.setState({ currentPage: this.state.currentPage - 1 });

            response = await axios.get(
                `${this.props.appPath}/api/offers?page=${
                    this.state.currentPage
                }`
            );

            this.setState({
                offerList: []
            });

            this.setState({
                offerList: response.data.data
            });
        } else {
            console.log("you are on first page");
        }
    }

    async updateOffer(
        id,
        title,
        description,
        page_url,
        img_url,
        brand,
        type,
        status,
        price,
        currency
    ) {
        /*console.log([
            id,
            title,
            description,
            page_url,
            img_url,
            brand,
            type,
            status
        ]);*/

        let updatedOffer;
        this.props.switchLoader(true);

        try {
            updatedOffer = await axios.post(
                `${this.props.appPath}/api/updateOffer`,
                {
                    id: id,
                    title: title,
                    description: description,
                    page_url: page_url,
                    img_url: img_url,
                    brand: brand,
                    type: type,
                    status: status,
                    price: price,
                    currency: currency
                },
                {
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                            "content"
                        )
                    }
                }
            );

            if (updatedOffer.status == 200) {
                this.props.showAlertSuccess("Updated records.");
            } else {
                this.props.showAlertWarning("Can't update record.");
            }

            console.log(updatedOffer);
        } catch (error) {
            console.log(error);
        }

        this.props.switchLoader(false);
    }

    componentDidMount() {
        this.loadOffers();
    }

    render() {
        return (
            <div className="OfferListMainContainer">
                <OfferListTable
                    offers={this.state.offerList}
                    updateOffer={this.updateOffer}
                />

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li
                            className="page-item"
                            onClick={() => this.prevPage()}
                        >
                            <div className="page-link">{"<"}</div>
                        </li>
                        <li
                            className="page-item"
                            onClick={() => this.setPage(1)}
                        >
                            <div className="page-link">1</div>
                        </li>
                        <div className="page-link">
                            <input
                                type="text"
                                onBlur={event =>
                                    this.setPage(event.target.value)
                                }
                            />
                        </div>
                        <li
                            className="page-item"
                            onClick={() => this.setPage(this.state.maxPage)}
                        >
                            <div className="page-link">
                                {this.state.maxPage}
                            </div>
                        </li>
                        <li
                            className="page-item"
                            onClick={() => this.nextPage()}
                        >
                            <div className="page-link">{">"}</div>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default OfferListMain;
