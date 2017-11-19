import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, Dialog, RaisedButton} from "material-ui";

const image = require('../images/wordcloud-CarltonNorth.jpg');

class InformationDialog extends Component {
    handleClose = () => {
        this.props.onUpdate({dialogOpen: false})
    };

    render() {
        return (
            <div>
                <Dialog
                    title="Dialog With Date Picker"
                    modal={false}
                    open={this.props.dialogOpen}
                    onRequestClose={this.handleClose}
                    actions={[<FlatButton
                        label="Close"
                        primary={true}
                        onClick={this.handleClose}
                    />]}
                >
                    <Card>
                        <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                        />
                        <CardMedia
                            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}
                        >
                            <img src={image} alt="" height={"100vh"}/>
                        </CardMedia>
                        <CardTitle title="Card title" subtitle="Card subtitle"/>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>

                    </Card>
                </Dialog>
            </div>

        );
    }
}

export default InformationDialog;