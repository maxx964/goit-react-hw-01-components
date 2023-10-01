import React from 'react';

import styles from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles['statList']}>
        {stats.map(({ id, label, percentage }, index) => (
          <li key={id} className={`${styles['itemStatist']} ${styles['itemStatist-' + index]}`}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

