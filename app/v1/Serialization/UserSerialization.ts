export default (item: any) => {
  return {
    ...item,
    fullname: `${item.first_name} ${item.last_name}`,
  };
};
