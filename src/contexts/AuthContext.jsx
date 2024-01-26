import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

  const [token, setToken] = useState(null)

  const register = (formData) => {
    return fetch('https://js2-ecommerce-api.vercel.app/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => {
      console.log(res);
      if(res.status !== 201) {
          throw new Error(data);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      setToken(data.token);
      return { success: 'User created' };
    })
    .catch(error => {
      return { error: error.message };
    });
  }

  const value = {
    token,
    register
  }

  return (
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

// useAuth hook
export const useAuth = () => {

  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside an AuthContextProvider')
  return context

}