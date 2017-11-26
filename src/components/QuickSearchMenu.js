import React, {Component} from 'react';
import {Dialog, FlatButton, Paper} from 'material-ui';

const style = {
    height: '100',
    width: '40',
    margin: 20,
    textAlign: 'center',
};

const searchResults = [
    {
        "name": "Carlton Gardens South",
        "coordinate": [144.971298, -37.806056],
        "tweets":[
            {"coordinate": [144.971398, -37.806156], "content": "What a nice dat today!"},
            {"coordinate": [144.971498, -37.806256], "content": "What a nice dat today!"},
            {"coordinate": [144.972398, -37.805156], "content": "What a nice dat today!"}
        ]
    },
    {
        "name": "Royal Botanic Gardens",
        "coordinate": [144.979486, -37.829514],
        "tweets":[]
    },
    {
        "name": "Alexandra Gardens",
        "coordinate": [144.972644, -37.820480],
        "tweets":[]
    }
];

class QuickSearchMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => {
                    this.props.onUpdate({menuOpen: false})
                }}
            />,
        ];
        return (<Dialog
            title="Make your choice:"
            actions={actions}
            modal={false}
            open={this.props.menuOpen}
            onRequestClose={() => {
                this.state.onUpdate({menuOpen: false})
            }}
        >
            <Paper style={style} zDepth={3}>
                <FlatButton
                    label={'Just give me some recommendations!'}
                    primary={true}
                    style={{width: '100%', height: '140'}}
                    onClick={() => {
                        this.props.onUpdate({
                            searchResults: searchResults,
                            menuOpen: false,
                            isDrawerOpen: true
                        })
                    }}
                />
            </Paper>
            <Paper style={style} zDepth={3}>
                <FlatButton
                    label={'My place, my rule!'}
                    primary={true}
                    style={{width: '100%', height: '140'}}
                    onClick={() => {
                        this.props.onUpdate({
                            menuOpen: false,
                            isStepperVisible: true
                        })
                    }}
                />
            </Paper>
        </Dialog>)
    }
}

export default QuickSearchMenu;