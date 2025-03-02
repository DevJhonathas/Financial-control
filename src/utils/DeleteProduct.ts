export const DeleteProducts = (items:Array<string>, index:Array<string>) => {
  return items.filter((i) => !index.includes(i));
}