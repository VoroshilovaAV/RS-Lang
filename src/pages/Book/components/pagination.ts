import { IPageWords } from 'state/interfaces';

const getNumberPages = (currentPage: IPageWords) => {
  const pages = 30;
  const numberOfPages: number[] = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  let currentNumberOfPages = [...numberOfPages] as (number | string)[];
  if (currentPage.page >= 1 && currentPage.page <= 3) {
    currentNumberOfPages = [1, 2, 3, 4, 5, '...', numberOfPages.length];
  } else if (currentPage.page === 4) {
    const sliced = numberOfPages.slice(2, 5);
    currentNumberOfPages = [1, '...', ...sliced, '...', numberOfPages.length];
  } else if (currentPage.page > 4 && currentPage.page < numberOfPages.length - 2) {
    const sliced1 = numberOfPages.slice(currentPage.page - 2, currentPage.page);
    const sliced2 = numberOfPages.slice(currentPage.page, currentPage.page + 1);
    currentNumberOfPages = [1, '...', ...sliced1, ...sliced2, '...', numberOfPages.length];
  } else if (currentPage.page === numberOfPages.length - 2) {
    const sliced = numberOfPages.slice(currentPage.page - 3);
    currentNumberOfPages = [1, '...', ...sliced];
  } else if (currentPage.page > numberOfPages.length - 2) {
    const sliced = numberOfPages.slice(numberOfPages.length - 5);
    currentNumberOfPages = [1, '...', ...sliced];
  }
  return currentNumberOfPages
    .map((page) => {
      const currentClass = currentPage.page === page ? 'page-item active' : 'page-item';
      return ` <li class="${currentClass}">
                <a href='!#' class="page-link">${page}</a>
            </li>`;
    })
    .join('');
};

export const getPaginationNav = (currentPage: IPageWords) =>
  `<nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      ${getNumberPages(currentPage)}
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>`;
