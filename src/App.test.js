import { render, fireEvent } from './utils/test-utils'
import App from './App'
import reducer, { loggedIn, initialState } from './features/auth/authSlice'

test("App component renders", () => {
  const { getByText } = render(<App />,  { initialState: {
      auth: {
        isLoggedIn: false,
        name: ''
      }
    }
  })
  getByText('Build forms, surveys or quizzes easily')
})

test("About page link changes route", () => {
  const { getByText } = render(<App />,  { initialState: {
      auth: {
        isLoggedIn: false,
        name: ''
      }
    }
  })
  const aboutButton = getByText('About')
  fireEvent.click(aboutButton)
  getByText('This is about page')
})

test("Shows login modal on click to Login", () => {
  const { getByText } = render(<App />,  { initialState: {
      auth: {
        isLoggedIn: false,
        name: ''
      }
    }
  })
  const aboutButton = getByText('Login')
  fireEvent.click(aboutButton)
  getByText('Continue')
})

test("Show user name if logged in", () => {
  const { getByText } = render(<App />,  { initialState: {
      auth: {
        isLoggedIn: true,
        name: 'Emre'
      }
    }
  })
  getByText(/Emre/)
})

test("Set username and login status", () => {
  render(<App />,  { initialState: {
      auth: {
        isLoggedIn: false,
        name: ''
      }
    }
  })
  const actual = reducer(initialState, loggedIn({ 
    isLoggedIn: true,
    name: 'Emre Dalkiran'
  }))
  expect(actual.isLoggedIn).toBe(true)
  expect(actual.name).toBe('Emre Dalkiran')
})