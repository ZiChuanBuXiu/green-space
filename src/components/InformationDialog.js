import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, Dialog, RaisedButton} from "material-ui";

const parks = require('../data/parks.json');

let parkWordCloudImages = {};

for (let park in parks){
    if (parks.hasOwnProperty(park)){
        parkWordCloudImages[park] = require(`../images/wordclouds/${park}.png`);
    }
}

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
                    <Card style={{height: "100%" , width: "100%" ,margin: "12"}}>
                        <CardMedia
                            overlay={<CardTitle title={this.props.focusedPark} subtitle="Word cloud"/>}
                        >
                            <img src={parkWordCloudImages[this.props.focusedPark]} alt="" height={450} width={200}/>
                        </CardMedia>
                    </Card>
                </Dialog>
            </div>

        );
    }
}

export default InformationDialog;