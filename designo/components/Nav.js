import React from 'react'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
export default function Nav() {
    return (
        <div className={styles['nav-container']}>
            <div className={styles['nav-container__logo']}>
                <a>
                    <img src='/assets/shared/desktop/logo-dark.png'/>
                </a>
            </div>

            <div className={styles['nav-container__items']}>

                <Link href='/'>
                    <a>OUR COMPANY</a>
                </Link>
                <Link href='/'>
                    <a>LOCATIONS</a>
                </Link>
                <Link href='/'>
                    <a>CONTACT</a>
                </Link>


            </div>

        </div>
    )
}
