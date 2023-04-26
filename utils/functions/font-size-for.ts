import { css } from "styled-components";

export const FontSizeFor = {
  NormalText: css`
    @media (min-width: 200px) {
      font-size: 10px;
    }

    @media (min-width: 320px) {
      font-size: 12px;
    }

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 22px;
    }

    @media (min-width: 1200px) {
      font-size: 16px;
      line-height: 24px;
    }

    @media (min-width: 1800px) {
      font-size: 18px;
      line-height: 28px;
    }

    @media (min-width: 2200px) {
      font-size: 24px;
      line-height: 32px;
    }
  `,
  categoryHeaderText: css`
    @media (min-width: 200px) {
      font-size: 14px;
    }

    @media (min-width: 320px) {
      font-size: 14px;
      line-height: 22px;
    }

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 28px;
    }

    @media (min-width: 1024px) {
      font-size: 24px;
      line-height: 32px;
    }
  `,
  HeaderText: css`
    @media (min-width: 200px) {
      font-size: 14px;
    }

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 42px;
    }

    @media (min-width: 1024px) {
      font-size: 24px;
      line-height: 29px;
    }
  `,
};
