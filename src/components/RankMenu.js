import {Divider, Drawer, List, ListItem, Subheader} from "material-ui";
import {yellow500, cyan300} from "material-ui/styles/colors";

import ActionGrade from 'material-ui/svg-icons/action/grade';
import React, {Component} from 'react';

const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
};

const ranksToText = {
    1: "First choice:",
    2: "Second choice:",
    3: "Third choice:"
};

class RankMenu extends Component {
    render() {
        let self = this;
        return (
            <Drawer
                zDepth={4}
                open={this.props.isDrawerOpen}
                style={style}
                containerStyle={{height: "60%", top: "100px", margin: "15px"}}>
                <List>
                    <Subheader style={{backgroundColor: cyan300}}>Recommendations:</Subheader>
                    <Divider/>
                    {
                        this.props.searchResults.map(function (result, i) {
                            return (
                                <div>
                                    <ListItem
                                        leftIcon={<ActionGrade color={yellow500}/>}
                                        primaryText={ranksToText[i + 1]}
                                        secondaryText={result.name}
                                        onClick={() => {
                                            self.props.onUpdate({center: result.coordinates});
                                        }}
                                    />
                                    <Divider/>
                                </div>
                            )
                        })}
                </List>
            </Drawer>
        );
    }
}

export default RankMenu;