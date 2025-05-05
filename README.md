# 🚀 NestJS Initial Setup with Best Practices

This repository provides a clean and scalable **NestJS** setup based on best practices recommended by the official documentation.

---

## 📦 Prerequisites

- Node.js v18 or later
- npm or [pnpm](https://pnpm.io/)
- Docker (optional, for services like databases)

---

## ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gabrielmatau79/setup-nestjs.git
   cd setup-nestjs
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run in development mode:**

   ```bash
   pnpm start:dev
   ```

   The server will start at `http://localhost:3000`.

---

## 📁 Project Structure

The project follows a modular architecture to promote scalability and maintainability:

```
src/
├── config/
│   ├── app-config.ts          # Centralized app-level configuration
│   └── logger.config.ts       # Logger setup with Winston or other provider
│
├── modules/db/
│   ├── mongo.module.ts        # MongoDB connection module
│   └── redis.module.ts        # Redis connection module
│
├── schemas/
│   └── items.ts               # Mongoose schema definition for items
│
├── app.controller.ts          # Main controller
├── app.controller.spec.ts     # Unit tests for controller
├── app.module.ts              # Root application module
├── app.service.ts             # Main service logic
└── main.ts                    # Entry point of the app

test/                           # Test utilities and mocks
.eslintrc.js                    # ESLint configuration
.prettierrc                     # Prettier code formatting config
nest-cli.json                   # NestJS CLI config
package.json                    # Project metadata and scripts
tsconfig*.json                  # TypeScript configuration files
README.md                       # Project documentation

```

Each module encapsulates its own logic, following the Single Responsibility Principle.

---

## ✅ Best Practices Included

### 1. NestJS CLI Usage

Use the CLI to generate modules, controllers, and services consistently:

```bash
nest generate module example
nest generate controller example
nest generate service example
```

### 2. Modular Architecture

Each feature lives in its own module for separation of concerns and easier maintenance.

### 3. Dependency Injection

Built-in dependency injection keeps your code decoupled and testable.

### 4. DTOs and Validation

Use `class-validator` and `class-transformer` to enforce data integrity through DTOs.

### 5. Error Handling

Global exception filters provide consistent and centralized error handling.

### 6. Swagger Integration

Generate interactive API docs with Swagger:

```ts
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

const config = new DocumentBuilder()
  .setTitle('NestJS API')
  .setDescription('API documentation')
  .setVersion('1.0')
  .build()
const document = SwaggerModule.createDocument(app, config)
SwaggerModule.setup('api', app, document)
```

### 7. Testing with Jest

Out-of-the-box support for unit and integration testing using **Jest**.

---

## 🧪 Useful Commands

| Command      | Description                            |
| ------------ | -------------------------------------- |
| `start:dev`  | Start the server in development mode   |
| `build`      | Compile the project to JavaScript      |
| `start:prod` | Run the compiled project in production |
| `test`       | Run unit tests                         |
| `lint`       | Lint the code with ESLint              |
| `format`     | Format the code with Prettier          |

---

## 📚 Resources

- [Official NestJS Documentation](https://docs.nestjs.com/)

---

## 👨‍💻 Author

**Gabriel Mata**  
GitHub: [@gabrielmatau79](https://github.com/gabrielmatau79)

---

## 🪪 License

This project is licensed under the MIT License.
