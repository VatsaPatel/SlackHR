import React, { Component } from "react";
import ReactDOM from "react-dom";
import CustomProperties from "react-custom-properties";
import styles from "./ButtonSmall.module.css";

export default class ButtonSmall extends Component {
	// render() {
	// 	return (
	// 		<button className={styles.btn_small}>
	//       <span>Hover me I'm awesome</span>
	// 		</button>
	// 	);
	// }

	constructor(props) {
		super(props);

		this.state = { x: 0, y: 0 };
	}

	_onMouseMove(e) {
		const position = ReactDOM.findDOMNode(this.refs.elem).getBoundingClientRect();
		console.log(position, e.nativeEvent.offsetX, e.screenX);

		this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
	}

	// render() {
	//   const { x, y } = this.state;
	//   return <div ref="elem" className="container">
	//     <div>
	//       <img onMouseMove={this._onMouseMove.bind(this)} width="200" height="200" src="https://yt3.ggpht.com/-7zFDHK5X45w/AAAAAAAAAAI/AAAAAAAAAAA/QJfHeLTEZwE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" />
	//     </div>
	//     <h1>Mouse coordinates: { x } { y }</h1>
	//   </div>;
	// }

	render() {
    const { x, y } = this.state;
		return(
			<CustomProperties properties={{ "--branding-color": x }}>
				<button onMouseMove={this._onMouseMove.bind(this)} className={styles.btn_small}>
					<span>{ x }</span>
				</button>
			</CustomProperties>
		);
	}
}
