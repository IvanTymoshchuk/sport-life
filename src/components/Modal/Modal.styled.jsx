import styled from '@emotion/styled';
import { colors, button, mq } from '../../utils';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backdrop};
`;

export const ModalWrap = styled.div`
  border: 1px solid ${colors.textWhite02};
  box-sizing: border-box;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 335px;
  padding: 48px 0;
  border-radius: 8px;
  background-color: ${colors.modalBlack};
  z-index: 1;

  ${mq.tablet} {
    min-width: 430px;
    padding: 48px 32px;
    box-sizing: content-box;
  }
`;

export const ButtonExit = styled.button`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  ${button}
`;

export const Svg = styled.svg`
  fill: ${colors.grey};
  width: 24px;
  height: 24px;
`;
