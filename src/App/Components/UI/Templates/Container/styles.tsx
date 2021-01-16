import styled from '@emotion/styled'

import { css } from '@emotion/react';

interface IContainerProps {
  align?: 'flex-start' | 'center' | 'flex-end';
  direction?:
    | 'row'
    | 'column'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'row-reverse'
    | 'column-reverse';
}

const styleAlign = (align: string): string => {
  switch (align) {
    case 'flex-start':
      return align;
    case 'flex-end':
      return align;
    case 'center':
      return align;
    default:
      return 'center';
  }
};

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: ${(props) => props && props.align};
  justify-content: center;

  ${(props) =>
    props && !props.align
      ? css`
          align-items: 'center';
        `
      : css`
          align-items: ${props && props.align && styleAlign(props.align)};
        `}
  width: 50%;
`;
