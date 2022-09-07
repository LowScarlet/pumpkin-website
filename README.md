<h1 align="center">Pumpkin Project Website</h1>

### About Project
Repositori ini adalah `source code` untuk situs web [Pumpkin Project](https://pumpkinproject.my.id). Dengan memanfaatkan github sebagai penyimpanan `source code` diharapkan dapat membantu kolaborator untuk mengembangkan website Pumpkin Project.

### Collaborator
<a href="https://github.com/SahrulGnwn">
  <img src="https://github.com/SahrulGnwn.png?size=64" width="64" />
</a>
<a href="https://github.com/LowScarlet">
  <img src="https://github.com/LowScarlet.png?size=64" width="64" />
</a>
 
## Installation

### Salin repository ini
Seperti biasa Anda harus memiliki repositori ini ke komputer lokal Anda.

### Instalasi Server Backend
Untuk backend server kita menggunakan framework django dari python, hal ini bertujuan untuk memudahkan kolaborator dalam memahami rute kode.
1. Buka terminal Anda.
2. Ubah direktori terminal ke folder backend.
```
cd backend
```
3. Buat virtual environment.
```
py -m venv .venv
```
4. Instal semua library yang diperlukan.
```
pip install -r requirements.txt
```
5. Jalankan server.
```
py manage.py runserver
```
Instalasi server backend telah berhasil, Anda dapat melihatnya di `localhost` dengan port `8000`, jangan ubah port server backend jika tidak diperlukan!
> Agar website berjalan dengan normal, Anda harus menginstall Server Frontend juga, Ikuti cara dibawah ini untuk menginstall Server Frontend

### Instalasi Server Frontend
Untuk frontend server kita menggunakan JavaScript dengan framework dari library react.js yaitu Next.Js, hal ini bertujuan untuk memudahkan kolaborator dalam mengintegrasikan frontend dengan backend.
1. Buka terminal Anda.
2. Ubah direktori terminal ke folder frondend.
```
cd frontend
```
3. Install semua package library yang diperlukan.
```
npm install
```
4. Jalankan server.
> Jika server dalam mode Development
```
npm run dev
```
> Jika server dalam mode Production
```
npm run build && npm run start
```
Instalasi server frontend telah berhasil, Anda dapat melihatnya di `localhost` dengan port `3000`, jangan ubah port server frontend jika tidak diperlukan!