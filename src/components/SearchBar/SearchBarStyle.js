import styled from "styled-components/native";
import { t } from "react-native-tailwindcss";

export const Container = styled.View`
  ${[t.bgGray200, t.p5, t.roundedFull, t.justifyBetween, t.flexRow]}
`;

export const Input = styled.TextInput`
  ${[t.textBase, t.w5_6]}
`;

export const IconContainer = styled.TouchableOpacity`
  ${[t.pPx]}
`;
