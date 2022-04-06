import React, { createContext, useContext, useReducer, useMemo, ReactNode, Dispatch } from 'react';

const ThemeStateContext = createContext<ThemeState | null>(null);
const ThemeDispatchContext = createContext<Dispatch<ThemeAction> | null>(null);

interface ThemeState {
  darkTheme: boolean;
}

enum ThemeActionType {
  DARK_THEME,
}

interface ThemeAction {
  type: ThemeActionType;
  value: boolean;
}

function themeReducer(state: ThemeState, action: ThemeAction) {
  switch (action.type) {
    case ThemeActionType.DARK_THEME: {
      return { ...state, darkTheme: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

// wrapped Theme context provider
function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const initialThemeState: ThemeState = {
    darkTheme: false,
  };

  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

// custom hook to access ThemeContext
function useThemeContext() {
  const themeState = useContext(ThemeStateContext);
  const themeDispatch = useContext(ThemeDispatchContext);

  if (!themeState) {
    throw new Error('useThemeContext should be used inside a ThemeContextProvider');
  }

  if (!themeDispatch) {
    throw new Error('useThemeContext should be used inside a ThemeContextProvider');
  }

  return { themeState, themeDispatch };
}

// action creators
const setDarkTheme = (dispatch: Dispatch<ThemeAction>, value: boolean) =>
  dispatch({ type: ThemeActionType.DARK_THEME, value });

export { useThemeContext, setDarkTheme, ThemeContextProvider };
