import React, { Component } from 'react';
import styled from 'styled-components/native';
import { COLORS } from '@/constants/styles';
import CalendarContainer from '@/views/CalendarContainer';

const StyledView = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export default class App extends Component {
  render() {
    return (
      <StyledView>
        <CalendarContainer></CalendarContainer>
      </StyledView>
    );
  }
}
