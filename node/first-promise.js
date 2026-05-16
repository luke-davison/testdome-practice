async function firstSuccessfulPromise(promiseArray) {
  return Promise.any(promiseArray).catch(() => undefined);
}

module.exports.firstSuccessfulPromise = firstSuccessfulPromise;
