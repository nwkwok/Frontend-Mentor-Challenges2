import React from 'react'
import style from './LocationCard.module.scss'
import AustraliaMap from '../../assets/locations/desktop/image-map-australia.png'
import CanadaMap from '../../assets/locations/desktop/image-map-canada.png'
import UnitedKingdomMap from '../../assets/locations/desktop/image-map-united-kingdom.png'

function LocationCard(props) {

    const getCountryInfo = () => {
        if (props.location.toLowerCase() === 'canada') {
            const map = CanadaMap
            return map              
        } else if (props.location.toLowerCase() === 'australia') {
            const map = AustraliaMap
            return map
        } else if (props.location.toLowerCase() === 'united kingdom') {
            const map = UnitedKingdomMap
            return map
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
