import React, { useContext, useRef } from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { SearchContext } from '../../context/search/searchContext';
import { useOutsideModal } from '../../hooks/useOutsideModal';
import { MoreIcon } from '../icons';

import { theme } from '../../styles';
import FirebaseContext from '../../context/firebase/FirebaseContext';

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  position: absolute;
  top: 22px;
  background-color: ${colors.white};
  border: 1px solid ${colors.lavender};
  margin-left: 40px;
  padding: 15px;
  font-size: ${fontSizes.xs};
  line-height: 16px;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 1;

  & li:first-child {
    padding-top: 0px;
  }

  & li {
    padding-top: 10px;
  }

  &::before,
  &::after {
    border: solid transparent;
    content: ' ';
    height: 0;
    pointer-events: none;
    position: absolute;
    width: 0;
    right: 100%;
    border-width: 11px;
    top: 3px;
    border-right-color: ${colors.lavender};
  }

  &::after {
    border-right-color: ${colors.white};
    top: 4px;
    border-width: 10px;
  }
`;

const Nav = () => {
  const { modal, enableModal } = useContext(SearchContext);
  const { user } = useContext(FirebaseContext);

  const wrapperRef = useRef(null);

  useOutsideModal(wrapperRef);

  return (
    <nav>
      <button type="button" onClick={enableModal}>
        <MoreIcon />
      </button>

      {modal && (
        <StyledContainer ref={wrapperRef}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/popular">Popular</Link>
            </li>
            {user && (
              <li>
                <Link href="/new-product">New Product</Link>
              </li>
            )}
          </ul>
        </StyledContainer>
      )}
    </nav>
  );
};

export default Nav;
