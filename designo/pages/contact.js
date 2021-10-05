import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LocationCircles from '../components/LocationCircles'
import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <div >
            
        <Nav/>
        <div className={styles['container']}>


        <div className={styles['orange-card']}>
            <div className={styles['orange-card__circle']}>
                
            <svg width="640" height="480" viewBox="0 0 640 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.308943" r="320" transform="matrix(0 1 1 0 320 160)" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="0" y1="640" x2="640" y2="640" gradientUnits="userSpaceOnUse">
<stop stop-color="#5D0202" stop-opacity="0.01"/>
<stop offset="1" stop-color="#5D0202" stop-opacity="0.497569"/>
</linearGradient>
</defs>
</svg>

            </div>

            <div className={styles['orange-card__text']}>
                <h1>Contact Us</h1>
                <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>

            <div className={styles['orange-card__form']}>
                <form>

                <input placeholder='Name'/>
                <input placeholder='Email Address'/>
                <input placeholder='Phone'/>
                <textarea placeholder='Your Message'/>
                <button>Submit</button>
                </form>
            </div>


        </div>
        <LocationCircles/>

        </div>

        <Footer/>
        </div>
    )
}
