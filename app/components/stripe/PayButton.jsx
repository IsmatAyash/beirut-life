import React from 'react';
import {
  AccessibilityProps,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../../constants';

const PayButton = ({
  title,
  variant = 'default',
  disabled,
  loading,
  onPress,
  ...props
}) => {
  const titleElement = React.isValidElement(title) ? (
    title
  ) : (
    <Text style={[styles.text, variant === 'primary' && styles.textPrimary]}>
      {title}
    </Text>
  );
  return (
    <View style={disabled && styles.disabled}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.container,
          variant === 'primary' && styles.primaryContainer,
        ]}
        onPress={onPress}
        {...props}
      >
        {loading ? (
          <ActivityIndicator color={COLORS.white} size="small" />
        ) : (
          titleElement
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
    minWidth: 150,
  },
  primaryContainer: {
    backgroundColor: COLORS.dark_gray,
    alignItems: 'center',
  },
  text: {
    color: COLORS.slate,
    fontWeight: '600',
    fontSize: 16,
  },
  textPrimary: {
    color: COLORS.white,
  },
  disabled: {
    opacity: 0.3,
  },
});

export default PayButton;
