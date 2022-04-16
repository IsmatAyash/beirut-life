import { useState } from 'react';
import { useFormikContext } from 'formik';

import { Text, View, StyleSheet } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, SIZES } from '../../constants';

const FormRadio = ({ icon, name, placeholder }) => {
  const [current, setCurrent] = useState('Female');
  const { setFieldValue } = useFormikContext();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={24} color={COLORS.gray} />
      <Text style={{ color: COLORS.gray }}>{placeholder} </Text>

      <RadioButtonGroup
        containerStyle={styles.containerStyle}
        selected={current}
        onSelected={(value) => {
          setCurrent(value);
          setFieldValue(name, value);
        }}
        radioBackground={COLORS.pink}
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
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
