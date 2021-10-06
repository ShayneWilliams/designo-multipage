import React from 'react';
import styles from '../styles/OrangeCard.module.css';
import Link from 'next/link';
export default function OrangeCard() {
  return (
    <div className={styles.container}>
      <div className={styles['container__left']}>
        <h2>
          Let’s talk about <br />
          your project
        </h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>

      <div className={styles['container__right']}>
        <Link href="/contact">
          <a>
            <div className={styles['container__right__link']}>GET IN TOUCH</div>
          </a>
        </Link>
      </div>

    </div>
  );
}
