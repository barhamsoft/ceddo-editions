# Variables
PROJECT_NAME=my-nextjs-project
DB_URL=postgresql://username:password@localhost:5432/mydatabase

# Define commands
install:
	@echo "Installing dependencies..."
	npm install

prisma-init:
	@echo "Initializing Prisma..."
	npx prisma init
	@echo "Updating Prisma schema..."
	sed -i '' 's/provider = "sqlite"/provider = "postgresql"/' prisma/schema.prisma
	sed -i '' 's/url = env("DATABASE_URL")/url = "postgresql:\/\/username:password@localhost:5432\/mydatabase"/' prisma/schema.prisma
	@echo "Prisma initialization completed."

prisma-generate:
	@echo "Generating Prisma client..."
	npx prisma generate

prisma-migrate:
	@echo "Creating and running migration..."
	npx prisma migrate dev --name init

prisma-studio:
	@echo "Starting Prisma Studio..."
	npx prisma studio

dev:
	@echo "Starting Next.js development server..."
	npm run dev

build:
	@echo "Building Next.js project..."
	npm run build

start:
	@echo "Starting Next.js production server..."
	npm run start

lint:
	@echo "Linting the project..."
	npm run lint

format:
	@echo "Formatting the code..."
	npm run format

# Define targets
.PHONY: install prisma-init prisma-generate prisma-migrate prisma-studio dev build start lint format
