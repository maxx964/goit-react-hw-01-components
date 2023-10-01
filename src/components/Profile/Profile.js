import React from 'react';

import styles from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatarProf}
        />
        <p className={styles.nameProf}>{username}</p>
        <p className={styles.tagProf}>{tag}</p>
        <p className={styles.locationProf}>{location}</p>
      </div>

      <ul className={styles.statsProf}>
        <li className={styles.itemProf}>
          <span className={styles.labelProfOne}>Followers</span>
          <span className={styles.quantityProf}>{stats.followers}</span>
        </li>
        <li className={styles.itemProf}>
          <span className={styles.labelProfTwo}>Views</span>
          <span className={styles.quantityProf}>{stats.views}</span>
        </li>
        <li className={styles.itemProf}>
          <span className={styles.labelProfThree}>Likes</span>
          <span className={styles.quantityProf}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;