import React from "react";

const Input = (props) => {

    return <div>
               <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
    </div>
};

export default Input;
