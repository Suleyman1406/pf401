"use client";

const Error = ({ error, reset }: { error: string; reset: () => void }) => {
  console.log(error);

  return (
    <div className="flex flex-col gap-6">
      <p>Some error occured</p>
      <button onClick={reset}>Reset Page</button>
    </div>
  );
};

export default Error;
