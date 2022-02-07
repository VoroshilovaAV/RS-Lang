import './index.scss';

export const FooterComponent = {
  render: () => {
    return `              
    <footer class="footer">
    <div class="container footer-container">
      <span>2022</span>
      <div class="devs">
        <a href="https://github.com/VoroshilovaAV" target="_blank" class="dev">
          <span class="github"></span>
          <span class="dev__name">Anna Voroshilova</span>
        </a>
        <a href="https://github.com/Nick1091" target="_blank" class="dev">
          <span class="github github_blue"></span>
          <span class="dev__name">Nikolaу Kuckharchuk</span>
        </a>
        <a href="https://github.com/alyanoyigor" target="_blank" class="dev">
          <span class="github github_yellow"></span>
          <span class="dev__name">Igor Alyanoy</span>
        </a>
      </div>
      <a href="https://rs.school/" target="_blank">
        <img src="assets/icons/rs-school-logo.svg" alt="RSS">
      </a>
    </div>
  </footer>
    `;
  },
};
