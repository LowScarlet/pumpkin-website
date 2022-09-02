export const API_URL = () => {
    if (process.env.API_URL != null) {
        return process.env.API_URL
    } else {
        return "http://127.0.0.1:8000"
    }
}