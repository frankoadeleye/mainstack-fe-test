import styled from "styled-components";
import { PerfectlyCentered } from "utils/functions/perfectly-centered";

/*RC = Report Card */

export const ReportCardBlock = styled.div`
  display: flex;
  min-width: 300px;
  flex: 1 1 0;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  flex-direction: column;
  padding: 26px 24px;
  gap: 42px;
`;

export const RCHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;

  div: first-child {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.color.text};
  }

  div: last-child {
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.sidebarItemActive};
  }
`;

export const RCContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  justify-content: space-between;
`;

export const RCGraphData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

export const RCChart = styled.div`
  width: 160.56px;
  height: 160.56px;
  border-radius: 50%;
`;

export const RCDataElementBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

/* RCDE = Report Card Data Element */

export const RCDEText = styled.div`
  font-size: 16px;
  line-height: 140%;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.text};
`;

export const RCDataImgWrap = styled.div`
  width: 21px;
  height: 15px;
  position: relative;
`;

export const RCDEDot = styled.div<{ bgColor: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor || ""};
`;
