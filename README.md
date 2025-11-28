# Next.js Starter Template

A production-ready Next.js starter template with authentication, database integration, and a beautiful UI. Built with the latest technologies to help you ship your next project faster.

## 🚀 Features

- ⚡ **Next.js 14+** - React framework with App Router
- 🔐 **Authentication** - Pre-configured auth system using Next-Auth (Auth.js)
- 🗄️ **Prisma ORM** - Type-safe database access
- 🎨 **Shadcn/ui** - Beautiful and accessible component library
- 💅 **Tailwind CSS** - Utility-first CSS framework
- 📝 **TypeScript** - Full type safety
- 🎯 **ESLint & Prettier** - Code quality and formatting
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode Ready** - Theme switching capability

## 📦 What's Included

- **Landing Page** - Modern, conversion-optimized homepage
- **Dashboard** - User management interface with CRUD operations
- **User Profile** - View and edit user information
- **Authentication Pages** - Login, register, password reset flows
- **Header & Footer** - Reusable layout components
- **API Routes** - RESTful API structure with Prisma

## 🛠️ Tech Stack

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Database:** Prisma ORM
- **Authentication:** Next-Auth (Auth.js)
- **Icons:** React Icons

## 📋 Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- PostgreSQL (preferably or your preferred database)

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd nextjs-starter
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory, also see `.env.example`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
# Next Auth vars
AUTH_SECRET="your-secret-key"

AUTH_GITHUB_ID=""
AUTH_GITHUB_SECRET=""
```

4. **Set up the database**

```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/) to see your application.

## 📁 Project Structure

```
├── app/
│   ├── (auth)/           # Authentication pages
│   ├── dashboard/        # Dashboard pages
│   │   └── users/        # User management
│   ├── api/              # API routes
│   └── page.tsx          # Landing page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Header component
│   └── Footer.tsx        # Footer component
├── lib/
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Utility functions
├── prisma/
│   └── schema.prisma     # Database schema
└── public/               # Static assets
```

## 🎨 Customization

### Adding shadcn/ui Components

```bash
npx shadcn-ui@latest add [component-name]
```

### Database Schema

Modify `prisma/schema.prisma` and run:

```bash
npx prisma db push
npx prisma generate
```

### Styling

- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Use Tailwind utility classes throughout components

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio

## 🔒 Environment Variables

| Variable             | Description                | Required |
| -------------------- | -------------------------- | -------- |
| `DATABASE_URL`       | Database connection string | Yes      |
| `AUTH_SECRET`        | NextAuth secret key        | Yes      |
| `AUTH_GITHUB_ID`     | Github OAuth ID            | Yes      |
| `AUTH_GITHUB_SECRET` | Github OAuth Secret        | Yes      |

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next Auth (Auth.js) Documentaion](https://authjs.dev/getting-started)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---
