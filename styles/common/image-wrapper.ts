import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;

export const ImageWrapperBlock = styled.div`
  width: 100%;

  > div {
    position: unset !important;
  }
`;
