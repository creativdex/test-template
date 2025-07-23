# Test Template

Шаблон проекта для API тестирования с использованием TypeScript, Vitest и Axios.

## 📋 Описание

Этот проект представляет собой готовый шаблон для создания автотестов API с использованием современного стека технологий. Включает в себя настроенную среду для тестирования, валидацию данных с помощью Zod и генерацию тестовых данных с помощью Faker.

## 🚀 Технологии

- **TypeScript** - для типизации и безопасности кода
- **Vitest** - современный фреймворк для тестирования
- **Axios** - HTTP клиент для API запросов
- **Zod** - библиотека для валидации схем данных
- **Faker.js** - генерация фейковых данных для тестов
- **dotenv** - управление переменными окружения

## 📁 Структура проекта

```
test-template/
├── src/
│   ├── api/
│   │   └── client.api.ts      # API клиент для взаимодействия с сервисом
│   ├── config/
│   │   └── env.d.ts          # Типы для переменных окружения
│   └── schemas/
│       └── create-user.schema.ts # Схема валидации пользователя
├── tests/
│   └── create-user.test.ts    # Тесты для создания пользователя
├── .env                       # Переменные окружения (не в репозитории)
├── tsconfig.json             # Конфигурация TypeScript
├── vitest.config.ts          # Конфигурация Vitest
└── package.json
```

## ⚙️ Установка

1. Клонируйте репозиторий:
```bash
git clone <repository-url>
cd test-template
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env` в корне проекта:
```env
API_URL=https://petstore.swagger.io
NODE_ENV=development
```

## 🧪 Запуск тестов

### Запуск всех тестов
```bash
npm run test:run
```

### Запуск тестов с UI интерфейсом
```bash
npm run test:ui
```

### Запуск конкретного тестового файла
```bash
npx vitest tests/create-user.test.ts
```

## 📖 API тесты

### Тесты создания пользователя

Проект включает в себя комплексные тесты для создания пользователя через API:

1. **Успешное создание пользователя** - тест проверяет создание пользователя с валидными данными
2. **Обработка ошибок валидации** - тест проверяет обработку невалидных данных
3. **Проверка статус кодов ошибок** - тест проверяет корректность HTTP статус кодов
4. **Создание множественных пользователей** - тест проверяет создание нескольких пользователей подряд

### Пример использования API клиента

```typescript
import ApiClient from '@src/api/client.api'
import { CreateUserType } from '@src/schemas/create-user.schema'

const client = new ApiClient()

const newUser: CreateUserType = {
  id: 12345,
  username: 'testuser',
  firstName: 'Иван',
  lastName: 'Иванов',
  email: 'ivan@example.com',
  password: 'securepassword',
  phone: '+7-900-123-45-67',
  userStatus: 1
}

const result = await client.createUser(newUser)
console.log('Пользователь создан:', result)
```

## 🔧 Конфигурация

### TypeScript
- Настроены алиасы путей (`@src/*`, `@tests/*`)
- Включена строгая типизация
- Поддержка Node.js 22

### Vitest
- Настроен для работы с TypeScript
- Поддержка алиасов путей
- Исключение ненужных файлов из тестирования
- Web UI для визуализации тестов

### Переменные окружения
```env
API_URL=https://your-api-endpoint.com
NODE_ENV=development|test|production
```

## 📝 Схемы данных

Проект использует Zod для валидации данных. Пример схемы пользователя:

```typescript
export const createUserSchema = z.object({
    id: z.number(),
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    password: z.string(),
    phone: z.string(),
    userStatus: z.number()
})

export type CreateUserType = z.infer<typeof createUserSchema>
```

## 🎯 Генерация тестовых данных

Используется Faker с русской локализацией для генерации реалистичных тестовых данных:

```typescript
import { fakerRU as faker } from '@faker-js/faker'

const testUser = {
  id: faker.number.int({ min: 1, max: 10000 }),
  username: faker.internet.username(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phone: faker.phone.number(),
  userStatus: faker.helpers.arrayElement([0, 1])
}
```

## 🔍 Отладка

Для отладки тестов можно использовать:
- `console.log()` для вывода данных
- Vitest UI для визуального анализа тестов
- VS Code debugger с конфигурацией для Vitest

## 📄 Лицензия

ISC

## 👥 Автор

Tsepeleva Natalia

---

## 🚀 Быстрый старт

1. `npm install`
2. Создайте `.env` файл с `API_URL`
3. `npm run test:run`

Готово! Тесты должны успешно выполниться.
