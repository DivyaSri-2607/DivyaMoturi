import React, { useEffect } from 'react';

function FacebookLoginComponent() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: 'Y4011654052408747', // Replace with your Facebook App ID
        cookie: true,
        xfbml: true,
        version: 'v14.0',
      });
    };
  }, []);

  const handleFBLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          window.FB.api('/me', { fields: 'name,email,picture' }, (userData) => {
            console.log('User Data:', userData);
          });
        } else {
          console.log('User login failed');
        }
      },
      { scope: 'public_profile,email' }
    );
  };

  return <button onClick={handleFBLogin}>Login with Facebook</button>;
}

export default FacebookLoginComponent;
