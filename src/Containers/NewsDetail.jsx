import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { images } from '../Constants'
import { data } from '../Constants'
const NewsDetail = () => {
  const { news_id } = useParams()

  const [searchResults, setSearchResults] = useState()

  const handleSearch = () => {
    let results = data.News.filter(data => `${data.id}` === news_id)
    setSearchResults(results[0])
    console.log(results)
  }

  useEffect(() => {
    document.title = `News Detail | On Court`

    handleSearch()
  }, [news_id])

  return (
    <div className='p-[120px] bg-bg1 min-h-screen w-full '>
      {!searchResults ? (
        <h3 className=' capitalize font-orbitron text-royal-blue text-3xl my-[20px] font-light'>
          News Does not found!
        </h3>
      ) : (
        <div className='max-w-[1350px] flex-col gap-8 flex items-start mx-auto'>
          <div className='w-full h-[500px] flex justify-start items-start '>
            <img
              src={searchResults?.image}
              alt=''
              className='w-auto h-full object-contain'
            />
          </div>
          <h2 className='font-sans font-bold  text-[30px]'>
            {searchResults?.title}
          </h2>

          <p className='font-sans font-light '>{searchResults?.summary}</p>
          <p className='font-sans font-light '>{searchResults?.content}</p>

          <p className='font-sans font-light text-black/70'>
            Johnatan Evangelo Smith
          </p>
          <p className='font-sans font-light text-royal-blue/70'>
            {new Date().toDateString()}
          </p>
        </div>
      )}
    </div>
  )
}

export default NewsDetail
