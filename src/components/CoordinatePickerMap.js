import {red700} from "material-ui/styles/colors";

import React, {Component} from 'react';
import ReactMapboxGl, {Marker} from 'react-mapbox-gl';
import MapsPinDrop from 'material-ui/svg-icons/maps/pin-drop';

let {token, styles} = require('../configs/config.json');

const Map = ReactMapboxGl({
    accessToken: token,
});

const mapStyle = {
    width: '100%',
    height: '230px',
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
                    anchor="bottom"
                    className="home-pin"
                >
                    <div style={{width: "35px", height: '35px'}}>
                        <MapsPinDrop style={{height:"100%", width:"100%"}} color={red700}/>
                    </div>
                </Marker>
            </Map>
        );
    }
}

export default CoordinatePickerMap;
