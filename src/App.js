import React from 'react'
import Home from './pages/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';
import Login from './pages/login/Login';
import { productInputs, userInputs } from './formSource';
import './style/dark.scss'

const App = () => {

  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="add new users" />} />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="add new products" />} />
            </Route>


          </Route>
        </Routes>
      </BrowserRouter>,
    </div>
  )
}

export default App;
