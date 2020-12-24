import React from 'react'
import style from './AboutUs.module.scss'
import AboutUsHero from '../../assets/about/desktop/image-about-hero.jpg'


function AboutUs() {
    return (
        <div className={style.container}>
            <div className={style.contentContainer}>
                <p className={style.header}>
                About Us
                </p>
                <p className={style.content}>
                Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                </p>
            </div>
            <div className={style.contentImage}>
                <img src={AboutUsHero} alt='about-us'/>
            </div>
        </div>
    )
}

export default AboutUs
