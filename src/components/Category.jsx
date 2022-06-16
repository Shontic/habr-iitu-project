import React from 'react'

function Category(){
  return(
    <div className="CategoryBlock">
      <h2>Разработка</h2>
      <div>
        <a className="active" href="">Статьи</a>
        <a href="">Новости</a>
        <a href="">Хабы</a>
        <a href="">Авторы</a>
        <a href="">Компании</a>
      </div>
      <a href="">Все подряд</a>
    </div>
  )
}
export default Category