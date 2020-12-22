import React from 'react'
import ScrollToTop from '../Utility/ScrollToTop'
import LocationCard from '../Locations/LocationCard'
import LetsTalk from '../LetsTalk/LetsTalk'


function Locations() {
    return (
        <div>
            <ScrollToTop />
            <LocationCard 
                location='Canada'
                officeName='Designo Central Office'
                street='3886 Wellington Street'
                cityState='Toronto, Ontario M9C 3J5'
                phone='+1 253-863-8967'
                email='contact@designo.co'/>

            <LocationCard 
                location='Australia'
                officeName='Designo AU Office'
                street='19 Balonne Street'
                cityState='New South Wales 2443'
                phone='(02) 6720-9092'
                email='contact@designo.au'
                reverse='true'/>        
            <LocationCard 
                location='United Kingdom'
                officeName='Designo UK Office'
                street='13 Colorado Way'
                cityState='Rhydy-y-fro SA8 9 GA'
                phone='078 3115 1400'
                email='contact@designo.uk'
                />  
                <LetsTalk />
        </div>
    )
}

export default Locations
