import React from 'react'
import Wrapper from '../../Styled-components/BigSidebar-style'
import Logo from '../Logo/Logo';
import { useSelector } from 'react-redux';
import NavLinks from '../NavLinks/NavLinks';


const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;