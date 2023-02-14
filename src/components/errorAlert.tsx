const errorAlert = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="rounded-md bg-red-600 shadow-md my-3 p-2 text-white font-semibold w-full flex justify-center">
        Invalid URL, please check.
      </div>
    </div>
  );
};

export default errorAlert;
