export const addProduct = (items:string, newItemsList:string) => {
  return([...items, newItemsList]);
}