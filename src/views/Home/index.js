import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

class Home extends Component {
  constructor(props) {
    super(props);

    // const {
    // } = props;

    // this.state = {
    // };
  }

  onPressButton() {
    const { navigate } = this.props.navigation;
    navigate('Record');
  }

  render() {
    return (
      <View>
        <Text>in home page!</Text>
        <Button
          title="Go to Record"
          onPress={() => this.onPressButton()}
        />
        <Calendar
        />
      </View>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     panoramas: state.liveTour.panoramas
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onFetchPanoramas: () => dispatch(actions.fetchPanoramas())
//   };
// };

// export default connect (
//  mapStateToProps,
//  mapDispatchToProps  
// )(CalendarContainer);

export default Home;
