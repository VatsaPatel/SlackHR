import React, { Component } from "react";
import { Link } from "react-router-dom";

import Loader from './loader'

import styles from "./Dashboard.module.css";
import "./styles.css";

import GreyBtnSmall from './../buttons/GreyBtnSmall/GreyBtnSmall.js';
import PanelMessage from './PanelMessage/Header.js';

// <div className={styles.}>
// </div>

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  dataFetched: {},
		  isLoading: true
		};
	  }

	  componentDidMount() {
		const self = this;
		fetch('http://localhost:8080/getslackData', {
		  method: 'GET',
		})
		  .then(response => {
			if (response.status >= 400) {
			  throw new Error('Bad response from server');
			}
			return response.json();
		  })
		  .then(data => {
			self.setState({ dataFetched: data, isLoading: false  });
		  })
		  .catch(err => {
			console.log('caught it!', err);
		  });
	  }


	render() {
		const { dataFetched } = this.state;
		const messages = Object.assign({}, dataFetched.messages);
		const issues = Object.assign({}, dataFetched.issues);
		console.log(dataFetched);
		return (
			<div className={styles.container}>
        <div className={styles.cardContaner}>
          <div className={`${styles.Card1} ${styles.TotalMessagesCard}`}>
            <span className={styles.CardFont}>Total Messages</span>
            <span className={styles.CardNumber}>42,274</span>
          </div>
          <div className={`${styles.Card2} ${styles.TotalMessagesCard}`}>
            <span className={styles.CardFont}>Non-Compliant Messages</span>
            <span className={styles.CardNumber}>773</span>
          </div>
          <div className={`${styles.Card3} ${styles.TotalMessagesCard}`}>
            <span className={styles.CardFont}>New issues this week</span>
            <span className={styles.CardNumber}>43</span>
          </div>
          <div className={`${styles.Card4} ${styles.TotalMessagesCard}`}>
            <span className={styles.CardFont}>Issues Closed</span>
            <span className={styles.CardNumber}>773</span>
          </div>
        </div>
        <div className={styles.PanelContaner}>
          <div className={styles.MessagePanel}>
              <div className={styles.PanelHeader}>
                <span className={styles.PanelFont}>New Non-Compliant messages</span>
								<Link to='/SlackHR/Messages'>
                	<GreyBtnSmall className={styles.viewAllBtn} style={{padding: "6px 26px",fontSize: "15.2px"}}>View All</GreyBtnSmall>
								</Link>
              </div>
			  {this.state.isLoading ? <Loader /> : Object.values(messages).map((message,i) =>
				  <PanelMessage
					senderName={message.senderName}
					action=" to "
					channelName={message.channelName}
					key = {i}
				 />
		  		)}
          </div>
          <div className={styles.MessagePanel} style={{width: "467px"}}>
              <div className={styles.PanelHeader}>
                <span className={styles.PanelFont}>New issues to HR</span>
				<Link to='/SlackHR/Issues'>
              	  <GreyBtnSmall className={styles.viewAllBtn} style={{padding: "6px 26px",fontSize: "15.2px"}}>View All</GreyBtnSmall>
				</Link>
              </div>

				{this.state.isLoading ? <Loader /> : Object.values(issues).map((message,i) =>
				  <PanelMessage
							  senderName={message.senderName}
							  key={i}
             	 />
		  		)}

          </div>
        </div>
			</div>
		);
	}
}
