export const isVercel = process.env.CONTAINER === 'vercel';

export const sleep = (time = 2000, isReject = false) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearInterval(timer);
      if (isReject) {
        reject(new Error('Sleep rejected !'));
      }
      resolve(true);
    }, time);
  });
};
