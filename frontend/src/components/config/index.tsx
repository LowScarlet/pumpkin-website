export const MAIN_DOMAIN = process.env.PRODUCTION !== undefined ? 'pumpkinproject.my.id' : '127.0.0.1'
export const FRONTEND_URL = process.env.PRODUCTION !== undefined ? `https://${MAIN_DOMAIN}` : `http://${MAIN_DOMAIN}:3000`
export const BACKEND_URL = process.env.PRODUCTION !== undefined ? `https://api.${MAIN_DOMAIN}` : `http://${MAIN_DOMAIN}:8000`

// Ubah MAIN_DOMAIN jika ada perubahan nama domain pada projek, selainnya jangan dirubah jika tidak diperlukan