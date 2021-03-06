import styled from 'styled-components/native';
import { COLORS } from '@/constants/styles';

export const AppWrapperStyledView = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;