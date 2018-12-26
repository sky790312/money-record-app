import React, { Component } from 'react';
import CalendarContainer from '@/views/CalendarContainer';
import { AppWrapperStyledView } from './AppStyles';
export default class App extends Component {
  render() {
    return (
      <AppWrapperStyledView>
        <CalendarContainer></CalendarContainer>
      </AppWrapperStyledView>
    );
  }
}
