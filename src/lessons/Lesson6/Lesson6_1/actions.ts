export const deliverMessage = async (message: string) => {
  await new Promise((res) => setTimeout(res, 1500)); // api fetch
  return message;
};
