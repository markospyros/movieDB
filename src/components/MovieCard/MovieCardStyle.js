import styled from "styled-components/native";
import { t } from "react-native-tailwindcss";

export const Container = styled.TouchableOpacity`
  ${[t.mX20, t.mY5, t.roundedLg, t.bgGray300]}
`;

export const LabelTextContainer = styled.View`
  ${[t.flexCol, t.p2]}
`;

export const LabelTextTitle = styled.Text`
  ${[t.fontBold]}
`;

export const RatingStyle = styled.View`
  ${[t.flexRow, t.p2]}
`;

export const NotRatedMessageStyle = styled.Text`
  ${[t.p2, t.fontBold, t.textRed600]}
`;
