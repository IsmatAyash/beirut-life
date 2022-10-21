import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFormikContext } from 'formik';
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, FONTS, SIZES } from '../constants';

const DatePicker = ({ icon, name, placeholderText, width = '100%' }) => {
  const { setFieldValue } = useFormikContext();
  const sourceMoment = moment(new Date());
  const sourceDate = sourceMoment.local().toDate();

  const [date, setDate] = useState(sourceDate);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === 'android') {
      setShow(false);
    }
    if (event.type === 'neutralButtonPressed') {
      setDate(sourceDate);
    } else {
      setDate(moment(currentDate).local().toDate());
      setFieldValue(name, moment(currentDate).local().toDate());
    }
  };

  const onCancel = () => {
    setDate(sourceDate);
    setShow(false);
  };

  const onDone = () => {
    setShow(false);
  };

  const renderDatePicker = () => (
    <DateTimePicker
      value={date}
      mode="date"
      display="spinner"
      onChange={onChange}
      placeholderText={placeholderText}
    />
  );

  const placeHolderColor = {
    color: date === sourceDate ? COLORS.white : COLORS.slate,
  };

  return (
    <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
      <View style={[styles.container, width]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={SIZES.large}
            color={COLORS.gray}
          />
        )}

        <Text style={[styles.text, placeHolderColor]}>
          {date !== sourceDate
            ? moment(date).format('DD/MM/YYYY')
            : placeholderText}
        </Text>
        {Platform.OS === 'android' && show && renderDatePicker()}
        {Platform.OS === 'ios' && (
          <Modal
            transparent={true}
            animationType="slide"
            visible={show}
            supportedOrientations={['portrait']}
            onRequestClose={() => setShow(false)}
          >
            <View style={styles.spinner}>
              <TouchableHighlight
                activeOpacity={1}
                visible={show}
                onPress={() => setShow(false)}
                style={styles.spinnerActiveLine}
              >
                <TouchableHighlight
                  underlayColor={COLORS.white}
                  onPress={() => console.log('date clicked')}
                  style={styles.spinnerDisabledLine}
                >
                  <View style={styles.pickerBox}>
                    <View style={styles.datePicker}>
                      <View style={{ marginTop: 10 }}>
                        {renderDatePicker()}
                      </View>
                      <TouchableHighlight
                        underlayColor={'transparent'}
                        style={[styles.btnText, styles.btnCancel]}
                        onPress={onCancel}
                      >
                        <Text style={styles.cancel}>CANCEL</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={'transparent'}
                        style={[styles.btnText, styles.btnDone]}
                        onPress={onDone}
                      >
                        <Text style={styles.done}>OK</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </TouchableHighlight>
              </TouchableHighlight>
            </View>
          </Modal>
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    flexDirection: 'row',
    marginVertical: 10,
    padding: 12,
  },
  text: { marginLeft: 5 },
  spinner: { flex: 1 },
  spinnerActiveLine: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  spinnerDisabledLine: {
    flex: 1,
    borderTopColor: COLORS.lightgray,
    borderTopWidth: 1,
  },
  datePicker: { marginTop: 5 },
  pickerBox: {
    backgroundColor: COLORS.white,
    height: 256,
    overflow: 'hidden',
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 30,
    paddingHorizontal: 20,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancel: { left: 0 },
  btnDone: { right: 0 },
  done: { fontFamily: FONTS.bold, color: COLORS.blue },
  cancel: { fontFamily: FONTS.bold, color: COLORS.blue },
});

export default DatePicker;
