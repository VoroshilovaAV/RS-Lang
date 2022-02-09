export const CardTemlate = (photo: string, githubLink: string, name: string, color: string, done: string) => {
  return `
    <div class="d-sm-flex card-container">                  
        <img class="card-photo" src="assets/photo/${photo}.png" alt="developer photo" />
        <div class="container flex-column d-flex">
        <ul class="card-text mt-3">
            ${done}
        </ul>
        <div class="mt-auto container d-flex flex-row">
            <a class="card-link align-self-center" href="${githubLink}"
            ><img class="${color}" src="assets/icons/github.svg" alt="github link"
            /></a>
            <div class="card-title p-2 align-self-center">
            <h6 class="text-title">${name}</h6>
            <small class="text-muted">Developer</small>
            </div>
        </div>
        </div>
    </div>
    `;
};
