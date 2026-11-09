
import { UserManager } from "oidc-client-ts";

const cognitoDomain = "https://us-east-2yyoff3kcz.auth.us-east-2.amazoncognito.com";

const baseUrl = import.meta.env.BASE_URL;

const redirectUri = new URL(
    `${baseUrl}callback.html`,
    window.location.origin
).href;

const logoutUri = new URL(
    `${baseUrl}index.html`,
    window.location.origin
).href;

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_yyofF3kcz",
    client_id: "oe9ab4lnqgbmepm3bm2rsq5c2",
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid email"
};

export const userManager = new UserManager(cognitoAuthConfig);

export async function signOutRedirect() {
    await userManager.removeUser();

    const logoutUrl = new URL(`${cognitoDomain}/logout`);

    logoutUrl.searchParams.set(
        "client_id",
        cognitoAuthConfig.client_id
    );

    logoutUrl.searchParams.set("logout_uri", logoutUri);

    window.location.assign(logoutUrl.toString());
}
