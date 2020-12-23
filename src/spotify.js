export const authEndPoint = "https://accounts.spotify.com/authorize";

//1. CLick login button
//2. Redirect to spotify login page
//3. Redirect to home page once authorized/loged in

const redirectUri = "http://localhost:3000/";

const clientId = "396494e2e1c04dc4bc29ccb787efb67e";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;

    }, {});
}

export const loginUrl =  `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;