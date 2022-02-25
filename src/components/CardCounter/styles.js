import styled from 'styled-components/native';
import {colors} from '../../assets/colors';

export const Container = styled.TouchableOpacity`
  height: 200px;
  border: 2px solid ${colors.dark_blue};
  margin-bottom: 40px;
  padding: 15px;
  background-color: ${colors.gray};
  border-radius: 5px;
`;

export const Gradient = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${colors.light_blue_3};
`;

export const CardTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.light_gray};
`;

export const ContainerCount = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Counter = styled.Text`
  font-size: 65px;
  font-weight: bold;
  color: ${colors.light_black};
`;
