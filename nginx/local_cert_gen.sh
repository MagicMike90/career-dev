openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 365 -keyout ./ssl/certs/localhost.key -out ./ssl/certs/localhost.crt
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ./ssl/certs/localhost.crt
