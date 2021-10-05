import React, { useState } from 'react'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import useMediaQuery from './useMediaQuery'
export default function Nav() {

    const [isOpen, setIsOpen] = useState(false)
    const mobile = useMediaQuery(700)









    let output =   (
    <>
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
    </>


)
    if(mobile){

        if(isOpen){

            // navItems = <div className={styles['hamburger--open']}>

            // <Link href='/about'>
            //     <a>OUR COMPANY</a>
            // </Link>
            // <Link href='/locations'>
            //     <a>LOCATIONS</a>
            // </Link>
            // <Link href='/contact'>
            //     <a>CONTACT</a>
            // </Link>


            // </div>

            output = (
                <>
                <div className={styles['spacer']}/>
                <div className={styles['side-nav']}>

                    <div className={styles['side-nav__top']}>

                        <Link href='/'>
                        
                            <img src='/assets/shared/desktop/logo-dark.png'/>
                        </Link>
                    <button onClick={() => setIsOpen(!isOpen)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></button>
                    </div>
            

                    <div className={styles['side-nav__items']}>
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
                <div className={styles['background']} onClick={()=> setIsOpen(!isOpen)}/>

        </>
            )
        } else {
            output = (
                <div className={styles['side-nav']}>

                    <div className={styles['side-nav__top']}>

                        <Link href='/'>
                        
                            <img src='/assets/shared/desktop/logo-dark.png'/>
                        </Link>
                    <button onClick={() => setIsOpen(!isOpen)}><svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg></button>
                    </div>
                </div>
            )
        }
    }



    return (
        <div className={styles['nav-container']}>
            {/* <div className={styles['nav-container__logo']}>

                <Link href='/'>
                
                    <img src='/assets/shared/desktop/logo-dark.png'/>
                </Link>
            </div> */}



            {output}
            {/* <div className={styles['nav-cont ainer__items']}>

            <Link href='/about'>
                <a>OUR COMPANY</a>
            </Link>
            <Link href='/locations'>
                <a>LOCATIONS</a>
            </Link>
            <Link href='/contact'>
                <a>CONTACT</a>
            </Link>


        </div> */}

        </div>
    )
}
