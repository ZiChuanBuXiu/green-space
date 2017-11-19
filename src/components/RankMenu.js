import {Divider, Drawer, FlatButton, List, ListItem, Subheader} from "material-ui";
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
    constructor(props) {
        super(props)
    }

    render() {
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
                        this.props.ranks.map(function (rank, i) {
                            return (
                                <div>
                                    <ListItem
                                        leftIcon={<ActionGrade color={yellow500}/>}
                                        primaryText={ranksToText[i + 1]}
                                        secondaryText={rank}
                                        onMouseEnter={()=>{this.props.onUpdate({pointing: i})}}
                                        onMouseLeave={()=>{this.props.onUpdate({pointing: null})}}
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