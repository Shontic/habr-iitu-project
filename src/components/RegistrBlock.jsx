import React from 'react'

function RegistrBlock(){
  return(
    <div className="RegistrBlock">
      <div className="RegistrMain">
        <form class="RegistrForm" action="">
          <h2>Регистрация</h2>
          <p>E-mail</p>
          <input type="text" required/>
          <p>Никнейм</p>
          <input type="text" required/>
          <p>Пароль</p>
          <input type="password" required/>
          <p>Пароль еще раз</p>
          <input type="password" required/>
          <input type="checkbox" id="agree" name="agree"
             checked required/>
          <label htmlFor=""> Принимаю условия <a href="">соглашения</a></label>
          
          <button>Зарегистрироваться</button>
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
export default RegistrBlock