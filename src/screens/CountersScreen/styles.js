import styled from 'styled-components/native';
import {colors} from '../../assets/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.light_blue};
  padding: 25px 15px;
`;

export const ContainerEmptyText = styled.Text`
  align-items: flex-end;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  color: ${colors.light_gray};
  font-weight: bold;
`;
