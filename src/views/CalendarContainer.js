import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

class CalendarContainer extends Component {
  render() {
    return (
      <View>
        <Text>in calendar container!</Text>
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

export default CalendarContainer;
