# Erensau Hospital — Frontend

## Стек
- React + TypeScript + Vite
- Tailwind CSS
- React Router DOM
- Путь алиасов: `@/` → `src/`

## Дизайн-файлы
Все страницы экспортированы из Figma как PNG 2x и лежат в:
```
/Users/totae/Downloads/erensai-design/
```

Файлы:
- `Основная страница.png` — Главная
- `О клинике.png` — About
- `Врачи.png` — Doctors
- `Услуги.png` — Services
- `Check-up программы.png` — Checkup
- `Контакты.png` — Contacts
- `Новости и исследования.png` — News
- `Для пациентов.png` — Patients
- `Вакансии.png` — Vacancies
- `сотрудничество.png` — Cooperation

**Всегда читай нужный PNG перед правками страницы.**

## Figma-файл
```
https://www.figma.com/design/HnPqqrKiGdMOaq22IIO47H/erensau-|-Веб-разработка?node-id=1-5
```
MCP доступен, но есть лимит на Starter плане.

## Дизайн-система

### Цвета
- Primary: `#00b5e2` (голубой)
- Primary dark: `#0099c4`
- Background: `#f4f4f4`
- Footer bg: `#1a1a2e`
- Dark hero bg: `#0a1628`

### Шрифт
- Inter (подключён через Tailwind)

### Компонентные классы (index.css)
```css
.btn-primary   — bg-[#00b5e2] text-white rounded-xl
.btn-outline   — border-2 border-[#00b5e2] text-[#00b5e2] rounded-xl
.btn-white     — bg-white text-[#00b5e2] rounded-xl
.card          — bg-white rounded-2xl shadow-card overflow-hidden
.container-main — max-w-[1440px] mx-auto px-4 lg:px-16
```

## Структура хедера (двухрядный)
**Строка 1 — utility bar:**
```
[Logo erensau] | [Записаться на приём] [Открыть чат WhatsApp] [+7 (717) 200-00-00] [IN FB IG YT] [RU/KZ/EN] [Войти]
```

**Строка 2 — навигация в овальном контейнере (`bg-[#f4f4f4] rounded-full`):**
```
О клинике | Команда врачей | Медицинские услуги | Для пациентов | Сотрудничество | Контакты
```

Активный пункт: `bg-white text-[#00b5e2] shadow-sm rounded-full`

## Роуты
| Путь | Страница | Файл |
|------|----------|------|
| `/` | Главная | `HomePage.tsx` |
| `/about` | О клинике | `AboutPage.tsx` |
| `/doctors` | Команда врачей | `DoctorsPage.tsx` |
| `/services` | Медицинские услуги | `ServicesPage.tsx` |
| `/checkup` | Check-up | `CheckupPage.tsx` |
| `/patients` | Для пациентов | `PatientsPage.tsx` |
| `/cooperation` | Сотрудничество | `CooperationPage.tsx` |
| `/contacts` | Контакты | `ContactsPage.tsx` |
| `/news` | Новости | `NewsPage.tsx` |
| `/vacancies` | Вакансии | `VacanciesPage.tsx` |

## Ассеты
```
src/assets/
  icons/
    logo-group.svg       — логотип (импортируется как React-компонент: ?react)
    feature-stories.svg
    feature-doctors.svg
    feature-equipment.svg
    feature-pricing.svg
    svc-cardiac.svg
    svc-vascular.svg
    svc-surgery.svg
    svc-thoracic.svg
    svc-gynecology.svg
    svc-anesthesia.svg
  images/
    hero-surgeon.png     — фото хирурга для Hero на главной (повёрнуто 180°)
    img-operating-room.jpg
    img-clinic-building.jpg
    img-doctor-senior.jpg
    img-doctor-senior2.jpg
    img-doctor-portrait.jpg
    img-doctor-senior2.jpg
    doctor1-4.jpg        — фото врачей
    post1-6.jpg          — фото для блога
    bg-clinic.jpg
    bg-contacts.jpg
    team-photo.jpg
```

## Паттерны страниц

### Тёмный hero (Врачи, Вакансии, Пациенты, Check-up, Новости)
```tsx
<section className="relative overflow-hidden min-h-[480px]">
  <img src={bgImage} className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-[#0a1628]/75" />
  <div className="relative z-10 container-main flex flex-col justify-end min-h-[480px] py-16">
    <h1 className="text-5xl lg:text-7xl font-bold text-white">...</h1>
  </div>
</section>
```

### Белый hero с фото (Главная, О клинике, Услуги)
```tsx
<section className="bg-white overflow-hidden">
  <div className="container-main">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
      <div className="flex flex-col justify-between py-16 lg:pr-14">...</div>
      <div className="hidden lg:block relative overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </div>
  </div>
</section>
```

### CTA-секция (повторяется на всех страницах)
```tsx
<section className="bg-white py-16">
  <div className="container-main text-center max-w-2xl mx-auto">
    <LogoMark className="h-10 w-auto text-[#00b5e2] mx-auto mb-5" />
    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Многопрофильная клиника</p>
    <h2 className="text-3xl font-bold text-gray-900 mb-5">Erensau Hospital</h2>
    <p className="text-gray-500 leading-relaxed mb-8">...</p>
    <Link to="/contacts" className="btn-primary">Записаться на приём</Link>
  </div>
</section>
```

## Особенности реализации
- **Главная страница**: 4 фич-чипа находятся ВНУТРИ hero-секции (нижняя часть левой колонки), не отдельной секцией
- **Врачи**: фильтр по специальности расположен ВНУТРИ тёмного hero
- **Контакты**: начинается с карты (без синего hero), затем строка контактов, форма + фото, навигация по комплексу
- **Новости**: сплит-hero (тёмный слева + список публикаций справа)
- **Пациенты**: FAQ в 2 колонки; отзывы — карточки слева, заголовок справа
- **Услуги**: белый hero с фото; 4 вкладки с ценами на карточках
- **Check-up**: 5 программ-вкладок + FAQ аккордеон
- **Сотрудничество**: тёмный hero "Ваш надёжный медицинский партнёр" + 5 B2B-карточек с фото

## Команды
```bash
npm run dev    # запуск dev-сервера
npm run build  # production сборка
npm run lint   # линтер
```
