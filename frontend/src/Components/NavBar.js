import React, { Component } from "react";
import "../Styles/navbar.css";

export default class NavBar extends Component {
	render() {
		return (
			<div className="nav-bar">
				<div
					className="nav-item"
					onClick={() => {
						window.location = "/";
					}}
				>
					Home
				</div>
				{/* {this.props.loggedIn !== true && (
					<div
						style={{ marginLeft: "auto" }}
						className="nav-item"
						onClick={() => {
							window.location = "/login";
						}}
					>
						Login
					</div>
				)} */}

				{this.props.loggedIn === true && (
					<>
						<div style={{ marginLeft: "auto" }} className="nav-text">
							Logged in as {this.props.username}
						</div>
						<div
							className="nav-item"
							onClick={() => {
								localStorage.clear();
								window.location.reload();
							}}
						>
							Logout
						</div>
					</>
				)}
			</div>
		);
	}
}
