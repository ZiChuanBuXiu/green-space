import {red700, amber700} from 'material-ui/styles/colors';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import MapsPinDrop from 'material-ui/svg-icons/maps/pin-drop';
import React, {Component} from 'react';
import ReactMapboxGl, {GeoJSONLayer, Marker, Popup} from 'react-mapbox-gl';
import {Avatar, ListItem} from 'material-ui';

let {token, styles} = require('../configs/config.json');

const parks = require('../data/parks.json');

const tweet_icon = require('../images/tweet.svg');

const Map = ReactMapboxGl({
    accessToken: token,
});

const mapStyle = {
    width: '100%',
    height: '85vh',
    align: 'center'
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

const fillExtrusionPaint = {
    'fill-extrusion-color': 'blue',
    'fill-extrusion-opacity': 0.12
};


class MainMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeCoordinate: [144.971154, -37.815285],
            bound: [[144.972644, -37.820480], [144.979486, -37.829514]],
            popupCoordinate: null,
            popupContent: null
        }
    }

    onClickPaint = () => {
        this.props.onUpdate({dialogOpen: true});
        console.log('123');
    };

    render() {
        let self = this;
        return (
            <Map
                style={styles.outdoor}
                containerStyle={mapStyle}
                zoom={[15, 16]}
                center={this.props.center}
                fitBounds={[
                    [this.props.center[0] - 0.01, this.props.center[1] - 0.01],
                    [this.props.center[0] + 0.01, this.props.center[1] + 0.01]]}
                className={'mainMap'}
            >
                <Marker
                    coordinates={this.props.homeCoordinate}
                    style={{width: '35px', height: '35px'}}
                    anchor="top"
                    className="home-pin"
                >
                    <div style={{width: '45px', height: '45px'}}>
                        <MapsPinDrop style={{height: '100%', width: '100%'}} color={red700}/>
                    </div>
                </Marker>
                {this.props.searchResults.map(function (item, i) {
                    return (
                        <div>
                            {item.tweets.map(function (tweet) {
                                if(self.props.type === "Workout"){
                                    return (
                                        <Marker
                                            coordinates={tweet.coordinate}
                                            style={{width: '35px', height: '35px'}}
                                            anchor="center"
                                            className="tweet-pin"
                                        >
                                            <div style={{width: '25px', height: '25px'}} onClick={() => {
                                                self.setState({
                                                    popupCoordinate: tweet.coordinate,
                                                    popupContent: tweet.content,

                                                });
                                                self.props.onUpdate({
                                                    center: tweet.coordinate
                                                });
                                            }}>
                                                <img alt={'1'} src={tweet_icon} style={{height: '100%', width: '100%'}}/>
                                            </div>
                                        </Marker>)
                                }
                            })}
                            <Marker
                                coordinates={item.coordinate}
                                style={{width: '35px', height: '35px'}}
                                anchor="center"
                                className="home-pin"
                            >
                                <div style={{width: '45px', height: '45px'}} onClick={() => {
                                    self.props.onUpdate({
                                        dialogOpen: true,
                                        focusedPark: item.name
                                    });
                                }}>
                                    <ActionGrade style={{height: '100%', width: '100%'}} color={amber700}/>
                                </div>
                            </Marker>
                            <GeoJSONLayer
                                data={parks[item.name]}
                                fillExtrusionLayout={{
                                    visibility: 'visible'
                                }}
                                fillExtrusionPaint={fillExtrusionPaint}
                                symbolLayout={symbolLayout}
                                symbolPaint={symbolPaint}
                                // fillExtrusionOnClick={self.onClickPaint}
                                // fillOnClick={self.onClickPaint}
                            />
                        </div>
                    )
                })}
                {
                    this.state.popupCoordinate && (
                        <Popup
                            coordinates={this.state.popupCoordinate}
                            anchor={'bottom-left'}
                            offset={{
                                'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
                            }}
                        >
                            <button style={{
                                color: 'red',
                                position: 'absolute',
                                top: 0,
                                right: 0
                            }}
                                    onClick={() => {
                                        self.setState({
                                            popupCoordinate: null,
                                            popupContent: null
                                        })
                                    }}
                            >x
                            </button>
                            <ListItem
                                disabled={true}
                                leftAvatar={
                                    <Avatar src={require('../images/tweet.svg')} size={30}/>
                                }
                                style={{
                                    wordWrap: 'break-word',
                                    width: '250px'
                                }}
                            >
                                {this.state.popupContent}
                            </ListItem>
                        </Popup>
                    )
                }
            </Map>
        );
    }
}

export default MainMap;
