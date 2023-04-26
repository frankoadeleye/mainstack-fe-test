import Link from "next/link";
import styled from "styled-components";
import mediaDevices from "utils/functions/media-device";
import { FontSizeFor } from "utils/functions/font-size-for";

export const SidebarBlock = styled.div`
  width: 304px;
  border-right: 1px solid ${({ theme }) => theme.color.border};
  display: none;
  height: 100vh;
  flex-direction: column;
  padding-top: 38.75px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  .active {
    color: #ff5403;
    border-left: 2px solid #ff5403;

    svg {
      path {
        fill: #ff5403;
      }
    }
  }

  ${mediaDevices.laptop`
     display: flex;
  `}
`;

export const SidebarItemBlock = styled(Link)`
  width: 100%;
  padding-left: 63.58px;
  display: flex;
  alignt-items: center;
  gap: 15.4px;
  cursor: pointer;
`;

export const SidebarPartition = styled.div`
  padding-left: 63.58px;
  display: flex;
  alignt-items: center;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
`;

export const SBItemText = styled.div`
  ${FontSizeFor.NormalText};
`;

export const SidebarItemsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 52.75px;
  gap: 36px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const IconWrap = styled.div`
  width: auto;
  height: auto;
  position: relative;
  top: 2px;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  line-height: 16px;
  color: #4d5760;
  padding-left: 63.58px;
`;

export const AvatarWrap = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;

  img{
   width: 32px;
   border-radius: 50%;
   height: 32px;
   object-fit: contain;
  }
`;
