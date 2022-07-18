export const requestOption = (
  downloadUrl,
  method,
  url,
  firstApi_Name,
  firstApi_Key,
  secondApi_Name,
  secondApi_Key
) => {
  const options = {
    method: method,
    url: url,
    params: { url: downloadUrl },
    headers: {
      "X-RapidAPI-Key": firstApi_Key,
      "X-RapidAPI-Host": secondApi_Key,
    },
  };
  return options;
};
