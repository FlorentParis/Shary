import useGetCookies from "./useGetCookies";

export default function useEraseCookie() {
    return () => {
        console.log(document.cookie);
        document.cookie = 'token'+'=; Max-Age=-99999999;';
        document.cookie = 'username'+'=; Max-Age=-99999999;';
        document.cookie = 'JWT'+'=; Max-Age=-99999999;';

    }
}
