"use client";

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

const TestPage = () => {
  const num = getRandomNumber();

  if (num < 5) {
    throw new Error("Something went wrong!");
  }

  return <div>{num}</div>;
};

export default TestPage;
