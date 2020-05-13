import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css';
import pp from './../../../assets/demo/pp.png';

export default class Sidebar extends Component {
  render() {
    return (
      <div className={styles.Sidebar}>
        <div className={styles.profile_container}>
          <img src={pp} className={styles.profile_image} alt="Logo" />
          <p className={styles.profile_name}>
           HR Manager{' '}
            <i className={`${styles.search_icon} wb-triangle-down`} aria-hidden="true" />
          </p>
        </div>

        <ul className={styles.Navbar}>
          <li>
            <a>
							<i className={`${styles.IconStyle} wb-home`} aria-hidden="true" />{' '}
              <span className={styles.title}>Home</span>
            </a>
          </li>
					<li>
            <div className={styles.line} />
            <a>  <i className={`${styles.IconStyle} wb-calendar`} aria-hidden="true" />{' '}
              <span className={styles.title}>Schedule</span>
            </a>
          </li>
					<li>
            <div className={styles.line} />
            <a>        <i className={`${styles.IconStyle} wb-pluse`} aria-hidden="true" />{' '}
              <span className={styles.title}>Evaluations</span>
            </a>
          </li>
					<li>
            <div className={styles.line} />
             <NavLink to="/SlackHR" activeClassName={styles.active}>
								<i className={`${styles.IconStyle} wb-memory`} aria-hidden="true" />{' '}
	              <span className={styles.title}>SlackHR</span>
            </NavLink>
          </li>
					<li>
            <div className={styles.line} />
            <a>
						<i className={`${styles.IconStyle} wb-table`} aria-hidden="true" />{' '}
              <span className={styles.title}>Administrative</span>
            </a>
          </li>
					<li>
            <div className={styles.line} />
            <a>
						<i className={`${styles.IconStyle} wb-calendar`} aria-hidden="true" />{' '}
              <span className={styles.title}>Events</span>
            </a>
          </li>
					<li>
            <div className={styles.line} />
            <a>
              <i className={`${styles.IconStyle} wb-cloud`} aria-hidden="true" />{' '}
              <span className={styles.title}>Cloud Drive</span>
            </a>
          </li>
          <li>
            <div className={styles.line} />
            <a>
              <i className={`${styles.IconStyle} wb-library`} aria-hidden="true" />{' '}
              <span className={styles.title}>Applications</span>
            </a>
          </li>
          <li>
            <div className={styles.line} />
            <a>
              <i className={`${styles.IconStyle} wb-order`} aria-hidden="true" />{' '}
              <span className={styles.title}>Asset Management</span>
            </a>
          </li>
          <li>
            <div className={styles.line} />
            <a>
              <i className={`${styles.IconStyle} wb-table`} aria-hidden="true" />{' '}
              <span className={styles.title}>Others</span>
            </a>
          </li>
          <li>
            <div className={styles.line} />
            <a>
              <i className={`${styles.IconStyle} wb-settings`} aria-hidden="true" />{' '}
              <span className={styles.title}>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
