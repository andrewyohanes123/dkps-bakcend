## Cara Install
Requirement :
 - NodeJS v14
 - Postgresql
 - gcc, make, g++ compiler
 - git

**Install PostgreSQL dan C compiler**
    
    sudo apt install gcc make g++ gpp postgresql git -y

**Install NodeJS** :
[Link Tutorial](https://tecadmin.net/install-latest-nodejs-npm-on-debian/)

**Konfigurasi PostgreSQL**

    nano /etc/postgresql/11/main/pg_hba.conf

Pada bagian ini ganti semua nilai md5 dan peer menjadi trust

    local   all             all                                     trust
    # IPv4 local connections:
    host    all             all             127.0.0.1/32            trust
    # IPv6 local connections:
    host    all             all             ::1/128                 md5
    # Allow replication connections from localhost, by a user with the
    # replication privilege.
    local   replication     all                                     peer
    host    replication     all             127.0.0.1/32            md5
    host    replication     all             ::1/128                 md5

Save file kemudian masuk ke file config PostgreSQL

    nano /etc/postgresql/11/main/postgresql.conf

Uncomment dan ganti localhost menjadi "*"
    
    #listen_addresses = 'localhost' 

Restart PostgreSQL

    service postgresql restart

> **Note:** Setelah menginstall postgres, buat satu database baru.
Masuk ke cli PostgreSQL dengan perintah 

    psql -Upostgres


[Link tutorial buat database di PostgreSQL](https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm)

Setelah NodeJS berhasil terinstall, kemudian install yarn dan pm2 dengan perintah 

    sudo npm i -g yarn pm2

### Clone repository
Clone repository ini dengan perintah

    git clone https://github.com/andrewyohanes123/dkps-bakcend backend && cd backend

Kemudian pada directory **backend** masukkan perintah 

    yarn

Tunggu sampai selesai menginstall dependencies setelah itu edit file ".env" sesuai dengan di bawah ini
[Artikel tentang file .env](https://www.petanikode.com/nodejs-env/)

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
