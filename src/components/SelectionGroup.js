import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup} from "material-ui";

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

class SelectionGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RadioButtonGroup name={this.props.name} defaultSelected="not_light">
                {this.props.items.map(function (item) {
                    return (
                        <RadioButton
                            value={item}
                            label={item}
                            style={styles.radioButton}
                        />
                    );
                })}
            </RadioButtonGroup>
        );
    }
}

export default SelectionGroup;