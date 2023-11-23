import React from 'react';
import { TextInput, Text, View, Pressable } from 'react-native';
import { useFormContext, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';

import { useTheme } from '@/hooks/theme';

import { getErrorMessage } from '@/components/tools/form/utils/get-errors.util';
import { InputProps } from './types/input.types';
import { styles } from './styles';

const Input = ({
  name,
  onChangeText,
  type,
  defaultValue,
  label,
  icon,
  iconAction,
  trailingIcon,
  trailingIconAction,
  ...rest
}: InputProps) => {
  const { theme } = useTheme();
  const {
    clearErrors,
    setValue,
    setError,
    formState: { errors },
  } = useFormContext();

  const stringfyedName = React.useMemo(() => name.toString(), [name]);

  const fieldError = React.useMemo(
    () => getErrorMessage(errors, stringfyedName),
    [errors, stringfyedName],
  );

  const handleChangeText = React.useCallback(
    (newText: string, onChange: (...event: any[]) => void) => {
      clearErrors();

      const isNumberType = type === 'number';
      const newValue = isNumberType ? +newText : newText;

      if (isNumberType && Number.isNaN(newValue)) {
        setError(stringfyedName, {
          message: 'Insira um número válido',
        });
      }

      if (onChangeText) onChangeText(newValue);
      onChange(newValue);
    },
    [onChangeText, clearErrors, setValue, stringfyedName],
  );

  return (
    <View style={styles.inputWrapper}>
      {label && (
        <Text
          style={[
            styles.label,
            {
              color: theme.colors.text.subtitle,
            },
          ]}
        >
          {label}
        </Text>
      )}
      <Controller
        name={stringfyedName}
        defaultValue={defaultValue}
        render={({ field }) => (
          <View
            style={[
              styles.container,
              {
                borderColor: !!fieldError ? '#a12' : theme.colors.primary,
                backgroundColor: theme.colors.background.principal,
              },
            ]}
          >
            {icon && (
              <Pressable onPress={() => (iconAction ? iconAction() : null)}>
                <Feather
                  name={icon as any}
                  color={theme.colors.primary}
                  size={24}
                  style={styles.icon}
                />
              </Pressable>
            )}
            <TextInput
              onChangeText={(newText) => {
                handleChangeText(newText, field.onChange);
              }}
              secureTextEntry={type === 'password'}
              placeholderTextColor={theme.colors.text.hint}
              style={[
                {
                  color: theme.colors.text.title,
                },
              ]}
              {...field}
              {...rest}
            />
            {trailingIcon && (
              <Pressable
                onPress={() =>
                  trailingIconAction ? trailingIconAction() : null
                }
                style={styles.trailingIcon}
              >
                <Feather
                  name={trailingIcon as any}
                  color={theme.colors.primary}
                  size={24}
                />
              </Pressable>
            )}
          </View>
        )}
      />
      {!!fieldError && (
        <View>
          <Text style={styles.error_message}>
            {fieldError.message || 'erro'}
          </Text>
        </View>
      )}
    </View>
  );
};

export { Input, InputProps };
