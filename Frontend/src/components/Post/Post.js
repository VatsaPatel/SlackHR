import React, { Component } from "react";
import styles from "./Post.module.css";

import Header from './Header/Header';
import PostContent from './PostContent/PostContent';
import Footer from './Footer/Footer';


export default class Home extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Header {...this.props} />
				<PostContent {...this.props} />
				<Footer />
			</div>
		);
	}
}
