import styled from 'styled-components/native';
import {colors} from '../../assets/colors';

export const Content = styled.View`
  flex: 1;
  padding: 25px 15px;
  background-color: ${colors.light_blue};
`;

export const ContentTitle = styled.Text`
  font-size: 24px;
  color: ${colors.light_black};
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const ContainerControls = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
