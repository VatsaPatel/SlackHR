import React, { Component } from 'react';
import styles from './AddStudentButton.module.css';

export default class AddButton extends Component {
  state = {
   loading: false
 };

 fetchData = () => {
   this.setState({ loading: true });

   fetch('http://localhost:8080/startProcess', {
     method: 'GET',
   })
     .then(response => {
     if (response.status >= 400) {
       throw new Error('Bad response from server');
     }
     return response.json();
     })
     .then(data => {
     this.setState({ loading: false });
     })
     .catch(err => {
     console.log('caught it!', err);
     });
 };

  render() {
    const { loading } = this.state;

    return (
      <button className={styles.button} onClick={this.fetchData} disabled={loading}>


        {loading && (
         	<i className={`${styles.plus} wb-refresh`} aria-hidden="true" />
       )}
       {loading && <span>Loading Data from Server</span>}
       {!loading && <span>Refresh</span>}
      </button>
    );
  }
}
