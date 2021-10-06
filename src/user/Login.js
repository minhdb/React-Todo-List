import React, {useState} from "react";

// export default function Login({user}) {
//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <label htmlFor="login-username">Username: </label>
//       <input type="text" name="login-username" id="login-username"/>
//       <label htmlFor="login-password">Password: </label>
//       <input type="password" name="login-password" id="login-password"/>
//       <input type="submit" value="Login"/>
//     </form>
//   );
// }

export default function Login({dispatchUser}) {
  const [username, setUsername] = useState('');
  function handleUsername(evt) { setUsername(evt.target.value); }

  return (
    <form onSubmit={e => {e.preventDefault(); dispatchUser({type:"LOGIN", username})}} >
    <label htmlFor="login-username">Username: </label>
    <input type="text" name="login-username" id="login-username" value={username} onChange={handleUsername}/>
    <label htmlFor="login-password">Password: </label>
    <input type="password" name="login-password" id="login-password" />
    <input type="submit" value="Login"/>
    </form>
  );
}
