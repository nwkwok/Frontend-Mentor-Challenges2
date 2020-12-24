import React, { useState, useEffect } from 'react'
import style from './LocationCard.module.scss'
import AustraliaMap from '../../assets/locations/desktop/image-map-australia.png'
import CanadaMap from '../../assets/locations/desktop/image-map-canada.png'
import UnitedKingdomMap from '../../assets/locations/desktop/image-map-united-kingdom.png'
import SmAustraliaMap from '../../assets/locations/tablet/image-map-australia.png'
import SmCanadaMap from '../../assets/locations/tablet/image-map-canada.png'
import SmUnitedKingdomMap from '../../assets/locations/tablet/image-map-uk.png'

function LocationCard(props) {
    const [isDesktop, setDesktop] = useState()

    const updateMedia = () => {
        if (window.innerWidth > 1111) {
            setDesktop(true)
        } else {
            setDesktop(false)
        }
    }

    useEffect (() => {
        updateMedia();
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

    const getCountryInfo = () => {
        if (props.location.toLowerCase() === 'canada') {
            if (isDesktop) {
                const map = CanadaMap
                return map
            } else {
                const map = SmCanadaMap
                return map
            }
        } 

        if (props.location.toLowerCase() === 'australia') {
            if (isDesktop) {
                const map = AustraliaMap
                return map
            } else {
                const map = SmAustraliaMap
                return map
            }
        }
        
        if (props.location.toLowerCase() === 'united kingdom') {
            if (isDesktop) {
                const map = UnitedKingdomMap
                return map
            } else {
                const map = SmUnitedKingdomMap
                return map
            }
        }   
    } 


    const mapSrc = getCountryInfo();

    const changeDirection = {
        base: {
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between'
    }
}

    return (
        <div style={props.reverse ? changeDirection.base : null} className={style.container}>
            <div className={style.locationContainer}>
                <div className={style.locationContent}>
                    <div className={style.header}>
                        {props.location}
                    </div>
                    <div className={style.locationInfoContainer}>
                        <div className={style.locationOfficeInfo}>
                            <span>{props.officeName}</span> <br />
                            {props.street} <br />
                            {props.cityState}
                        </div>
                        <div className={style.locationContactInfo}>
                            <span>Contact</span> <br />
                            P: {props.phone} <br />
                            M: {props.email}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.locationMap}>
                <img src={mapSrc} alt='map'/>
            </div>
        </div>
    )
}

export default LocationCard
