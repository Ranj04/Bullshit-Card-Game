# Bullshit Card Game

A real-time multiplayer card game built with Node.js, Express, Socket.io, and PostgreSQL. Play the classic bluffing card game with friends online!

![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-4.8-010101?logo=socket.io&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1-000000?logo=express&logoColor=white)

## About The Game

**Bullshit** (also known as "Cheat" or "I Doubt It") is a classic bluffing card game where players try to get rid of all their cards by playing them face-down and announcing their rank. Other players can challenge if they suspect someone is lying!

### Game Rules
- Players take turns playing 1-4 cards face-down, announcing the rank (e.g., "Two 7s")
- Ranks must be played in sequence (Aces, 2s, 3s... Kings, then back to Aces)
- **Bluff:** You can lie about the cards you're playing
- **Challenge:** Call "Bullshit!" if you think someone is lying
  - If you're right: the liar picks up the entire pile
  - If you're wrong: you pick up the pile
- **Win:** First player to empty their hand wins!

## Features

### Core Functionality
- **User Authentication** - Secure signup/login with bcrypt password hashing
- **Real-time Multiplayer** - Socket.io powered live game updates
- **Game Lobby** - Browse, create, and join games (2-6 players)
- **Live Chat** - In-game and lobby chat with message history
- **Responsive Design** - Play on desktop or mobile

### Technical Highlights
- **Full-Stack TypeScript** - Type-safe code across the entire application
- **PostgreSQL Database** - Persistent storage with migrations
- **Session Management** - Secure cookie-based sessions stored in PostgreSQL
- **WebSocket Integration** - Real-time bidirectional communication
- **Modern Build Pipeline** - Vite for fast frontend bundling

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | Node.js 22 |
| **Framework** | Express 5 |
| **Language** | TypeScript |
| **Database** | PostgreSQL |
| **Real-time** | Socket.io |
| **Templating** | EJS |
| **Styling** | CSS3 with Custom Properties |
| **Build Tool** | Vite |
| **Auth** | bcrypt + express-session |

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   EJS Views │  │  Socket.io  │  │   Vite Bundle (TS)  │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Express Server                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────────┐  │
│  │  Routes  │  │  Session │  │ Socket.io│  │  Middleware │  │
│  └──────────┘  └──────────┘  └──────────┘  └─────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      PostgreSQL                              │
│  ┌───────┐ ┌───────┐ ┌─────────┐ ┌──────────┐ ┌──────────┐  │
│  │ users │ │ games │ │ players │ │ messages │ │ sessions │  │
│  └───────┘ └───────┘ └─────────┘ └──────────┘ └──────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Getting Started

### Prerequisites
- Node.js 22+
- PostgreSQL 14+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ranj04/Bullshit-Card-Game.git
   cd Bullshit-Card-Game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file with the following:
   DATABASE_URL=postgresql://user:password@localhost:5432/bullshit_game
   SESSION_SECRET=your-secret-key
   ```

4. **Create the database**
   ```bash
   createdb bullshit_game
   ```

5. **Run migrations**
   ```bash
   npm run migrate:up
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Open in browser**
   ```
   http://localhost:3000
   ```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run migrate:up` | Run database migrations |
| `npm run migrate:down` | Rollback last migration |

## Project Structure

```
├── src/
│   ├── backend/
│   │   ├── config/        # Session configuration
│   │   ├── db/            # Database connection & queries
│   │   ├── lib/           # Utilities (logger)
│   │   ├── middleware/    # Auth middleware
│   │   ├── routes/        # API routes
│   │   ├── sockets/       # Socket.io handlers
│   │   ├── views/         # EJS templates
│   │   └── server.ts      # Entry point
│   ├── frontend/
│   │   ├── styles/        # CSS stylesheets
│   │   └── *.ts           # Client-side TypeScript
│   └── shared/            # Shared types
├── migrations/            # Database migrations
├── public/                # Static assets
└── scripts/               # Build scripts
```

## Database Schema

```sql
users          → User accounts (id, username, email, password_hash)
games          → Game instances (id, name, state, max_players, current_turn)
game_players   → Player-game relationships (hand, position)
messages       → Chat messages (user_id, game_id, content)
sessions       → Express sessions
```

## Deployment

This project is configured for deployment on Railway:

1. Connect your GitHub repository to Railway
2. Add a PostgreSQL database
3. Set environment variables:
   - `DATABASE_PUBLIC_URL` (auto-set by Railway)
   - `SESSION_SECRET`
   - `NODE_ENV=production`
4. Deploy!

## License

This project is licensed under the ISC License.

---

<p align="center">
  Built with ♠ ♥ ♣ ♦ by <a href="https://github.com/Ranj04">Ranjiv</a>
</p>
