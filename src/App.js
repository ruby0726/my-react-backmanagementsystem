import React, { Component } from 'react'
import BlogRouter from './router/index'
import './App.css'
import { Provider } from 'react-redux'
import { store, myPersistStore } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={myPersistStore}>
          <BlogRouter/>
        </PersistGate>
      </Provider>
    )
  }
}
export default App;

