import React, { useState } from 'react';
import { auth } from '../src/firebase/firebase';


export default function App() {

  let [isLoged, setIsLoged] = useState(false);
  let [userRes, setUserRes] = useState({});

  function loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    auth().signInWithPopup(provider)
    .then(res => {
      setUserRes(res.additionalUserInfo.profile);
      setIsLoged(true);
    })
    .catch((err) => {
      setIsLoged(false);
      alert(err);
    })
  }

  //cante sair
  function singOut() {
    auth().signOut();
    setIsLoged(false);
  }

    return (
      <div>
        {isLoged ? (
          <>
            <button className="exit-btn" onClick={() => singOut()}>
              <i className="fas fa-times"></i>
            </button>
            <section className="user-content">
              <div>
                <img src={userRes.picture} alt="user image"/>
                <h1>{userRes.name}</h1>
                <h1>{userRes.email}</h1>
                <h1>{userRes.locale}</h1>
                <h1>{userRes.id}</h1>
              </div>
            </section>
          </>
        ) : 
        (
        <>
          <section className="form-content">
              <button onClick={() => loginWithGoogle()} className="google-btn">
                <img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png" alt="google logo"/>
              </button>
          </section>
        </>
        )}

      </div>
    )
}
