import React from 'react'
import { CakeView } from './features/cake/CakeView'
import { IcecreamView } from './features/icecream/IcecreamView'
import { UserView } from './features/user/UserView'


//redux is a state conteiner,stores the state of your application,store and manage application state, predictable state container for js apps
// state managmnt lib
const App = () => {
  return (
    <div>
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>
  )
}

export default App