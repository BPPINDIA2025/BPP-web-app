// ArcGIS Web App OAuth-Enabled init.js (Simplified)
require(["esri/identity/OAuthInfo", "esri/identity/IdentityManager"], function(OAuthInfo, esriId) {
  const info = new OAuthInfo({
    appId: "wxWG17c2wOkq0Ub5",
    popup: true,
    popupCallbackUrl: "oauth-callback.html"
  });
  esriId.registerOAuthInfos([info]);
  esriId.checkSignInStatus(info.portalUrl + "/sharing")
    .then(() => console.log("Signed in"))
    .catch(() => esriId.getCredential(info.portalUrl + "/sharing"));
});
