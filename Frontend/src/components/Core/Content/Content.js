import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'

import styles from "./Content.module.css";

import SlackHR from './../../../Screens/SlackHR/SlackHR';
import Messages from '../../../Screens/Messages/MessagesContainer';
import Issues from '../../../Screens/Issues/MessagesContainer';

export default class Content extends Component {

	render() {
		return (
			<div className={styles.main}>
				{/* <div className={styles.coverUp} /> */}
				<Switch>
		      <Route exact path='/' component={SlackHR}/>
					<Route exact path='/SlackHR' component={SlackHR}/>
					<Route exact path='/SlackHR/Messages' component={Messages}/>
					<Route exact path='/SlackHR/Issues' component={Issues}/>
		    </Switch>

			</div>
		);
	}
}
