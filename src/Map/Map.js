import { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './Map.scss'



export const Map = () => {

    const mapStyles = {        
        height: "400px",
        width: "100%"
    }

    const location = [
        {
          name: "Rose Garden Tattoo",
          location: { 
            lat: 41.9108015,
            lng: -87.8199573 
          }
        }
      ]
    

    const defaultCenter = {
        lat: 41.9108015, lng: -87.8199573
      }

    const [ selected, setSelected ] = useState({});
  
    const onSelect = item => {
        setSelected(item);
    }

    return (
        <section id="map-section">
          <div className="shop-contact">
            <div className="shop-headline">
            <h2>Book Appointment</h2>
            </div>
            <div className="shop-hours">
            <h3>Shop Hours: </h3>
            <h3>Mon-Sun 3pm-midnight</h3>
            <h3><a className="telephone" href="tel:123-456-7890">123-456-7890</a></h3>
            </div>
          </div>
        <LoadScript
        googleMapsApiKey='AIzaSyD6r1BHm_uiK2b3tG3ycp86onr0bMRI8po'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
            {
                location.map(item => {
                    return <Marker key={item.name} position={item.location} onClick={() => onSelect(item)}/>
                })
            }

            {
                selected.location && 
                (
                <InfoWindow
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
                >
                <p>{selected.name}</p>
                </InfoWindow>
                )
           }

          </GoogleMap>
     </LoadScript>

        </section>
    )
}

export default Map