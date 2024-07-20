
import styles from './CustomMap.module.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../images/marker-icon-2x.png'),
  iconUrl: require('../images/marker-icon.png'),
  shadowUrl: require('../images/marker-shadow.png')
});

const CustomMap = () => {
  return (
    <div className={styles.container}>
      <MapContainer center={[50.450001, 30.51071]} zoom={13} scrollWheelZoom={false} 
           style={{height: '120vh', width: '40vw'} }
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.450001, 30.51071]} >
          <Popup >
            <p style={{color: 'red', fontWeight: '600'}}>Our central store! <br/>Yaroslaviv Val 9</p>
          </Popup>
        </Marker>
      </MapContainer>
      <div className={styles.addressContainer}>
        <p className={styles.address}><span className={styles.addressTitle}>Address: </span><br/>Ukraine, Kyiv, Yaroslaviv Val str 9</p>
        <p className={styles.days}>Sun-Mon</p>
        <p className={styles.hours}>10.00 - 22.00</p>
      </div>
    </div>
  )
}

export default CustomMap;