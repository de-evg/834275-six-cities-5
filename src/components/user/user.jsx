import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AuthorizationStatus } from "../../const";

const User = ({ authStatus }) => {
  return authStatus === AuthorizationStatus.AUTH ? (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#">
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">
          Oliver.conner@gmail.com
        </span>
      </a>
    </li>
  ) : (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#">
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </a>
    </li>
  );
};

User.propTypes = {
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: state.USER.authStatus,
});

export default connect(mapStateToProps)(User);
