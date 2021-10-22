## Cara Install
Requirement :
 - NodeJS v14
 - Postgresql
 - gcc, make, g++ compiler

**Install NodeJS** :
[Link Tutorial](https://tecadmin.net/install-latest-nodejs-npm-on-debian/)

**Note:**
Setelah menginstall postgres, buat satu database baru.

Setelah NodeJS berhasil terinstall, kemudian install yarn dan pm2 dengan perintah 

    sudo npm i -g yarn pm2

Kemudian pada directory backend masukkan perintah 

    yarn

Tunggu sampai selesai menginstall dependencies setelah itu edit file ".env" sesuai dengan di bawah ini

    # Database

    DB_HOST=localhost
    
    DB_DIALECT=postgres
    
    DB_DATABASE=`Nama DB`
    
    DB_USER=postgres
    
    DB_PASS=`Password Database`
    
    DB_FORCE_RENEW=false
    
      
    
    # Request
    
    API_URL=/api
    
    REQUEST_LIMIT=1024mb
    
    ALLOW_ORIGIN=*
    
      
    
    # Token
    
    TOKEN_SECRET=Password.
    
    REFRESH_TOKEN_SECRET=Password.
    
    TOKEN_EXPIRATION=1m
    
    REFRESH_TOKEN_EXPIRATION=7d
    
      
    
    # System
    
    SYSTEM_LOGGING=false
    
    NODE_ENV=production

Setelah itu build backend dengan perintah 
		
	yarn build
Setelah build berhasil, pada directory backend masukkan perintah

	pm2 start dist/index.js --name akreditasi
	pm2 save
	pm2 startup
	sudo env PATH=$PATH:/home/{user}/.nvm/versions/node/v14.18.0/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u {user} --hp /home/{user}
Ganti {user} dengan user yang ada pada server.

Secara default aplikasi akan berjalan pada port 1234. Untuk redirect port bisa menggunakan iptables atau konfigurasi nat atau reverse proxy http.
