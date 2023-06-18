import React from "react";
import Wrapper from "../../Styled-components/SmallSidebar-style";
import { FaTimes } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../Feature/User/userSlice";
import NavLinks from "../NavLinks/NavLinks";

function SmallSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
}

export default SmallSidebar;
