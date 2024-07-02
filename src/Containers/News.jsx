import React from 'react'
import { images, data } from '../Constants'
import New from '../Components/New'
const News = () => {
  React.useEffect(() => {
    document.title = 'News | On Court'
  }, [])
  return (
    <div className=' bg-bg1'>
      <div className='p-[120px] flex justify-start items-start min-h-screen flex-col max-w-[1350px] m-auto'>
        <h3 className=' capitalize font-orbitron text-royal-blue text-3xl my-[20px] font-light'>
          News
        </h3>
        <div className=' container w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {data.News.map((news, id) => (
            <New
              key={id}
              title={news.title}
              image={news.image}
              id={news.id}
              content={news.content}
              summary={news.summary}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default News
