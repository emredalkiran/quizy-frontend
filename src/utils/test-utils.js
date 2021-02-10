import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import reducer from '../features/auth/authSlice'

function render(
  ui,
  {
    initialState,
    store = configureStore({
      reducer: reducer,
      preloadedState: initialState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    const history = createMemoryHistory()
    return (
      <Provider store={store}>
        <Router history={history}>
          { children }
        </Router>
      </Provider> )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
