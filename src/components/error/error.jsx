import React from "react";
import PropTypes from "prop-types";

const Error = ({err}) => {
  return (
    <>
      <h1>Упс... что-то пошло не так...</h1>
      <p>{err.message}</p>
    </>
  );
};

Error.propTypes = {
  err: PropTypes.object
};

export default Error;
