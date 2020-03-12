import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListaItemSwipe = styled.TouchableHighlight`
  width: 100%;
  height: 50px;
  background-color: #ff0000;
  justify-content: center;
  padding-left: 15px;
`;

export default props => {
  return (
    <ListaItemSwipe onPress={props.onDelete} underlayColor="#ff3333">
      <Icon name="trash-o" size={18} color="#fff"></Icon>
    </ListaItemSwipe>
  );
};
