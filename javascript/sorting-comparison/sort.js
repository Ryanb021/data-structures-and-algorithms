const { Movies } = require('./movies');

function sortYear(movies) {
  movies.sort((a, b) => a.year - b.year);
  return movies;
}

const sortedMovies = sortYear(Movies);
console.log(sortedMovies);

function sortTitle(movies) {
  movies.sort((a, b) => {
    // Remove "The " from the beginning of titles, if present
    const titleA = a.title.replace(/^The /i, '');
    const titleB = b.title.replace(/^The /i, '');

    // Compare the modified titles
    if (titleA < titleB) {
      return -1;
    } else if (titleA > titleB) {
      return 1;
    } else {
      return 0;
    }
  });

  return movies;
}

const sortedMovies = sortTitle(Movies);
console.log(sortedMovies);
