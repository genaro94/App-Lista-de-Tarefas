import React, {useState} from 'react';
import styled from 'styled-components/native';

const AdditemArea = styled.View`
  background-color: #ccc;
  padding: 10px;
`;

const AddItemInput = styled.TextInput`
  background-color: #fff;
  font-size: 15px;
  height: 50px;
  border-radius: 5px;
  padding: 15px;
`;

export default props => {
  const [item, setItem] = useState('');
  const handleSumit = () => {
    if (item.trim() != '') {
      props.onAdd(item.trim());
      setItem('');
    }
  };

  return (
    <AdditemArea>
      <AddItemInput
        placeholder="Digite um novo item"
        onChangeText={e => setItem(e)}
        onSubmitEditing={handleSumit}
        returnKeyType="send"
      />
    </AdditemArea>
  );
};
