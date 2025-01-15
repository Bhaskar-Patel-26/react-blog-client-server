import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser() 

  if(!isLoaded){
    return <div>Loading...</div>
  }
  if(isLoaded && !isSignedIn){
    return <div>You should login!</div>
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[clac(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">Add a cover image</button>
        <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="My Awesome Story..." />
        <div className="flex items-center gap-4">
          <label htmlFor="" >Choose a category:</label>
          <select name="cat" className="p-2 rounded-xl bg-white shadow-md outline-none">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="seo">SEO</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea className="p-4 rounded-xl bg-white shadow-md outline-none" name="desc" placeholder="A short description..." rows="2" />
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow-md" />
        <button className="bg-blue-800 text-white font-medium rounded-2xl p-2 w-36">Send</button>
      </form>
    </div>
  )
}

export default WritePage
