import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Stories from "./pages/Stories"
import Features from "./pages/Features"
import Pricing from "./pages/Pricing"







const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="stories" element={<Stories />} />
    <Route path="features" element={<Features />} />
    <Route path="pricing" element={<Pricing />} />


  </Route>
))
function App() {
  return (
    <RouterProvider router={router} />
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
