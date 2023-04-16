export const pickPartForPagination = <T>(arr: T[], pageNumber: number = 1, amount: number = 10) => {
  return {
    productsPart: arr.slice(amount * (pageNumber - 1), amount * pageNumber),
    numberOfPages: Math.ceil(arr.length / amount)
  };
};