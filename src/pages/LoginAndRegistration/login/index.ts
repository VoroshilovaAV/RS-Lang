import { listenSingInPage } from '..';
import '../style.scss';

export const LoginComponent = {
  listen: () => listenSingInPage(),
  render: () =>
    `<div class = "page-singIn-user">
      <form action="">
        <h2>Вход</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"></label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ваш email*" autofocus required>
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
