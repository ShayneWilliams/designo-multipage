import React from 'react'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
export default function Nav() {
    return (
        <div className={styles['nav-container']}>
            <div className={styles['nav-container__logo']}>

                <Link href='/'>
                
                    <img src='/assets/shared/desktop/logo-dark.png'/>
                </Link>
            </div>

            <div className={styles['nav-container__items']}>

                <Link href='/about'>
                    <a>OUR COMPANY</a>
                </Link>
                <Link href='/locations'>
                    <a>LOCATIONS</a>
                </Link>
                <Link href='/contact'>
                    <a>CONTACT</a>
                </Link>


            </div>

        </div>
    )
}
