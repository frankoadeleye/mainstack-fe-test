import styled from "styled-components";
import mediaDevices from "utils/functions/media-device";
import { FontSizeFor } from "utils/functions/font-size-for";

/* DBL = 'DashBoardLayout */

export const DBLBlock = styled.div`
  min-width: 300px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  min-height: 1000px;
  padding: 0px 10px;

  ${mediaDevices.laptop`
     padding: 0px 60px;
  `}
`;

export const DBLGreeting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: 20px;
`;

export const DBLGreetingLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;

  div:first-child {
    letter-spacing: -0.015em;
    ${FontSizeFor.HeaderText};
  }

  div:last-child {
    color: ${({ theme }) => theme.color.small};
    font-size: 14px;
  }

  ${mediaDevices.laptop`
     gap: 10px;
  `}
`;

export const DBLGreetingRight = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.color.sidebarItemActive};
`;

export const DBLContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
