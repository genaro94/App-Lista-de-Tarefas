import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableHighlight`
  padding: 10px;
  background-color: #eee;
  flex-direction: row;
  height: 50px;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #ccc;
  background-color: ${props => (props.done ? 'red' : 'transparent')};
`;

export default props => {
  return (
    <Item onPress={props.onPress} underlayColor="#ddd" activeOpacity={1}>
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck done={props.data.done}></ItemCheck>
      </>
    </Item>
  );
};
