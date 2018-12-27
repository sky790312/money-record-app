import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class Record extends Component {
  constructor(props) {
    super(props);

    // const {
    // } = props.onBack;
  }

  render() {
    // const {
    //   state: {
    //   },
    //   props: {
    //     onBack
    //   }
    // } = this;

    return (
      <View>
        <Text>in record page!</Text>
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

export default Record;
