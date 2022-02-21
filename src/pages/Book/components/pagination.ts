import { IPageWords, IState } from 'state/interfaces';
import { buttonClassGray, getStorage } from '.';
import { isAllWords } from '../utils';

const getNumberPages = (currentPage: IPageWords, store: IState) => {
  const pages = 30;
  const numberOfPages: number[] = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  let currentNumberOfPages = [...numberOfPages] as (number | string)[];
  if (currentPage.page >= 0 && currentPage.page <= 2) {
    currentNumberOfPages = [1, 2, 3, 4, 5, '...', numberOfPages.length];
  } else if (currentPage.page === 3) {
    const sliced = numberOfPages.slice(2, 5);
    currentNumberOfPages = [1, '...', ...sliced, '...', numberOfPages.length];
  } else if (currentPage.page > 3 && currentPage.page < numberOfPages.length - 3) {
    const sliced1 = numberOfPages.slice(currentPage.page - 1, currentPage.page + 1);
    const sliced2 = numberOfPages.slice(currentPage.page + 1, currentPage.page + 2);
    currentNumberOfPages = [1, '...', ...sliced1, ...sliced2, '...', numberOfPages.length];
  } else if (currentPage.page === numberOfPages.length - 3) {
    const sliced = numberOfPages.slice(currentPage.page - 2);
    currentNumberOfPages = [1, '...', ...sliced];
  } else if (currentPage.page > numberOfPages.length - 3) {
    const sliced = numberOfPages.slice(numberOfPages.length - 5);
    currentNumberOfPages = [1, '...', ...sliced];
  }
  return currentNumberOfPages
    .map((page) => {
      const currentClass =
        currentPage.page + 1 === page
          ? getStorage('authorizedUser')
            ? isAllWords(currentPage, store, buttonClassGray) !== ''
              ? `page-item active ${buttonClassGray}`
              : 'page-item active'
            : 'page-item active'
          : 'page-item';
      return ` <li class="${currentClass}"> 
                <a href='!#' class="page-link">${page}</a>
            </li>`;
    })
    .join('');
};

export const getPaginationNav = (currentPage: IPageWords, state: IState) => {
  return currentPage.group === 6
    ? ''
    : `<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    ${getNumberPages(currentPage, state)}
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>`;
};
