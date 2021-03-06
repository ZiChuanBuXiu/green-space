import MainMap from '../components/MainMap';
import React, {Component} from 'react';
import SearchStepper from '../components/SearchStepper';
import {IconButton} from 'material-ui';

import ActionSearch from 'material-ui/svg-icons/action/search';
import AppBar from 'material-ui/AppBar';
import RankMenu from '../components/RankMenu';
import InformationDialog from '../components/InformationDialog';
import QuickSearchMenu from '../components/QuickSearchMenu';

class SearchMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            homeCoordinate: [144.971154, -37.815285],
            isStepperVisible: false,
            searchResults: [],
            isDrawerOpen: false,
            pointing: null,
            center: [144.971154, -37.815285],
            dialogOpen: false,
            menuOpen: false,
            focusedPark: null,
            type: "Workout"
        }
    }

    onUpdate = (data) => {
        this.setState(data);
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Green Space Recommendation"
                    iconElementRight={<IconButton onClick={() => {
                        this.setState({menuOpen: true})
                    }}>
                        <ActionSearch/>
                    </IconButton>}>
                </AppBar>
                <MainMap
                    homeCoordinate={this.state.homeCoordinate}
                    center={this.state.center}
                    searchResults={this.state.searchResults}
                    pointing={this.state.pointing}
                    onUpdate={this.onUpdate.bind(this)}
                    type={this.state.type}
            />}
                <SearchStepper
                    isStepperVisible={this.state.isStepperVisible}
                    onUpdate={this.onUpdate.bind(this)}
                />
                <RankMenu
                    isDrawerOpen={this.state.isDrawerOpen}
                    searchResults={this.state.searchResults}
                    onUpdate={this.onUpdate.bind(this)}
                />
                <InformationDialog
                    dialogOpen={this.state.dialogOpen}
                    onUpdate={this.onUpdate.bind(this)}
                    focusedPark={this.state.focusedPark}
                    type={this.state.type}
                />
                <QuickSearchMenu
                    menuOpen={this.state.menuOpen}
                    onUpdate={this.onUpdate.bind(this)}
                />
            </div>
        );
    }
}

export default SearchMap;