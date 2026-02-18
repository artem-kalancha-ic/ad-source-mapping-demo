# Ad Source Mapping Demo

Interactive walkthrough demonstrating how ad source mappings cascade across global, company, and property levels in SDM Apartment Intelligence.

## What This Project Does

This demo visualizes the two core mapping paths used to classify advertising data:

- **PMS Source Mapping** — A two-step flow: PMS Source (Knock, Yardi, Entrata) → Google Analytics (source/medium) → AI Source + Cost Group
- **Online Mapping** — A single-step flow: Google Analytics (source/medium/campaign) → AI Source + Cost Group

Mappings are organized in a three-level hierarchy:

| Level | Description |
|-------|-------------|
| **Global** | Default rules that apply to all companies and properties |
| **Company** | Overrides for a specific company (e.g. RADCO) |
| **Property** | Most specific overrides for an individual property (e.g. The Ariel) |

The demo includes four interactive examples that show how creating or deleting mappings at each level affects inheritance across the hierarchy.

## Tech Stack

- React 19 + React Router 7
- Framer Motion (animations)
- Lucide React (icons)
- Vite (build tool)
- CSS Modules

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### Other Commands

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview

# Run linting
npm run lint
```

## Project Structure

```
src/
├── main.jsx                        # Entry point
├── App.jsx                         # Root component
├── routes/AppRouter.jsx            # Route definitions
├── components/
│   ├── Layout/                     # Shell with sidebar + content area
│   ├── Sidebar/                    # Navigation sidebar
│   ├── PageWrapper/                # Reusable page header
│   └── ExampleLayout/              # Step-through example component
├── pages/
│   ├── Intro/                      # Landing page
│   ├── Overview/                   # Data flow architecture diagram
│   ├── MappingLevel/               # Hierarchy visualization
│   ├── MappingTable/               # Column reference guide
│   └── Examples/
│       ├── CreateGlobalLevelMapping/
│       ├── CreateCompanyLevelMapping/
│       ├── CreatePropertyLevelMapping/
│       └── DeletePropertyLevelMapping/
└── styles/
    ├── variables.css               # Design tokens
    └── global.css                  # Global styles
```
