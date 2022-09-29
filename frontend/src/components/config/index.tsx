export const API_URL = () => {
    if (process.env.PRODUCTION != null) {
        return "https://api.pumpkinproject.my.id"
    } else {
        return "http://127.0.0.1:8000"
    }
}