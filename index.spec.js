const createInterval = require("./fake").createInterval;
// const jest = require("jest");

describe("problem with 0 delay intervals", () => {
  it("should ", async () => {
    jest.useFakeTimers();

    createInterval();

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log("resolving");
        resolve();
      }, 0);
    });

    jest.advanceTimersByTime(0);

    await promise;
  });
});
