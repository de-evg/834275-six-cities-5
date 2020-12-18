import React, { useCallback, useState, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../store/api-action";
import { appRoute } from "../../const";
import User from "../user/user";

const AuthScreen = ({ submitForm, activeFilter }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [valids, setValids] = useState({
    isEmailValid: false,
    isPasswordValid: false,
  });
  const { isEmailValid, isPasswordValid } = valids;

  const notValidStyle = {
    borderColor: `tomato`,
  };

  const validateClass = {
    email: isEmailValid ? null : notValidStyle,
    password: isPasswordValid ? null : notValidStyle
  };  

  const handleFormSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      submitForm({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    },
    [submitForm]
  );

  const validateLogin = useCallback(() => {
    setValids({
      ...valids,
      isEmailValid: !!emailRef.current.value.match(
        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      ),
      isPasswordValid: !!passwordRef.current.value.match(
        /[0-9a-zA-Z!@#$%^&*]{2,}/g
      ),
    });
  }, [valids, emailRef, passwordRef, setValids]);

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={appRoute.MAIN}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <User />
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              onSubmit={handleFormSubmit}
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="username"
                  required
                  onInput={validateLogin}
                  style={validateClass.email}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  onInput={validateLogin}
                  style={validateClass.password}
                  
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!(isEmailValid && isPasswordValid)}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{activeFilter}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

AuthScreen.propTypes = {
  submitForm: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeFilter: state.HOTELS.activeFilter,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm(body) {
    dispatch(login(body));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
