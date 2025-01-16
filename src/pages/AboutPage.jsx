import Image from "../components/Image";

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mt-5">
      <div className="flex items-center">
        <Image src="featured1.jpeg" className="rounded-2xl" />
      </div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold">Welcome to Think And Code</h1>
        <p className="text-justify">
          Think And Code offers free tutorials on HTML, CSS, JavaScript, React JS and more. You can learn HTML, CSS, JS
          and many more things related to web development.
        </p>
        <div className="flex gap-5">
          <div className="px-3 py-2 bg-orange-200 rounded-xl">
            <p className="font-semibold">Call Us</p>
            <p>+91 123456789</p>
            <p>+91 123456789</p>
          </div>
          <div className="px-3 py-2 bg-orange-200 rounded-xl">
            <p className="font-semibold">Mail Us</p>
            <p>info@thinkandcode.com</p>
          </div>
          <div className="px-3 py-2 bg-orange-200 rounded-xl">
            <p className="font-semibold">Location</p>
            <p>ABC street, Raipur, CG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
