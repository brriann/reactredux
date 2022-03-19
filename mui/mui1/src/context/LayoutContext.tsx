import React, { createContext, Dispatch, useContext, useReducer } from 'react';

const LayoutStateContext = createContext<LayoutState | null>(null);
const LayoutDispatchContext = createContext<Dispatch<LayoutAction> | null>(
  null
);

interface LayoutState {
  isSidebarOpened: boolean;
}

enum LayoutActionType {
  TOGGLE_SIDEBAR,
}

interface LayoutAction {
  type: LayoutActionType;
}

function layoutReducer(state: LayoutState, action: LayoutAction) {
  switch (action.type) {
    case LayoutActionType.TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    default:
      throw new Error(`Unhandled layoutReducer action type: ${action.type}`);
  }
}

interface ILayoutProviderProps {
  children: React.ReactNode;
}

function LayoutProvider({ children }: ILayoutProviderProps) {
  const [state, dispatch] = useReducer(layoutReducer, {
    isSidebarOpened: false,
  });
  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

function useLayoutState() {
  const context = useContext(LayoutStateContext);
  if (context === null) {
    throw new Error('useLayoutState must be used within a LayoutProvider');
  }
  return context;
}

function useLayoutDispatch() {
  const context = useContext(LayoutDispatchContext);
  if (context === null) {
    throw new Error('useLayoutDispatch must be used within a LayoutProvider');
  }
  return context;
}

function toggleSidebar(dispatch: Dispatch<LayoutAction>) {
  dispatch({
    type: LayoutActionType.TOGGLE_SIDEBAR,
  });
}

export { LayoutProvider, useLayoutState, useLayoutDispatch, toggleSidebar };
