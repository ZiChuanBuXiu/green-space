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
    "name": "Carlton Gardens South",
    "workout": {
      "polarity": 0.076710558,
      "popularity": 66,
      "score": 0.09236892099999999,
      "tweets": [
        {
          "content": "#bicycle #picnic @ Royal Exhibition Building ",
          "coordinate": [
            144.97359230308962,
            -37.804527861209685
          ]
        },
        {
          "content": "Enjoying melbourne's beautiful weather 👌🏼 #Carltongardens #walks #melbourne #nature #australia @… ",
          "coordinate": [
            144.97183949,
            -37.80474889
          ]
        },
        {
          "content": "It's easy to get up and run when it's sunny #runningintherain #bb12w #realpeople #realresults @… ",
          "coordinate": [
            144.97444143450227,
            -37.80499359155072
          ]
        }
      ]
    },
    "relax": {
      "polarity": 0.151780246,
      "popularity": 17,
      "score": 0.155813461,
      "tweets": [
        {
          "content": "Taking time out to relax #nature #peace #quiet #gardens @ Carlton Gardens ",
          "coordinate": [
            144.97111415,
            -37.80641752
          ]
        },
        {
          "content": "Sunny Sunday 🌿☀ #Melbourne #sunny #sunday #citylife #park #lovebirds #carltongardens #welovemelbourne… ",
          "coordinate": [
            144.97027778,
            -37.80611111
          ]
        },
        {
          "content": "#Melbourne #victoria lunchtime relaxation 😊 @ Royal Exhibition Building ",
          "coordinate": [
            144.9742257603205,
            -37.80476914044603
          ]
        }
      ]
    },
    "social": {
      "polarity": 0.163725005,
      "popularity": 70,
      "score": 0.18033236,
      "tweets": [
        {
          "content": "#inventive #picnic #warmbeer #soontobecoldbeer #gingerbeer meredith_t31 @ Carlton Gardens ",
          "coordinate": [
            144.97035602,
            -37.8058556
          ]
        },
        {
          "content": "Happy Birthday, Melbourne. #royalexhibitionbuilding #Melbourne #happybirthdaymelbourne @ Royal… ",
          "coordinate": [
            144.97393314461507,
            -37.80460864710131
          ]
        },
        {
          "content": "Happy birthday HERO SUBS ! @ The Grange ",
          "coordinate": [
            144.9742257603205,
            -37.80476914044603
          ]
        }
      ]
    },
    "coordinates": [
      144.9712319741523,
      -37.80629949495744
    ]
  },
  {
    "name": "Royal Botanic Gardens",
    "workout": {
      "polarity": 0.066216407,
      "popularity": 21,
      "score": 0.124227457,
      "tweets": [
        {
          "content": "On the run #Melbourne #palmtree #sky @ Royal Botanical Gardens ",
          "coordinate": [
            144.98243168,
            -37.82937509
          ]
        },
        {
          "content": "On the run #morning #melbourne #sun @ Royal Botanical Gardens ",
          "coordinate": [
            144.98243168,
            -37.83194921
          ]
        },
        {
          "content": "Always nice to run along the Yarra. #recovery #run #learning2tri #sbr #trialliance #tricrazy #trilife ",
          "coordinate": [
            144.98311761,
            -37.83194921
          ]
        }
      ]
    },
    "relax": {
      "polarity": 0.13619281,
      "popularity": 6,
      "score": 0.152767396,
      "tweets": [
        {
          "content": "Moonlight  chill 🌙💫📽✌🏻🌵🍷🍔 #MoonlightCinema #Melbourne #Summer #Picnic #BlossomHill #Movie… ",
          "coordinate": [
            144.97567351286543,
            -37.83112730612358
          ]
        },
        {
          "content": "Morning meditation. Good way to start the day. #meditate #underBRACKS @ Royal Botanical Gardens ",
          "coordinate": [
            144.98243168,
            -37.82937509
          ]
        },
        {
          "content": "Its a good time to relax isnt it? Feel the wind and the music with a cup of… (at The Terrace Tea Rooms) [pic] — ",
          "coordinate": [
            144.98236,
            -37.82948
          ]
        }
      ]
    },
    "social": {
      "polarity": 0.28670033699999997,
      "popularity": 11,
      "score": 0.317087077,
      "tweets": [
        {
          "content": "#food #picnic #sundayevening #outandabout @ Moonlight Cinema ",
          "coordinate": [
            144.97567351286543,
            -37.83112730612358
          ]
        },
        {
          "content": "#picnic #sun #melbourne #botanicgardens #summer @ Royal Botanical Garden ",
          "coordinate": [
            144.98119583,
            -37.83037482
          ]
        },
        {
          "content": "All set up.. #birthday #picnic @ Royal Botanical Gardens ",
          "coordinate": [
            144.97560636574374,
            -37.83082433178513
          ]
        }
      ]
    },
    "coordinates": [
      144.9755725656269,
      -37.82968011743966
    ]
  },
  {
    "name": "Alexandra Gardens",
    "workout": {
      "polarity": 0.08077506599999999,
      "popularity": 141,
      "score": 0.127202461,
      "tweets": [
        {
          "content": "😍😍 #melbourne #bridge #relax #walk #inspiration #me #kattyliz #singer #music #view #downtown #city @… ",
          "coordinate": [
            144.96815921537376,
            -37.82083695053791
          ]
        },
        {
          "content": "We did it!! Third run of the series done. 🏃🏻 mchughsie #proud #winning 👏🏻💪🏼❤️ @ Royal Botanical… ",
          "coordinate": [
            144.96811995990186,
            -37.82080573981826
          ]
        },
        {
          "content": "#Lovely walk around the river, not the cleanest of rivers but still a beautiful view. #Beautiful by… ",
          "coordinate": [
            144.9682465,
            -37.8192406
          ]
        }
      ]
    },
    "relax": {
      "polarity": 0.248101105,
      "popularity": 21,
      "score": 0.255015824,
      "tweets": [
        {
          "content": "#telstrareporter #midsumma #fun #hotguys ",
          "coordinate": [
            144.973152,
            -37.821032
          ]
        },
        {
          "content": "Moomba festival!\nWhat a wonderful day with hafypuffy! 😊😍👍#moombafestival #fun #weekend #friend @… ",
          "coordinate": [
            144.97415297,
            -37.82132521
          ]
        },
        {
          "content": "#midsumma #telstrareporter #telstrabooth #fun #telstrateam ",
          "coordinate": [
            144.97317,
            -37.821004
          ]
        }
      ]
    },
    "social": {
      "polarity": 0.14607936900000001,
      "popularity": 62,
      "score": 0.16649425199999998,
      "tweets": [
        {
          "content": "#littlepicnic #cutelittlepicnic #picnic #rug #food #dinner #picnicdinner #alexandragardens # @… ",
          "coordinate": [
            144.96815921537376,
            -37.82083695053791
          ]
        },
        {
          "content": "#clown #Moomba #arcade #prize #win #melbourne #seeaustralia #festival #fair #bigkid @ Moomba Festival… ",
          "coordinate": [
            144.97415297,
            -37.82132521
          ]
        },
        {
          "content": "Love these girls helgaaxelsson @georgiabeech #midsumma #festival #queerculture @ Alexandra Gardens ",
          "coordinate": [
            144.97184703,
            -37.82080738
          ]
        }
      ]
    },
    "coordinates": [
      144.97193022521608,
      -37.82066360663809
    ]
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