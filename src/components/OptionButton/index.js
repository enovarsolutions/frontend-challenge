import React from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';

function OptionButton({children, methodOnPress}) {
  return (
    <TouchableOpacity style={styles.itemValue} onPress={methodOnPress}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemValue: {
    height: 70,
    width: 190,
    backgroundColor: '#fff',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 5
  },
})

export default OptionButton;