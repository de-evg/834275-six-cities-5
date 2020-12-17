import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { appRoute, AuthorizationStatus } from "../../const";
import {Link} from "react-router-dom";

const User = ({ authStatus }) => {
  return authStatus === AuthorizationStatus.AUTH ? (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={appRoute.FAVORITES}>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">
          Oliver.conner@gmail.com
        </span>
      </Link>
    </li>
  ) : (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={appRoute.SIGN_IN}>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </Link>
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
