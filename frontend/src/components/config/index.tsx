export const MAIN_DOMAIN = process.env.NODE_ENV == 'production' ? 'pumpkinproject.my.id' : '127.0.0.1'
export const FRONTEND_URL = process.env.NODE_ENV == 'production' ? `https://${MAIN_DOMAIN}` : `http://${MAIN_DOMAIN}:3000`
export const BACKEND_URL = process.env.NODE_ENV == 'production' ? `https://api.${MAIN_DOMAIN}` : `http://${MAIN_DOMAIN}:8000`

export const DISCORD_OAUTH2 = `https://discord.com/api/oauth2/authorize?client_id=1024709157393268868&redirect_uri=${FRONTEND_URL}%2Faccount%2Fthird_party%2Fdiscord&response_type=code&scope=identify%20guilds`

// Ubah MAIN_DOMAIN jika ada perubahan nama domain pada projek, selainnya jangan dirubah jika tidak diperlukan