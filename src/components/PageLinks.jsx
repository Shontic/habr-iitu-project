import React from 'react'

function PageLinks(){
  return(
    <div className = "PageLinksWrap">
      <div className='PageLinks-links'>
        <a href="">Все потоки</a>
        <a className="active" href="">Разработка</a>
        <a href="">Администрирование</a>
        <a href="">Дизайн</a>
        <a href="">Менеджмент</a>
        <a href="">Маркетинг</a>
        <a href="">Научпоп</a>
      </div>
      <div className="PageLinks-icons">
        <a href=""><img src="" alt="" /></a>
        <a href=""><img src="" alt="" /></a>
      </div>
    </div>
  )
}
export default PageLinks