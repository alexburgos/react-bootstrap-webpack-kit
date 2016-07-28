import React, { PropTypes, Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import getQueryString from '../util.js';
import { Leaderboard, MemeGenerator, Unlock, HashtagFaceoff } from './Experiences'

//offerpop colors
const sanMarino = '#4977AD',
      dandelion = '#F4E334',
      fireBush  = '#E89230';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: sanMarino,
    primary2Color: dandelion,
    accent1Color: fireBush
  },
  raisedButton: {
    backgroundColor: dandelion,
    primaryTextColot: '#000000'
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1,
      demo: ''
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  handleSubmit = () => console.log('submit form');

  componentDidMount() {
    let experience = getQueryString('experience');
    console.log(experience);
    this.setState({
      demo: experience
    })
  }

  render() {
    let { demo } = this.state;
    let content;

    switch (demo) {
      case 'leaderboard':
        content = (<Leaderboard/>)
        break;
      case 'unlock':
        content = (<Unlock/>)
        break;
      case 'memegenerator':
        content = (<MemeGenerator/>)
        break;
      case 'hashtagfaceoff':
        content = (<HashtagFaceoff/>)
        break;
      default:
        content = (<h1>Hello Offerpop</h1>)
    }

    return (
      <div>
        <section className="OPExperience__container">
          {content}
        </section>
        <section className="OPExperience__form">
        <h2>Want one of these custom Experiences?</h2>
        <MuiThemeProvider theme={muiTheme}>
          <form>
            <label>Contact us</label>
            <br/>
            <TextField
              hintText="Name"
            />
            <br/>
            <TextField
              hintText="Email"
            />
            <br/>
            <label>Select an Experience</label>
            <br/>
            <SelectField value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Leaderboard" />
              <MenuItem value={2} primaryText="MemeGenerator" />
              <MenuItem value={3} primaryText="PopToUnlock" />
              <MenuItem value={4} primaryText="HashtagFaceoff" />
            </SelectField>
            <br/>
            <RaisedButton label="Submit" primary={true} onClick={this.handleSubmit}/>
          </form>
        </MuiThemeProvider>
        </section>
      </div>
    )
  }
}

export default App;
