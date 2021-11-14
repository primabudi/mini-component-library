/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + 'px',
    "--radius": 4 + 'px',
  },
  medium: {
    "--height": 12 + 'px',
    "--radius": 4 + 'px',
  },
  large: {
    "--height": 24 + 'px',
    "--radius": 8 + 'px',
    "--padding": 4 + 'px',
  },
};

const ProgressBarWrapper = styled.progress`
  appearance: none;
  height: var(--height);
  
  &::-webkit-progress-bar {
    border-radius: var(--radius);
    background-color: ${COLORS.transparentGray15};
    padding: var(--padding);
  }

  &::-webkit-progress-value {
    border-radius: 4px;
    background-color: ${COLORS.primary};
  }
  

`

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (<>
    <ProgressBarWrapper style={styles} size={size} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} value={value} max={100}>{value} %</ProgressBarWrapper>
    <VisuallyHidden>{value} %</VisuallyHidden>
  </>);
};

export default ProgressBar;
