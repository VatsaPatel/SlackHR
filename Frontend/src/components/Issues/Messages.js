import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./Messages.module.css";

import GreyBtnSmall from '../buttons/GreyBtnSmall/GreyBtnSmall.js';
import PanelMessage from './PanelMessage/Header.js';

import Information from '../../assets/demo/info-json.js';

// <div className={styles.}>
// </div>

var data = [
	{
		senderImage: "http://adit.ac.in/faculty/upload/spvitcp.jpg",
		senderName: "Vatsa Patel",
		channelName: "#GeneralDev",
		message: "You guys are morons. How much time does it take?",
		date: "27/07/20",
		labels: ['Toxic','Racist'],
	},
	{
		senderImage: "http://adit.ac.in/faculty/upload/spvitcp.jpg",
		senderName: "Pragati Patel",
		channelName: "#GenerasdfgbalDev",
		message: "yolo",
		date: "27/07/20",
		labels: ['Ultra u','olue'],
	},
];

export default class Home extends Component {

	constructor(){
		super();

		this.state={
			search:null,
			dataFetched: [],
		  	isLoading: true
		};
	}

	  componentDidMount() {
		const self = this;
		fetch('http://localhost:8080/getIssues', {
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


	searchSpace=(event)=>{
		let keyword = event.target.value;
		this.setState({search:keyword})
	}

	render() {
		const { dataFetched } = this.state;
		const messages = Object.assign([], dataFetched.issues);
		console.log(messages)
		console.log(data)
		const items = messages.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.senderName.toLowerCase().includes(this.state.search.toLowerCase()) ||
			 				data.channelName.toLowerCase().includes(this.state.search.toLowerCase()) ||
							data.message.toLowerCase().includes(this.state.search.toLowerCase()) ||
							data.labels.toString().toLowerCase().includes(this.state.search.toLowerCase()) ||
							data.date.toString().toLowerCase().includes(this.state.search.toLowerCase())
						){
          return data
      }

    }).map(data=>{
      return(
				<PanelMessage
					senderImage="http://adit.ac.in/faculty/upload/spvitcp.jpg"
					senderName={data.senderName}
					message={data.message}
					date={data.date}
				/>
      )
    })
		return (
			<div className={styles.container}>
        <div className={styles.PanelContaner}>
					<div className={styles.scont}>
						<i className={`${styles.search_icon} wb-search`} aria-hidden="true" />
						<input type="text" className={styles.search} placeholder="Search" onChange={(e)=>this.searchSpace(e)} />
					</div>
					{items}
        </div>
			</div>
		);
	}
}
