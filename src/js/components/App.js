import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { orange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: orange500,
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }


  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <div>
        <section className="OPSolutions__header">
          <h1 className="text-primary text-center">Leaderboard</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <section className="OPSolutions__products">
            <MuiThemeProvider muiTheme={muiTheme}>
            <div style={styles.container}>
            <Dialog
              open={this.state.open}
              title="Super Secret Password"
              actions={standardActions}
              onRequestClose={this.handleRequestClose}
            >
              1-2-3-4-5
            </Dialog>
            <h1>Material-UI</h1>
            <h2>example project</h2>
            <RaisedButton
              label="Super Secret Password"
              secondary={true}
              onTouchTap={this.handleTouchTap}
            />
          </div>
        </MuiThemeProvider>
          <div className="OPSolutions__products-container">
            <iframe src="http://offerpop.com/hashtag/gallery/8507" width="100%" height="2000px" frameBorder="0"></iframe>
          </div>
        </section>

        <section className="OPSolutions__form">

        </section>
      </div>
    )
  }
}

export default App;
