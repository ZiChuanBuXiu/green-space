import React, {Component} from 'react';
import ReactMapboxGl, {GeoJSONLayer, Layer, Marker} from 'react-mapbox-gl';

let {token, styles} = require('../configs/config.json');

const pin = require('../images/home.svg');

const Map = ReactMapboxGl({
    accessToken: token,
});

const mapStyle = {
    width: '95%',
    height: '400px',
    margin: "25px",
    align: "center"
};

class CoordinatePickerMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: [144.971154, -37.815285],
            homeCoordinate: [144.971154, -37.815285],
        }
    }


    render() {
        return (
            <Map
                style={styles.outdoor}
                containerStyle={mapStyle}
                zoom={this.zoom}
                center={this.state.center}
                onClick={(map, e) => {
                    this.setState({
                        homeCoordinate: [e.lngLat.lng, e.lngLat.lat]
                    });
                    this.props.onUpdate({homeCoordinate: [e.lngLat.lng, e.lngLat.lat]});
                }}
            >
                <Marker
                    coordinates={this.state.homeCoordinate}
                    style={{width: "35px", height: '35px'}}
                    anchor="top"
                    className="home-pin"
                >
                    <div style={{width: "35px", height: '35px'}}>
                        <img src={pin} width="100%" height="100%" alt="home-pin"/>
                    </div>
                </Marker>
            </Map>
        );
    }
}

export default CoordinatePickerMap;
