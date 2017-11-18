import MainMap from '../components/MainMap';
import React, {Component} from 'react';
import SearchStepper from "../components/SearchStepper";


class SearchMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            homeCoordinate: [144.971154, -37.815285]
        }
    }

    onUpdate = (data) => {
        this.setState(data);
        this.props.onUpdate(data);
    };

    render() {
        return (
            <div>
                <MainMap homeCoordinate={this.state.homeCoordinate} center={this.state.homeCoordinate}/>
                <SearchStepper isStepperVisible={this.props.isStepperVisible} onUpdate={
                    this.onUpdate.bind(this)
                }/>
            </div>
        );
    }
}

export default SearchMap;