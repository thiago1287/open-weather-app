export const toPascalCase = (str: string): string => {
  return str.replace(
    /\w+/g,
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
};
