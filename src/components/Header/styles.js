import styled from 'styled-components/native';
import {colors} from '../../assets/colors';

export const Container = styled.View`
  height: 130px;
  background-color: ${colors.dark_blue};
  justify-content: flex-end;
`;

export const HeaderText = styled.Text`
  color: ${colors.white};
  font-size: 36px;
  padding: 10px 15px;
  font-weight: bold;
`;
