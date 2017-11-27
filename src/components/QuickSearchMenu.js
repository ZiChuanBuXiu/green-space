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
        'name': 'Carlton Gardens South',
        'coordinate': [144.971298, -37.806056],
        'tweets': [{
            'coordinate': [144.97035602, -37.8058556],
            'content': 'Nothing beats a 6am morning chilly run to start the day #Melbourne #whatwerewethinking… '
        }, {
            'coordinate': [144.97183949, -37.80474889],
            'content': 'A walk in the park. ☔️ #jolomelb #royalexhibitionbuilding #carltongardens #melbourne @ Royal… '
        }, {
            'coordinate': [144.97027778, -37.80611111],
            'content': 'Enjoying melbourne\'s beautiful weather 👌 #Carltongardens #walks #melbourne #nature #australia @…'
        }, {
            'coordinate': [144.97178442, -37.80477536],
            'content': 'Not a bad place for my daily walk with yoda @ Royal Exhibition Building'
        }, {
            'coordinate': [144.97162897, -37.8044494], 'content': 'Morning city run @ Royal Exhibition Building '
        }]
    },
    {
        'name': 'Royal Botanic Gardens',
        'coordinate': [144.979486, -37.829514],
        'tweets': [{
            'coordinate': [144.98311761, -37.83194921],
            'content': 'Wednesday night run sesh along the Yarra River and The Tan with these speed demons! Great job tonight…'
        }, {
            'coordinate': [144.98455411, -37.82976053],
            'content': 'Nothing much. Just causally walking-over at the park 😂 @ Royal Botanical Gardens '
        }, {
            'coordinate': [144.98243168, -37.82937509],
            'content': 'Always nice to run along the Yarra. #recovery #run #learning2tri #sbr #trialliance #tricrazy #trilife… '
        }, {
            'coordinate': [144.9850074, -37.8302916],
            'content': 'Hot and Sweaty after my 4k run around the #Melbourne #Botanical #Garden TAN TRACK #me and my #Ute…'
        }, {
            'coordinate': [144.9850074, -37.8302916],
            'content': '10K run in this  certainly was NOT fun! #exausted #fitness 😵 @ The Tan Running Track,… '
        }]
    },
    {
        'name': 'Alexandra Gardens',
        'coordinate': [144.972644, -37.820480],
        'tweets': [{
            'coordinate': [144.9682, -37.8192],
            'content': 'I just finished running  miles in 38m:47s with #Endomondo #endorphins '
        }, {
            'coordinate': [144.9682465, -37.8192406],
            'content': 'Beautiful Winter walk! #winter #winterishere #socold #wrapupwarm #exploring #ilovethiscity…'
        }, {
            'coordinate': [144.97214638, -37.82049269],
            'content': 'Beautiful Winter walk! #winter #winterishere #socold #wrapupwarm #exploring #ilovethiscity…'
        }, {
            'coordinate': [144.96833333, -37.82027778],
            'content': 'We did it!! Third run of the series done. 🏃 mchughsie #proud #winning 👏💪❤️ @ Royal Botanical…'
        }, {
            'coordinate': [144.97310758, -37.82205093],
            'content': '#Melbourne this is why we love you! 😍🇦🇺 A 29km bike ride along the #CapitalCityTrail with the…'
        }]
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