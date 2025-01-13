import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-5">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735" />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing.</Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link to="/" className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link to="/" className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate repellat aliquid numquam animi dignissimos! Incidunt quae beatae cumque accusamus.</p>
        <Link to="/" className="underline text-blue-800 text-sm" >Read More...</Link>
      </div>
    </div>
  )
}

export default PostListItem
