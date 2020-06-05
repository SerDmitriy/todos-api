export const makeUrlWithQueryParams = (
    _url: string,
    params: { [key: string]: any }
) => {
    const url = new URL(_url);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return url.toString();
};
