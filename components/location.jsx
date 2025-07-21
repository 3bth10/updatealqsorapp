import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Dropdown() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ marginBottom: 10 }}>اختر المدينة:</Text>
      <RNPickerSelect
        onValueChange={(value) => console.log('المدينة المختارة:', value)}
        placeholder={{ label: 'اختر المدينة', value: null }}
        items={[
          { label: 'مكة', value: 'makkah' },
          { label: 'الطائف', value: 'altayf' },
          { label: 'جدة', value: 'jeddah' },
          { label: 'تربة', value: 'turabah' },
          { label: 'أضم', value: 'adham' },
          { label: 'الليث', value: 'al_lith' },
        ]}
        style={{
          inputIOS: {
            padding: 12,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 8,
            color: 'black',
          },
          inputAndroid: {
            padding: 12,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 8,
            color: 'black',
          },
        }}
      />
    </View>
  );
}
