import React, { Component } from "react";
import { Link } from 'react-router-dom';

import styles from './MessagesContainer.module.css';

import Post from '../../components/Post/Post';
import Channel from '../../components/Channel/Channel';
import SubChannel from '../../components/SubChannel/SubChannel';
import Addbutton from '../../components/buttons/AddStudentButton/AddStudentButton';

import Messages from '../../components/Issues/Messages';

export default class Home extends Component {

	render() {
		return (
			<div className={styles.container}>

				<div className={styles.feed}>

					<span className={styles.header}>
					<Link to="/SlackHR">
            <Addbutton>Back</Addbutton>
          </Link>
					Issues sent to HR</span>

					<Messages />
				</div>
			</div>
		);
	}
}
