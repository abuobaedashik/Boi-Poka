import banner from '../../assets/books.jpg'
const Banner = () => {
  return (
    <div>
      <div className="hero mx-auto bg-base-200 min-h-screen border px-8 m-6 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className=" w-96 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl text-[#131313] mb-16 leading-[80px] font-bold">Books to freshen up your bookshelf</h1>
            <button className="btn text-[#ffffff] bg-[#23BE0A] rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
