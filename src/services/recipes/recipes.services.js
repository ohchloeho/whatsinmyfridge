export const requestRecipesAPI = (searchKeyword, numberOfResults = 10) => {
  return fetch(
    `https://api.spoonacular.com/recipes/search?query=${searchKeyword}&number=${numberOfResults}&apiKey=c3428c2e2cef4ea9aa959c71dd19d8c9`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
