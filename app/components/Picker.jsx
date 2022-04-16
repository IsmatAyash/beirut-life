import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
  Modal,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFormikContext } from 'formik';

import { COLORS, SIZES } from '../constants';
import Screen from './Screen';
import PickerItem from './PickerItem';

const AppPicker = ({
  icon,
  name,
  items,
  onSelectItem,
  placeholder,
  width = '100%',
  selectedItem,
  ...otherProps
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { setFieldValue } = useFormikContext();
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={SIZES.large}
              color={COLORS.secondary}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={SIZES.large}
            color={COLORS.secondary}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                  setFieldValue(name, item.label);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
  text: {
    flex: 1,
    color: COLORS.dark,
    fontSize: SIZES.font,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: COLORS.gray,
    flex: 1,
  },
});
export default AppPicker;
