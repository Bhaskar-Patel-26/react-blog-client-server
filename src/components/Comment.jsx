import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-stone-50 rounded-xl mb-5">
      <div className="flex items-center gap-4">
        <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eaque
          accusantium itaque voluptatem vel similique perferendis commodi
          recusandae natus quod!
        </p>
      </div>
    </div>
  );
};

export default Comment;
