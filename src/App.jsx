import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import NewsCard from './components/NewsCard'
import Pagination from './components/Pagination'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bookmark from './pages/Bookmark'



function App() {



  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col gap-8">
          <Navbar />
          <Routes >
            <Route path='/' element={<NewsCard key='top' category="top" />} />

            <Route path='/world' element={<NewsCard key='world' category="world" />} />


            <Route path='/business' element={<NewsCard key='business' category="business" />} />


            <Route path='/technology' element={<NewsCard key='technology' category="technology" />} />

            <Route path='/entertainment' element={<NewsCard key='entertainment' category="entertainment" />} />

            <Route path='/enviroment' element={<NewsCard key='enviroment' category="enviroment" />} />

            <Route path='/food' element={<NewsCard key='food' category="food" />} />

            <Route path='/health' element={<NewsCard key='health' category="health" />} />

            <Route path='/politics' element={<NewsCard key='politics' category="politics" />} />

            <Route path='/science' element={<NewsCard category="science" />} />

            <Route path='/sports' element={<NewsCard key='sports' category="sports" />} />

            <Route path='/bookmark' element={<Bookmark />} />
          </Routes>

          <Pagination />

        </div>

      </BrowserRouter>
    </>
  )
}

export default App