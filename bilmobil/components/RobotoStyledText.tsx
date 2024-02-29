import { Text, TextProps } from './Themed';
import { useFonts } from 'expo-font';
export default function RobotoStyledText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Roboto' }]}/>;
}
