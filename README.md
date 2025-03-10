# Redux 2025 Project

This project demonstrates the use of React, TypeScript, and Redux Toolkit for state management. The application includes features such as counter and fetching and displaying a quote of the day, with proper state handling for loading and error states.

## Concepts Learned

### Redux Toolkit
- **configureStore**: Simplifies store setup and includes good defaults.
- **createSlice**: Helps create a slice of the Redux state, including actions and reducers.
- **useDispatch and useSelector**: Hooks provided by `react-redux` for interacting with the Redux store in functional components.
- **createAsyncThunk**: Helps make a thunk action which is a redux function that can contain async logic.

### TypeScript
- **Type Safety**: Ensures that the state and actions are correctly typed, reducing runtime errors.
- **Custom Hooks**: `useAppDispatch` and `useAppSelector` are typed versions of `useDispatch` and `useSelector`, providing better type inference.

### React
- **Functional Components**: The project uses functional components and hooks for state management and side effects.
- **Conditional Rendering**: Properly handles loading and error states to provide a better user experience.

## Setup

Install the dependencies:

```bash
npm install
```

## Get Started

Start the development server:

```bash
npm run dev
```

Build the app for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Features

### Fetching Quote of the Day
The application fetches a quote of the day and displays it. It handles loading and error states gracefully.

### State Management
The state is managed using Redux Toolkit, ensuring a scalable and maintainable state management solution.

### Type Safety
TypeScript is used throughout the project to ensure type safety and reduce runtime errors.

### Custom Hooks
Custom hooks like `useAppDispatch` and `useAppSelector` are used to provide better type inference and improve code readability.
