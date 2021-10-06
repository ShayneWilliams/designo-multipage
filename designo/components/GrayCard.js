import React, { useEffect, useState } from 'react';
import styles from '../styles/GrayCard.module.css';
import useMediaQuery from './useMediaQuery';
import Link from 'next/link'
export default function GrayCard(props) {
  const { title, description, desktopPic, mobilePic, tabletPic } = props;

  const tablet = useMediaQuery(768);
  const mobile = useMediaQuery(375);
  return (
<Link href={props.page}>

    <div className={styles['gray-card__item']}>
      <a>

        <div className={styles['gray-card__pic']}>
          <img src={mobile ? mobilePic : tablet ? tabletPic : desktopPic} />
        </div>
      <div className={styles['gray-card__item__content']}>
        <h2>{title}</h2>

        <p>
          {description}{' '}
          <svg
            width="5"
            height="10"
            viewBox="0 0 5 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L1 9" stroke="#E7816B" stroke-width="2" />
          </svg>
        </p>
      </div>
      </a>
    </div>
</Link>
  );
}
