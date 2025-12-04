# EpicBook Application Containerization

We will dockerized epicbook application and access it with traefik routing.

## Getting Started

### Option 0: Install Docker

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh ./get-docker.sh
sudo usermod -aG docker ubuntu 2>/dev/null || true

# test
sudo su - $USER
docker ps
```

### Option 1: Clone Entire Repository

```bash
git clone https://github.com/imShakil/epicbook-docker.git
cd epicbook-docker
```

## Step-by-Step Setup

### 1. Create Environment File

```bash
# Create .env file with required variables
cat > .env << EOF
MYSQL_ROOT_PASSWORD=my-secret-pw
MYSQL_USER=pravin
MYSQL_PASSWORD=Demo12@Test23
MYSQL_HOST=mysql
EOF
```

### 2. Build and Run

```bash
# Build and start all services
docker compose up --build

# Or run in background
docker compose up --build -d
```

### 3. Access Application

- **Epicbook**: http://localhost or VM public IP
- **Traefik Dashboard**: http://localhost:8080 or http://<public-ip>:8080

### 4. Test the Application

1. Open http://localhost or http://<vm-public-ip> in browser
2. Add to cart your favourite book
3. Click to checkout
4. Order Placed

## How This Node.js Application Was Dockerized

### 1. Multi-Container Architecture

```flow
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   Traefik   │───▶│   EpicBook   │───▶│    MySQL    │
│ (Port 80)   │    │ (Node.js)    │    │ (Database)  │
└─────────────┘    └──────────────┘    └─────────────┘
```

### 2. Dockerfile Strategy

- **Base Image**: `node:18-alpine` for lightweight container
- **Dynamic Config**: Uses `envsubst` to inject environment variables
- **Entrypoint Script**: Generates database config before app starts

### 3. Service Dependencies

```yaml
epicbook:
  depends_on:
    mysql:
      condition: service_healthy  # Waits for MySQL to be ready
```

### 4. Network Isolation

- **db_network**: MySQL ↔ EpicBook (database communication)
- **app_network**: EpicBook ↔ Traefik (web traffic)

### 5. Configuration Management

- Environment variables in `.env` file
- Template-based config generation via `config-template.json`
- Runtime config creation in `entrypoint.sh`

### 6. Traefik Reverse Proxy

**What is Traefik?**

- Modern reverse proxy and load balancer
- Automatic service discovery via Docker labels
- No manual configuration files needed

**Configuration:**

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.epicbook.rule=PathPrefix(`/`)"
  - "traefik.http.services.epicbook.loadbalancer.server.port=8080"
```

**Access Points:**

- **Application**: http://localhost (port 80)
- **Dashboard**: http://localhost:8080
- **Logs**: `docker logs -f traefik_container`

### 7. Health Checks & Startup Order

1. MySQL starts and becomes healthy
2. EpicBook builds, waits for MySQL, then starts
3. Traefik starts after EpicBook is healthy
4. All services auto-restart on failure