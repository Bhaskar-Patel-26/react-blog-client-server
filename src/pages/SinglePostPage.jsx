import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* DETAILS */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            minus nisi rerum error delectus at, vel vitae aut! Perspiciatis,
            nulla?
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link to="/test" className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link to="/test" className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            recusandae assumenda esse voluptatibus asperiores perspiciatis
            quisquam rem est dolorum maiores aliquam blanditiis, soluta qui
            quidem quasi exercitationem vel magnam. Aperiam.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* TEXT */}
        <div className="flex flex-col gap-6 lg:text-lg text-justify">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            omnis soluta fugiat illum saepe beatae dolore, et repellat, hic
            reprehenderit aperiam. Non cupiditate in dignissimos aliquid unde.
            Exercitationem ut voluptatem maiores voluptate inventore doloribus
            minima recusandae perspiciatis quasi facere, corporis at facilis
            iure assumenda quos eaque magni. Saepe sit eligendi dignissimos
            accusantium impedit aliquid consectetur deserunt sed quaerat
            eveniet. Architecto cumque laboriosam dolorem quos perspiciatis ab
            accusamus quis sapiente soluta expedita repudiandae nostrum
            distinctio, voluptatem commodi ut qui quod reprehenderit officiis
            et. Id iusto explicabo harum odit soluta iste placeat alias
            laboriosam! Dolor a eligendi eos ut, cumque minus id.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            omnis soluta fugiat illum saepe beatae dolore, et repellat, hic
            reprehenderit aperiam. Non cupiditate in dignissimos aliquid unde.
            Exercitationem ut voluptatem maiores voluptate inventore doloribus
            minima recusandae perspiciatis quasi facere, corporis at facilis
            iure assumenda quos eaque magni. Saepe sit eligendi dignissimos
            accusantium impedit aliquid consectetur deserunt sed quaerat
            eveniet. Architecto cumque laboriosam dolorem quos perspiciatis ab
            accusamus quis sapiente soluta expedita repudiandae nostrum
            distinctio, voluptatem commodi ut qui quod reprehenderit officiis
            et. Id iusto explicabo harum odit soluta iste placeat alias
            laboriosam! Dolor a eligendi eos ut, cumque minus id.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            omnis soluta fugiat illum saepe beatae dolore, et repellat, hic
            reprehenderit aperiam. Non cupiditate in dignissimos aliquid unde.
            Exercitationem ut voluptatem maiores voluptate inventore doloribus
            minima recusandae perspiciatis quasi facere, corporis at facilis
            iure assumenda quos eaque magni. Saepe sit eligendi dignissimos
            accusantium impedit aliquid consectetur deserunt sed quaerat
            eveniet. Architecto cumque laboriosam dolorem quos perspiciatis ab
            accusamus quis sapiente soluta expedita repudiandae nostrum
            distinctio, voluptatem commodi ut qui quod reprehenderit officiis
            et. Id iusto explicabo harum odit soluta iste placeat alias
            laboriosam! Dolor a eligendi eos ut, cumque minus id.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            omnis soluta fugiat illum saepe beatae dolore, et repellat, hic
            reprehenderit aperiam. Non cupiditate in dignissimos aliquid unde.
            Exercitationem ut voluptatem maiores voluptate inventore doloribus
            minima recusandae perspiciatis quasi facere, corporis at facilis
            iure assumenda quos eaque magni. Saepe sit eligendi dignissimos
            accusantium impedit aliquid consectetur deserunt sed quaerat
            eveniet. Architecto cumque laboriosam dolorem quos perspiciatis ab
            accusamus quis sapiente soluta expedita repudiandae nostrum
            distinctio, voluptatem commodi ut qui quod reprehenderit officiis
            et. Id iusto explicabo harum odit soluta iste placeat alias
            laboriosam! Dolor a eligendi eos ut, cumque minus id.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            omnis soluta fugiat illum saepe beatae dolore, et repellat, hic
            reprehenderit aperiam. Non cupiditate in dignissimos aliquid unde.
            Exercitationem ut voluptatem maiores voluptate inventore doloribus
            minima recusandae perspiciatis quasi facere, corporis at facilis
            iure assumenda quos eaque magni. Saepe sit eligendi dignissimos
            accusantium impedit aliquid consectetur deserunt sed quaerat
            eveniet. Architecto cumque laboriosam dolorem quos perspiciatis ab
            accusamus quis sapiente soluta expedita repudiandae nostrum
            distinctio, voluptatem commodi ut qui quod reprehenderit officiis
            et. Id iusto explicabo harum odit soluta iste placeat alias
            laboriosam! Dolor a eligendi eos ut, cumque minus id.
          </p>
        </div>

        {/* MENU */}
        <div className="px-5 h-max sticky top-5">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex items-center gap-2 mb-2">
            <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="48" h="48" />
            <Link to="/test">John Doe</Link>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex gap-2 mt-2">
            <Link to="/test">
              <Image src="facebook.svg" />
            </Link>
            <Link to="/test">
              <Image src="instagram.svg" />
            </Link>
          </div>

          <PostMenuAction />

          <h1 className="mt-5 mb-2 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/test" className="underline">All</Link>
            <Link to="/test" className="underline">Web Design</Link>
            <Link to="/test" className="underline">Development</Link>
            <Link to="/test" className="underline">Databases</Link>
            <Link to="/test" className="underline">SEO</Link>
            <Link to="/test" className="underline">Marketing</Link>
          </div>

          <Search />
        </div>
      </div>

      {/* COMMENTS */}
      <Comments />
    </div>
  );
};

export default SinglePostPage;
