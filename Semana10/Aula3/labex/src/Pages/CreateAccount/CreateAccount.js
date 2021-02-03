import React from 'react'
import Header from '../../Components/Header/Header.js'


function CreateAccount() {
  return (
    <div>
      <lu>
        <li><label>Login:</label> <input placeholder="Text"></input></li>
        <li><label>Password:</label> <input placeholder="Text"></input></li>
        <li><label>E-mail:</label> <input placeholder="Text"></input></li>
      </lu>

      <button>Back</button>
    </div>
  );
}

export default CreateAccount;
