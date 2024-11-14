# Generic TypeScript Next.js Application Documentation

## Overview

This application is a Next.js project configured with TypeScript, Tailwind CSS, and ESLint. It demonstrates the use of generic and non-generic tables to display employee data. The project structure includes custom components, data management, and styling with Tailwind CSS.

## Getting Started

### Prerequisites

-   Node.js installed on your machine
-   A package manager like npm or pnpm

### Installation

-   Clone the repository to your local machine.
-   Navigate to the project directory.
-   Install the dependencies by running:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Application

To run the application in development mode, use:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### To build the application for production, use:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### To start the application in production mode, use:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

### Project Structure

`.next/`: Contains the output from Next.js build process.
`public/`: Static assets like images.
`src/`: Source code of the application.
`app/`: Global styles and page-level components.
`components/`: Reusable UI components.
`data/`: Static data used in the application.
`tailwind.config.ts`: Configuration file for Tailwind CSS.
`tsconfig.json`: TypeScript configuration file.
`next.config.mjs`: Next.js configuration file.

### Key Components

`Button`: A reusable button component that supports different variants.

`Table` and `TableGeneric`: Components for displaying tabular data. Table is a non-generic component, while TableGeneric is a generic component that can render additional columns like actions based on the data passed to it.

### Conclusion

This documentation provides a basic overview of the Generic TypeScript Next.js Application. For more detailed information, refer to the source code and the official documentation of the technologies used.
