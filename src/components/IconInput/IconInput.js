import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    padding: 0.5rem;
    border-bottom: var(--border-width) solid ${COLORS.gray500};
    width: ${width}px;
  `;

  const Input = styled.input`
    border: none;
    font-size: var(--font-size);
    font-weight: bold;
    color: ${COLORS.gray700};
    padding: 2px 28px 16px 34px;
    margin: -2px -12px -16px -26px;
    background: transparent;
    
    &::placeholder {
      font-weight: normal;
      color: ${COLORS.gray500};
    }
    
    &:hover {
      color: ${COLORS.black}
    }
  `

  const iconSizes = {
    small: 11,
    large: 16,
  };

  const SIZES = {
    small: {
      "--border-width": 1 + 'px',
      "--font-size": 14 + 'px',
    },
    large: {
      "--border-width": 2 + 'px',
      "--font-size": 18 + 'px',
    },
  };

  return (
    <Wrapper style={ SIZES[size] }>
      <Icon id={icon} size={iconSizes[size]} />
      <Input
        style={ SIZES[size] }
        type='text'
        placeholder={placeholder}
      />
      <VisuallyHidden>
        <label htmlFor={icon}>{label}</label>
      </VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
