import { UserManager } from "oidc-client-ts";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_yyofF3kcz",
    client_id: "oe9ab4lnqgbmepm3bm2rsq5c2",
    redirect_uri: "http://127.0.0.1:5500/callback.html",
    response_type: "code",
    scope: "openid email"
};

export const userManager = new UserManager(cognitoAuthConfig);

export async function signOutRedirect() {
    const logoutUri = "http://127.0.0.1:5500/index.html";

    // Replace with your actual Cognito managed login domain
    const cognitoDomain = "https://us-east-2yyoff3kcz.auth.us-east-2.amazoncognito.com";

    // Clear the local authenticated session
    await userManager.removeUser();

    // Tell Cognito to end its managed login session
    const logoutUrl = new URL(`${cognitoDomain}/logout`);

    logoutUrl.searchParams.set(
        "client_id",
        cognitoAuthConfig.client_id
    );

    logoutUrl.searchParams.set("logout_uri", logoutUri);

    window.location.assign(logoutUrl.toString());
}
