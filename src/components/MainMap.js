import {red700} from "material-ui/styles/colors";

import MapsPinDrop from 'material-ui/svg-icons/maps/pin-drop';
import React, {Component} from 'react';
import ReactMapboxGl, {GeoJSONLayer, Layer, Marker, Popup} from 'react-mapbox-gl';

let {token, styles} = require('../configs/config.json');

const parks = require('../data/parks.json');

const Map = ReactMapboxGl({
    accessToken: token,
});

const mapStyle = {
    width: '100%',
    height: '85vh',
    align: "center"
};

const testJson = require('../data/test.json');

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
    'fill-extrusion-opacity': 0.3
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
                    <div style={{width: "45px", height: '45px'}}>
                        <MapsPinDrop style={{height: "100%", width: "100%"}} color={red700}/>
                    </div>

                </Marker>
                {this.props.searchResults.map(function (item) {
                    return(
                        <div>
                            <Marker
                                coordinates={item.coordinate}
                                style={{width: "35px", height: '35px'}}
                                anchor="center"
                                className="home-pin"
                            >
                                <div style={{width: "45px", height: '45px'}}>
                                    <MapsPinDrop style={{height: "100%", width: "100%"}} color={red700}/>
                                </div>
                            </Marker>
                            <GeoJSONLayer
                                data={parks[item.name]}
                                fillExtrusionLayout={{visibility: 'visible'}}
                                fillExtrusionPaint={fillExtrusionPaint}
                                symbolLayout={symbolLayout}
                                symbolPaint={symbolPaint}
                                // fillExtrusionOnClick={this.onClickPaint}
                                // fillOnClick={this.onClickPaint}
                            />
                        </div>
                    )
                })}

                <GeoJSONLayer
                    data={testJson}
                    fillExtrusionLayout={{visibility: 'visible'}}
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
