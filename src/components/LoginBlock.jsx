import React from 'react'

function LoginBlock(){
  return(
    <div className="LoginBlock">
      <div className="LoginMain">
        <form class="LoginForm" action="">
          <h2>Вход</h2>
          <p>E-mail</p>
          <input type="text" required/>
          <p>Пароль</p>
          <input type="password" required/>
          <button>Войти</button>
        </form>
        <a href="">Забыли пароль?</a>
        <p>Или войдите с помощью других сервисов</p>
        <a href=""><img src="" alt="" /></a>
        <a href=""><img src="" alt="" /></a>
        <a href=""><img src="" alt="" /></a>
        <a href=""><img src="" alt="" /></a>
        <a href=""><img src="" alt="" /></a>
      </div>
      <div className="LoginReg">
        <p>Еще нет аккаунта? <a href="">Зарегистрируйтесь</a></p>
      </div>
      <div>
        <a href=""><img src="" alt="" /> English</a>
        <a href="">О сервисе</a>
        <a href="">Обратная связь</a>
        <a href="">Соглашение</a>
      </div>
    </div>
    
  )
}
export default LoginBlock;