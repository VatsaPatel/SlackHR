import React, { Component } from "react";
import styles from "./DropdownButton.css";

export default class HeadButton extends Component {
	render() {
		return (
			<button className="btn">
				<span>Account Settings</span>
				<i className="material-icons">public</i>
				<ul className="dropdown">
					<li className="active">
						<a href="#">Profile Information</a>
					</li>
					<li>
						<a href="#">Change Password</a>
					</li>
					<li>
						<a href="https://codepen.io/pro">
							Become <b>PRO</b>
						</a>
					</li>
					<li>
						<a href="#">Help</a>
					</li>
					<li>
						<a href="#">Log Out</a>
					</li>
				</ul>
			</button>
		);
	}
}
