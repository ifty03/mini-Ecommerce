# Mini E-commerce for PIMJO

A Next.js e-commerce application with authentication, built using modern web technologies.
Live Link: https://mini-ecommerce-mauve.vercel.app

## 🚀 Technologies Used

- **Next.js 15.5.4** - React framework with Turbopack
- **React 19.1.0** - UI library
- **NextAuth.js 4.24.11** - Authentication solution
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Icons 5.5.0** - Icon library
- **bcryptjs 3.0.2** - Password hashing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.17 or higher recommended)
- **npm** or **yarn** or **pnpm**

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd mini-ecommerce
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory and add the following environment variables:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=6frrsGRqCpuKZZQJ02z4g9oxeWw2l0rAjfNQoHSprZY=
```

> **Note:** For production, update `NEXTAUTH_URL` to your production domain and generate a new `NEXTAUTH_SECRET` using:
> ```bash
> openssl rand -base64 32
> ```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

## 🔐 Login Credentials

Use the following credentials to access the dashboard:

- **Email:** `admin@example.com`
- **Password:** `admin123`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with Turbopack |
| `npm run build` | Builds the application for production with Turbopack |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint for code quality checks |

## 🗂️ Project Structure

```
mini-ecommerce/
├── app/                  # Next.js app directory
├── components/           # React components
├── public/              # Static assets
├── .env.local           # Environment variables (create this)
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## 📊 Features

- ✅ User authentication with NextAuth.js
- ✅ Protected dashboard routes
- ✅ Mock data for dashboard statistics
- ✅ Responsive design with Tailwind CSS
- ✅ Modern UI with Next js and tailwind css

## 🔒 Authentication

This project uses NextAuth.js for authentication with credentials provider. The authentication is currently set up with hardcoded credentials for demonstration purposes.

## 🎨 Styling

The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

## 🚨 Important Notes

- **Mock Data:** The dashboard currently uses mock data. Integrate with a real API or database for production use.
- **Security:** Update authentication logic and credentials for production deployment.


## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
npm run dev -- -p 3001
```


##📧 Support
For support or questions, feel free to reach out:

Website: https://ashikul-islam-ifty.vercel.app/
Email: ashikulislamifty@gmail.com
Phone: +880 1704070091

**Happy Coding! Inshallah we will code together one day PIMJO *(See you soon PIMJO) 🎉**
