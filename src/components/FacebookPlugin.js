// FacebookPlugin.js

import React, { useEffect } from 'react';
import '../css/FaceBookPlugin.css'; // Import the style
const FacebookPlugin = () => {
  useEffect(() => {
    // Load Facebook SDK asynchronously
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          xfbml: true,
          version: 'v11.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    loadFacebookSDK();
  }, []);

  return (
    <div className="facebook-plugin-container">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/sakurashop.dz"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/sakurashop.dz"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/sakurashop.dz">Sakura S</a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookPlugin;