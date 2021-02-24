import React from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';

// import { Container } from './styles';

function OptionButton({children}) {
  return (
      <TouchableOpacity style={styles.caixa}>
          {children}
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    caixa: {
        backgroundColor: '#fff',
        marginBottom: 15,
        height: 70,
        width: 190,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        elevation: 5
      },
})

export default OptionButton;