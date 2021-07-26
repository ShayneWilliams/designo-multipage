import React from 'react';
import styles from '../styles/DesignCard.module.css';
export default function DesignCard(props) {
  const { pic, title, description } = props;
  return (
    <>

      <div className={styles['container']}>
        <img src={pic} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}
