import React, {Component} from 'react';
import ReactMapboxGl, {GeoJSONLayer, Layer, Marker, Popup} from 'react-mapbox-gl';

let {token, styles} = require('../configs/config.json');

const pin = require('../images/home.svg');

const Map = ReactMapboxGl({
    accessToken: token,
});

const mapStyle = {
    width: '95%',
    height: '750px',
    margin: "25px",
    align: "center"
};

const geojson = require('../data/test.json');


const threeDLayerOpts = {
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 5
};

const paintLayer = {
    'fill-extrusion-color': '#aaa',
    'fill-extrusion-height': {
        'type': 'identity',
        'property': 'height'
    },
    'fill-extrusion-base': {
        'type': 'identity',
        'property': 'min_height'
    },
    'fill-extrusion-opacity': .6
};

const symbolLayout = {
    'text-field': '{place}',
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top'
};
const symbolPaint = {
    'text-color': 'green'
};

const fillExtrusionLayout = {
    visibility: 'visible'
};
const fillExtrusionPaint = {
    'fill-extrusion-color': 'red',
    'fill-extrusion-opacity': 0.6
};


class MainMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: [144.971154, -37.815285],
            homeCoordinate: [144.971154, -37.815285]
        }
    }


    onClickPaint = (event) => {
        console.log(event);
    };

    render() {
        return (
            <Map
                style={styles.outdoor}
                containerStyle={mapStyle}
                zoom={[13]}
                center={this.props.center}
            >
                <Marker
                    coordinates={this.props.homeCoordinate}
                    style={{width: "35px", height: '35px'}}
                    anchor="top"
                    className="home-pin"
                >
                    <div style={{width: "35px", height: '35px'}}>
                        <img src={pin} width="100%" height="100%" alt="home-pin"/>
                    </div>
                </Marker>

                <GeoJSONLayer
                    data={geojson}
                    fillExtrusionLayout={fillExtrusionLayout}
                    fillExtrusionPaint={fillExtrusionPaint}
                    symbolLayout={symbolLayout}
                    symbolPaint={symbolPaint}
                    fillExtrusionOnClick={this.onClickPaint}
                    fillOnClick={this.onClickPaint}
                />

                <Popup
                    coordinates={[144.971154, -37.815285]}
                    anchor={"bottom"}
                    style={{width: 50, height: 90}}
                >
                    <h1>Popup</h1>
                </Popup>

            </Map>
        );
    }
}

export default MainMap;
