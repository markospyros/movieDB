import styled from "styled-components";
import { t } from "react-native-tailwindcss";

export const TitleStyleContainer = styled.View`
  ${[t.pX10, t.pT5]}
`;

export const TitleStyleText = styled.Text`
  ${[t.fontBold, t.textLg]}
`;

export const DescriptionStyleContainer = styled.View`
  ${[t.pX10, t.pT5]}
`;

export const DescriptionStyleText = styled.Text`
  ${[t.fontMedium, t.trackingWidest]}
`;

export const RatingStyle = styled.View`
  ${[t.flexRow, t.pX10, t.pT5]}
`;

export const NotRatedMessageStyle = styled.Text`
  ${[t.pT5, t.pX10, t.fontBold, t.textRed600]}
`;
