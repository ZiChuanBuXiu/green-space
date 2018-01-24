import {Divider, Drawer, List, ListItem, LinearProgress, Subheader} from 'material-ui';
import {yellow500, cyan300} from 'material-ui/styles/colors';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import React, {Component} from 'react';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const ranksToText = {
  1: 'First choice:',
  2: 'Second choice:',
  3: 'Third choice:'
};

class RankMenu extends Component {
  render() {
    let self = this;
    return (
      <Drawer
        zDepth={4}
        open={this.props.isDrawerOpen}
        style={style}
        containerStyle={{height: '66%', top: '100px', margin: '15px'}}>
        <List>
          <Subheader style={{backgroundColor: cyan300}}>Recommendations:</Subheader>
          <Divider/>
          {
            this.props.searchResults.map(function (result, i) {
              return (
                <div>
                  <ListItem
                    leftIcon={<ActionGrade color={yellow500}/>}
                    style={{height: '100px'}}
                    onClick={() => {
                      self.props.onUpdate({center: result.coordinates});
                    }}
                  >
                    <p style={{marginTop: 5, marginBottom: 5, fontSize: '15px'}}>{result.name}</p>
                    <div marginHeight={'5px'}>
                      <p style={{marginTop: 5, marginBottom: 5, fontSize: '10px'}}>Polarity:</p>
                      <div>
                        <LinearProgress
                          style={{marginTop: 5, marginBottom: 5}}
                          min={0}
                          max={100} mode={'determinate'}
                          value={Math.random()*100 + 1}/>
                      </div>
                      <p style={{marginTop: 5, marginBottom: 5, fontSize: '10px'}}>Popularity:</p>
                      <LinearProgress
                        style={{marginTop: 5, marginBottom: 5}}
                        min={0}
                        max={100} mode={'determinate'}
                        value={Math.random()*100 + 1}/>
                    </div>
                    {/*<div width={'100%'} marginHeight={'15px'}>*/}
                    {/*<div style={{float: 'left', width: '50%'}}><text fontSize={"20px"}>Popularity:</text></div>*/}
                    {/*<div style={{float: 'right', width: '50%'}}><LinearProgress*/}
                    {/*style={{width: '90%', align: 'center'}} min={0}*/}
                    {/*max={100} mode={'determinate'}*/}
                    {/*value={60}/></div>*/}
                    {/*</div>*/}
                    {/*<br/>*/}
                    {/*<div width={'100%'} marginHeight={'5px'}>*/}
                    {/*<div style={{float: 'left', width: '50%'}}><text fontSize={"10px"}>Polarity:</text></div>*/}
                    {/*<div style={{float: 'right', width: '50%'}}><LinearProgress*/}
                    {/*min={0}*/}
                    {/*max={100} mode={'determinate'}*/}
                    {/*value={60}/></div>*/}
                    {/*</div>*/}
                  </ListItem>
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