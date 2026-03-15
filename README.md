# Medimate-Deployed
Deployed version of Medimate, including necessary configuration files for deployment to a cluster of Docker containers.

# Installation
1. Clone the repository to your local machine:
```bash
git clone git@github.com:N-Fahey/Medimate-Deployed.git
```
2. Navigate to the project directory:
```bash
cd Medimate-Deployed
```
3. Copy the .env.example file to .env and update the environment variables as needed:
```bash
cp .env.example .env
```
4. Create secret file for JWT secret key:
```bash
echo "YOUR_SECRET_KEY" > .secrets/jwt_secret.txt
```
5. Build and start the Docker containers using Docker Compose:
```bash
docker compose -f docker-compose.prod.yml up --build
```
6. Access the application in your web browser at http://localhost