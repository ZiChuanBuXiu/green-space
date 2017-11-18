import React from 'react';
import AppBar from "material-ui/AppBar";
import ActionSearch from 'material-ui/svg-icons/action/search';
import {IconButton} from "material-ui";
import SearchMap from "./containers/SearchMap";
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';

const style = {
    margin: 12,
}

const MainContainer = () => (
    <div>
        <AppBar title="Green Space Recommendation" iconElementRight={<IconButton><ActionSearch/></IconButton>}>
        </AppBar>
        <SearchMap/>
    </div>
);

export default MainContainer;