import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


const SelectWrapper = styled.select`
  background: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  color: ${COLORS.gray700};
  width: var(--width);
  height: 43px;
  padding: 0 16px;
  -webkit-appearance: none;
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper style={{'--width': displayedValue.length + 7 + 'ch' }} value={value} onChange={onChange}>
      {children}
    </SelectWrapper>
   // <Icon id="chevron-down" size={20} />
  );
};

export default Select;
