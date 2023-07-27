const findSimilarCategory = (categories, searchTerm) => {
  if (!searchTerm) return null;

  const searchTermLowerCase = searchTerm.toLowerCase();
  return categories.find(
    (category) =>
      category.name.toLowerCase().includes(searchTermLowerCase) ||
      searchTermLowerCase.includes(category.name.toLowerCase())
  );
};

export { findSimilarCategory };
