import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, Dialog, RaisedButton} from 'material-ui';

const parks = require('../data/parks.json');

let parkWordCloudImagesSocial = {};
let parkWordCloudImagesRelax = {};
let parkWordCloudImagesWorkout = {};

for (let park in parks) {
    if (parks.hasOwnProperty(park)) {
        parkWordCloudImagesSocial[park] = require(`../images/wordclouds/social_${park}.png`);
        parkWordCloudImagesRelax[park] = require(`../images/wordclouds/relax_${park}.png`);
        parkWordCloudImagesWorkout[park] = require(`../images/wordclouds/workout_${park}.png`);
    }
}

let parkWordCloudImages = {
    Workout: parkWordCloudImagesWorkout,
    Relax: parkWordCloudImagesRelax,
    Social: parkWordCloudImagesSocial
};


console.log(parkWordCloudImages);

class InformationDialog extends Component {
    handleClose = () => {
        this.props.onUpdate({dialogOpen: false})
    };

    render() {
        return (
            <div>
                <Dialog
                    modal={false}
                    open={this.props.dialogOpen}
                    onRequestClose={this.handleClose}
                    actions={[<FlatButton
                        label="Close"
                        primary={true}
                        onClick={this.handleClose}
                    />]}
                >
                    <Card style={{height: '100%', width: '100%', margin: '12'}}>
                        <CardMedia
                            overlay={<CardTitle title={this.props.focusedPark}
                                                subtitle={`Word cloud for ${this.props.type}`}/>}
                        >
                            <img src={parkWordCloudImages[this.props.type][this.props.focusedPark]} alt="" height={450}
                                 width={200}/>
                        </CardMedia>
                    </Card>
                </Dialog>
            </div>

        );
    }
}

export default InformationDialog;