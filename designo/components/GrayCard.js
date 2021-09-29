import React, { useEffect, useState } from 'react';
import styles from '../styles/GrayCard.module.css';
import useViewport from './useViewport';
import useMediaQuery from './useMediaQuery';
import Link from 'next/link'
export default function GrayCard(props) {
  const { title, description, desktopPic, mobilePic, tabletPic } = props;
  // const [output, setOutput] = useState(null)

  const tablet = useMediaQuery(768);
  const mobile = useMediaQuery(375);

  // let output = null;

  // useEffect(() =>{

  //   if(width <= 375){

  //     setOutput(<div className={styles['container']} style={{background: `url(${mobilePic})`}}>
  //     <div className={styles['content']}>

  //     <h2>{title}</h2>

  //     <p>{description}   <svg
  //                 width="5"
  //                 height="10"
  //                 viewBox="0 0 5 10"
  //                 fill="none"
  //                 xmlns="http://www.w3.org/2000/svg"
  //               >
  //                 <path
  //                   d="M1 1L5 5L1 9"
  //                   stroke="#E7816B"
  //                   stroke-width="2"
  //                 />
  //               </svg></p>
  //     </div>
  // </div>)
  //   } else if(width <= 768 && width > 375){
  //     setOutput(<div className={styles['container']} style={{background: `url(${tabletPic})`}}>
  //           <div className={styles['content']}>

  //           <h2>{title}</h2>

  //           <p>{description}   <svg
  //                       width="5"
  //                       height="10"
  //                       viewBox="0 0 5 10"
  //                       fill="none"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                     >
  //                       <path
  //                         d="M1 1L5 5L1 9"
  //                         stroke="#E7816B"
  //                         stroke-width="2"
  //                       />
  //                     </svg></p>
  //           </div>
  //       </div>)
  //   } else{
  //     setOutput(<div className={styles['container']} style={{background: `url(${desktopPic})`}}>
  //           <div className={styles['content']}>

  //           <h2>{title}</h2>

  //           <p>{description}   <svg
  //                       width="5"
  //                       height="10"
  //                       viewBox="0 0 5 10"
  //                       fill="none"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                     >
  //                       <path
  //                         d="M1 1L5 5L1 9"
  //                         stroke="#E7816B"
  //                         stroke-width="2"
  //                       />
  //                     </svg></p>
  //           {/* <img src={desktopPic} /> */}
  //           </div>
  //       </div>)
  //   }
  // }, [width])
  return (
    //  output
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
