import styled from "styled-components";
import { PerfectlyCentered } from "utils/functions/perfectly-centered";

export const TabsWrap = styled.div`
  width: 100%;
  height: auto;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const TabsBlock = styled.div`
  display: flex;
  gap: 12px;
  margin: 23px 0px;
  min-width: 500px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const TabBlock = styled.div<{ isActive: boolean }>`
  min-width: 84px;
  height: 40px;
  cursor: pointer;
  font-size: 14px;
  ${PerfectlyCentered};
  border-style: solid;
  text-align: center;
  padding: 0px 16px;
  border-width: 1px;
  color: ${({ theme }) => theme.color.text};
  border-color: ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};

  ${(props) =>
    props.isActive &&
    `
     border-color: #FF5403;
     color:#FF5403;
     background: #FFDDCD;
    `}
`;
