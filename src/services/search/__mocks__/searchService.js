let searchResponse;
const __setMockReposSearch = (response) => {
  searchResponse = response;
};
const postcodeSearch = jest.fn(() => searchResponse);

export default {
  __setMockReposSearch,
  postcodeSearch,
};
