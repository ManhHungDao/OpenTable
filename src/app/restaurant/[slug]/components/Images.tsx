const Images = ({ images }: { images: string[] }) => {
  const length = images.length;
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
          {length} photo{length > 1 ? "s" : ""}
        </h1>
        <div className="flex flex-wrap">
          {length > 0 &&
            images.map((item) => (
              <img
                key={item}
                className="w-56 h-44 mr-1 mb-1"
                src={item}
                alt=""
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Images;
