const sendResponse = (res, resData) => {
  const resBody = {
    status: resData.statusCode,
    success: resData.success,
    message: resData.message,
    meta: resData.meta,
    data: resData.data,
  };
  res.status(resData.statusCode).json(resBody);
};

module.exports = sendResponse;
