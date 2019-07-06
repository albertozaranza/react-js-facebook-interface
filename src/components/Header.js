import React, { Component } from "react";

import "./Header.css";

import Shape from "./Shape";
import Profile from "./ProfileButton";
import Exit from "./ExitButton";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Shape />
        <div>
          <Profile />
          <Exit />
        </div>
      </header>
    );
  }
}
