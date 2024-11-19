import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import MyContext from '../context/context';
import AntDesign from '@expo/vector-icons/AntDesign';

const CategoryBtn = ({ title,category }) => {
  const { appTheme,toggleItem } = useContext(MyContext);
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked(!isChecked);

    toggleItem(category);
  };

  return (
    <View style={{ marginVertical: 5, marginHorizontal: 5 }}>
      <Pressable
        onPress={toggleChecked}
        style={[
          styles.btn,
          isChecked
            ? { backgroundColor: appTheme }
            : { backgroundColor: 'transparent', borderColor: appTheme, borderWidth: 1 },
        ]}
      >
        {
           isChecked &&
          <AntDesign name="check" size={20} color="white" style={{marginHorizontal:3}} />  
        }
        
        <Text style={[styles.text, { color: isChecked ? 'white' : appTheme }]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryBtn;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
