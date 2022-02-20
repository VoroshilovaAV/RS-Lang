import './index.scss';

export const ErrorComponent = {
  listen: () => {},
  render: () => {
    return `
    <div class="container d-sm-flex flex-column align-items-center error-container">
      <div class="error-title">Упс...</div>
      <div class="h2 error-text">такая страница не существует</div>
      <div class="error-img"><img src="assets/img/404.png" alt="404 not found" class="img-fluid"></div>                
    </div>         
    `;
  },
};
