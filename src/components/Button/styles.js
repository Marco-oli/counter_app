import styled from 'styled-components/native';
import {colors} from '../../assets/colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.gray};
  height: 65px;
  width: ${({width}) => (width ? width : '100%')};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  shadowColor: "#000";
  shadowOffset: {
    width: 0,
    height: 2px
  };
  shadowOpacity: 0.25px;
  shadowRadius: 3.84px;
  elevation: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.light_blue_2};
  width: 110px;
  text-align: center;
`;
