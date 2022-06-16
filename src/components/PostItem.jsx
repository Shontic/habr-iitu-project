import React from 'react'

function PostItem(){
  return(
    <div className = "PostBlock">
      <div className = "author_block">
        <img src="" alt="" />
        <a href="">constantine_mitin</a>
        <p className="postDate">сегодня в 01:34</p>
      </div>
      <div className="postContent">
        <a href="postTitle">Право на ошибку. Деньги и методологии разработки в ИТ</a>
        <a href="keyWord">Разработка веб-сайтов*</a>
        <a href="keyWord">Программирование*</a>
        <a href="keyWord">Управление разработкой*</a>
        <a href="keyWord">Управление проектами*</a>
        <button>Из песочницы</button>
        <img src="" alt="" />
        <div className = "postBody">
          Есть много разных методологий разработки: Waterfall, Agile, Lean и другие. Ситуацию усложняют различные схемы оплаты разработки в ИТ. Что лучше: Fixed Price, Time&Material или взять людей на аутстафф? Человеку, далёкому от коммерческой разработки, бывает сложно разобраться что и когда стоит использовать. Чтобы помочь с этим разобраться, рассмотрим разные методологии и схемы оплаты с точки зрения работы с рисками и права на ошибку. Попробую писать простым языком, чтобы было понятно всем.
        </div>
        <button>Читать далее</button>
        <div className="postDetails">
          <div>
            <img src="" alt="" />
            <a href="">+1</a>
          </div>
          <div>
            <img src="" alt="" />
            <a href="">153</a>
          </div>
          <div>
            <img src="" alt="" />
            <a href="">1</a>
          </div>
          <div>
            <img src="" alt="" />
            <a href="">0</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PostItem