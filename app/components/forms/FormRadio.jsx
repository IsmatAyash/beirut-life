import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, SIZES } from '../../constants';

const FormRadio = ({ icon, placeholder }) => {
  const [current, setCurrent] = useState('test');

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={24} color={COLORS.gray} />
      <Text style={{ color: COLORS.gray }}>{placeholder} </Text>

      <RadioButtonGroup
        containerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground={COLORS.teal}
      >
        <RadioButtonItem
          value="Female"
          label={<Text style={{ marginRight: 15 }}>Female</Text>}
        />
        <RadioButtonItem value="Male" label="Male" />
      </RadioButtonGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    borderRadius: SIZES.font,
    flexDirection: 'row',
    padding: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default FormRadio;
