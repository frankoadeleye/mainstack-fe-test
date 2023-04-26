import styled from "styled-components";
import { FontSizeFor } from "utils/functions/font-size-for";

/* DB = Dashboard */

export const DBHeaderBlock = styled.div`
  color: ${({ theme }) => theme.color.text};
  ${FontSizeFor.categoryHeaderText};
  height: 68px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-weight: bold;
  letter-spacing: -0.015em;
`;
