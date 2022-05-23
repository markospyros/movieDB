import styled from "styled-components/native";
import { t } from "react-native-tailwindcss";

export const Container = styled.View`
  ${[t.pT10, t.pX6]}
`;

export const ErrorMessage = styled.Text`
  ${[t.fontBold, t.textRed600]}
`;

export const ButtonContainer = styled.View`
  ${[t.flexRow]}
`;
