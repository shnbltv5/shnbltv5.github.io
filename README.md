# shnbltv5.github.io

Personal portfolio of **Aidana Shynbulatova**, Junior Python Backend Developer.
Live: **https://shnbltv5.github.io**

Built with React 18 + Vite. EN / RU. It deploys to GitHub Pages automatically on every push to `main`.

## Как менять содержимое

Весь текст сайта хранится в **одном файле: `src/content.js`**.

| Что поменять | Где |
|---|---|
| Имя, роль, слоган, фото | `profile` |
| Почта, Telegram, LinkedIn | `contacts` (если ссылка пустая, кнопка скрыта) |
| Текст «Обо мне» и факты | `about` |
| Стек | `stack` (`primary: true` выделяет пункт как основной) |
| Проекты | `projects`: порядок в массиве = порядок на сайте |
| Надписи кнопок и разделов | `ui` |

Каждый текст задаётся на двух языках: `{ en: '...', ru: '...' }`.

**Новый проект:** скопируй любой блок `{ ... }` в `projects` и поменяй поля.
Скриншот положи в `public/images/` и укажи `image: '/images/file.jpg'`.
Если оставить `image: ''`, вместо картинки будет красивая обложка с названием проекта.

**Новое фото:** замени файл `public/images/aidana.jpg`.

Цвета и шрифты задаются в начале `src/styles.css` (`:root`).

## Локальный запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production-сборка в dist/
```

## Деплой

`.github/workflows/deploy.yml` собирает сайт и публикует его на GitHub Pages
при каждом `git push` в `main`. Ход сборки виден во вкладке **Actions** репозитория.

## Структура

```
src/
  content.js          ← весь контент (EN/RU)
  styles.css          ← дизайн
  App.jsx
  i18n.jsx            ← переключатель языка
  useReveal.js        ← анимации при скролле
  components/         ← Nav, Hero, About, Stack, Work, Contact, Footer
public/images/        ← фото и скриншоты
```
