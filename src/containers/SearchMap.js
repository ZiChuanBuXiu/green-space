import MainMap from '../components/MainMap';
import React,{Component} from 'react';
import SearchStepper from "../components/SearchStepper";


class SearchMap extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: true,
        }
    }

    render(){
        return(
            <div>
                <MainMap/>
                <SearchStepper isStepperVisible={this.props.isStepperVisible} onUpdate={this.props.onUpdate}/>
            </div>
        );
    }
}

export default SearchMap;