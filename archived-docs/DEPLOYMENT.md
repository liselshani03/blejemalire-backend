# 🚀 Deployment Guide

## Prerequisites

- Node.js v14+ installed on server
- PostgreSQL v12+ installed on server
- Git installed on server
- Domain name (optional)

## Deployment Steps

### 1. Server Setup

Choose a hosting provider:
- **Heroku** (easiest for beginners)
- **AWS EC2** (most popular)
- **DigitalOcean** (simple and affordable)
- **Linode** (good performance)
- **Railway** (Node.js friendly)

### 2. Clone Repository

```bash
cd /opt/blejemalire
git clone <your-repo-url> .
cd blejemalire-backend
```

### 3. Install Dependencies

```bash
npm install
```

**Note:** Ensure you only install production dependencies:
```bash
npm install --production
```

Or use npm ci for exact versions:
```bash
npm ci
```

### 4. Production Environment Setup

Create `.env` for production:

```bash
# Server Configuration
PORT=8000
NODE_ENV=production

# Database Configuration
DB_USER=blejemalire_user
DB_HOST=db.example.com
DB_NAME=blejemalire_prod
DB_PASSWORD=secure_password_here
DB_PORT=5432

# Authentication
JWT_SECRET=generate-a-very-secure-random-string-here
JWT_EXPIRE=7d
BCRYPT_ROUNDS=12
```

**⚠️ Security Tips:**
- Use strong, random JWT_SECRET
- Use separate database user with limited permissions
- Use environment-specific database
- Increase BCRYPT_ROUNDS for production (12-15)
- Never commit .env to git

### 5. Production Database Setup

Create production PostgreSQL database:

```sql
-- Create restricted user
CREATE USER blejemalire_user WITH PASSWORD 'secure_password';

-- Create database
CREATE DATABASE blejemalire_prod OWNER blejemalire_user;

-- Connect to database
\c blejemalire_prod

-- Create tables (see QUICKSTART.md for SQL)
```

### 6. Process Manager Setup

Use PM2 to keep server running:

```bash
npm install -g pm2

# Create ecosystem.config.js
pm2 start ecosystem.config.js

# Setup auto-start
pm2 startup
pm2 save
```

**ecosystem.config.js:**
```javascript
module.exports = {
  apps: [
    {
      name: "blejemalire-api",
      script: "./src/server.js",
      env: {
        NODE_ENV: "production",
        PORT: 8000
      },
      instances: "max",
      exec_mode: "cluster",
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M"
    }
  ]
};
```

### 7. Nginx Reverse Proxy

Configure Nginx to forward requests:

```nginx
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Restart Nginx:
```bash
sudo systemctl restart nginx
```

### 8. SSL Certificate (Let's Encrypt)

```bash
sudo certbot certonly --nginx -d api.example.com

# Update Nginx config
sudo certbot renew --dry-run
```

### 9. Monitoring

Monitor server health:

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs blejemalire-api

# Monitor CPU/Memory
pm2 monit
```

### 10. Backup Strategy

```bash
# Backup database daily
0 2 * * * pg_dump blejemalire_prod | gzip > /backups/db-$(date +%Y%m%d).sql.gz

# Retain 7 days of backups
find /backups -name "db-*.sql.gz" -mtime +7 -delete
```

## Deployment Checklist

- [ ] Server provisioned and secured
- [ ] Node.js v14+ installed
- [ ] PostgreSQL v12+ installed
- [ ] Git repository cloned
- [ ] Dependencies installed
- [ ] .env created with production values
- [ ] Database created with tables
- [ ] PM2 configured and running
- [ ] Nginx reverse proxy configured
- [ ] SSL certificate installed
- [ ] Firewall rules configured (only ports 80, 443)
- [ ] Database backups scheduled
- [ ] Error logging configured
- [ ] Health check endpoint verified
- [ ] Load testing completed

## Environment Variables for Production

```
# Critical - Change these
JWT_SECRET=<generate-secure-key>
DB_PASSWORD=<strong-password>
DB_USER=<production-user>

# Recommended - Keep secure
BCRYPT_ROUNDS=12
NODE_ENV=production

# Infrastructure
PORT=8000
DB_HOST=<database-host>
DB_NAME=<production-db>
DB_PORT=5432
```

## Performance Optimization

### Database

```sql
-- Add indexes for common queries
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_cart_user_id ON cart_items(user_id);
CREATE INDEX idx_users_email ON users(email);
```

### Node.js

```javascript
// Enable compression in production
const compression = require('compression');
app.use(compression());

// Add caching headers
app.set('view cache', true);
```

### Nginx

```nginx
# Enable gzip compression
gzip on;
gzip_types text/plain application/json;
gzip_min_length 1000;

# Cache static files
location ~ \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
}
```

## Monitoring & Logging

### Application Logs
```bash
pm2 logs blejemalire-api --lines 100
```

### Systemd Logs
```bash
journalctl -u blejemalire -n 50 -f
```

### Database Logs
```bash
tail -f /var/log/postgresql/postgresql.log
```

## Health Check Endpoint

```bash
curl https://api.example.com
# Should return:
# {
#   "success": true,
#   "message": "🚀 Blejemalire API is running",
#   "version": "1.0.0"
# }
```

## Scaling

### Vertical Scaling
- Increase server RAM and CPU
- Adjust PM2 cluster mode
- Increase connection pools

### Horizontal Scaling
- Use load balancer (nginx, HAProxy)
- Deploy multiple server instances
- Share database across instances
- Use Redis for session management

```javascript
// PM2 cluster mode
pm2 start src/server.js -i max  // Use all CPU cores
```

## Security Hardening

1. **Update regularly**
   ```bash
   npm audit fix
   npm update
   ```

2. **Rate limiting**
   ```bash
   npm install express-rate-limit
   ```

3. **HELMET.js for security headers**
   ```bash
   npm install helmet
   app.use(require('helmet')());
   ```

4. **CORS whitelist**
   ```javascript
   app.use(cors({
     origin: ['https://example.com', 'https://app.example.com']
   }));
   ```

5. **Input validation**
   ```bash
   npm install joi
   ```

## Troubleshooting

### Application crashes
```bash
pm2 restart blejemalire-api
pm2 logs blejemalire-api
```

### Database connection issues
```bash
psql -h $DB_HOST -U $DB_USER -d $DB_NAME
```

### High memory usage
```bash
pm2 set max_memory_restart 500M
pm2 restart blejemalire-api
```

### Port already in use
```bash
lsof -i :8000
kill -9 <PID>
```

## Rollback Strategy

Keep previous versions:
```bash
# Tag releases
git tag -a v1.0.0 -m "Production release"
git push origin v1.0.0

# Quick rollback
git checkout v1.0.0
npm install
pm2 restart blejemalire-api
```

## Disaster Recovery

1. **Database backup and restore**
   ```bash
   # Backup
   pg_dump -h $DB_HOST -U $DB_USER $DB_NAME > backup.sql
   
   # Restore
   psql -h $DB_HOST -U $DB_USER $DB_NAME < backup.sql
   ```

2. **Application backup**
   ```bash
   git clone --mirror <repo> blejemalire-backup.git
   ```

3. **Regular testing**
   - Test backup restoration monthly
   - Test failover procedures
   - Document recovery steps

---

**Production Deployment Complete! 🎉**
