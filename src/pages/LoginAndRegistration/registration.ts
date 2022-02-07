import { listenCreateUserPage } from '.';

export const RegistrationComponent = {
  listen: () => listenCreateUserPage(),
  render: () => `<div class = page-create-user>
  <form action="">
    <h2>Регистрация</h2>
    <div class="mb-3">
      <label class="form-label" for="exampleInputName"></label>
      <input type="name" class="form-control" id="exampInputName1" placeholder="ваше имя*" required autofocus>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label"></label>
      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="ваш email*" required>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label"></label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="ваш пароль*" required>
    </div>
    <p class=form-message><p>
    <button type="submit" class="btn btn-primary">Подтвердить</button>
  </form>
</div>`,
};
