import MainMap from '../components/MainMap';
import React,{Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionFindInPage from 'material-ui/svg-icons/action/find-in-page'

class SearchMap extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: true
        }
    }

    render(){
        return(
            <div>
                <MainMap/>
                <FloatingActionButton style={{position: "right"}}>
                    <ActionFindInPage/>
                </FloatingActionButton>
            </div>
        );
    }
}

export default SearchMap;