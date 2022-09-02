export const API_URL = () => {
    if (process.env.API_URL != null) {
        return process.env.API_URL
    } else {
        return "http://127.0.0.1:8000"
    }
}

export const PUBLIC_API_URL = () => {
    if (process.env.NEXT_PUBLIC_API_URL != null) {
        return process.env.NEXT_PUBLIC_API_URL
    } else {
        return "http://127.0.0.1:8000"
    }
}