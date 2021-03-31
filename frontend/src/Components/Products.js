import React, { Component } from "react";
import axios from "axios";
import "../Styles/products.css";

export default class Products extends Component {
	constructor(props) {
		super(props);
		this.state = { products: [] };
	}
	componentDidMount() {
		axios
			.get("http://localhost:4000/products")
			.then((res) => {
				const products = res.data.response.products;
				this.setState({ products });
			})
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<div id="products-list">
				{this.state.products.map((product, index) => (
					<div className="product" key={index}>
						{product.productImage == null ? (
							<img
								src={process.env.PUBLIC_URL + "/placeholder.png"}
								alt="placeholder"
							></img>
						) : (
							<img
								src={"http://localhost:4000/" + product.productImage}
								alt=" book product"
							></img>
						)}
						<div>
							<h1>{product.name}</h1>
							<div>Price: {product.price}</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}
