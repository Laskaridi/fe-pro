import React from 'react';
import TextComponent from './TextComponent';
import HeaderNav from './HeaderNav';
import UseState from './UseState';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faStar} from '@fortawesome/free-solid-svg-icons'

function Header() {
    let title = 'Get started with Bootstrap';
    let text = "Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. Download all our examples to get started.";
    let isLogin = true;
    return (
        <header className="pb-3 mb-5 border-bottom">
          <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">Starter template</span>
          {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
          </a>
    <UseState></UseState>
    <HeaderNav login={isLogin}></HeaderNav>
    <TextComponent
    title={title}
    text={text}></TextComponent>
  </header>
    );
}

export default Header;