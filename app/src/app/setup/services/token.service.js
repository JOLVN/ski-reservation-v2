const getLocalAccessToken = async () => {
    const accessToken = await JSON.parse(localStorage.getItem("accessToken"))
    return accessToken
}

const setAccessToken = (accessToken) => {
    localStorage.setItem("accessToken", accessToken)
}

const removeAccessToken = () => {
    localStorage.removeItem("accessToken")
}

const TokenService = {
    getLocalAccessToken,
    setAccessToken,
    removeAccessToken
}

export default TokenService