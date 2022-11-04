import PostCard from "./PostCard";
import PostList from "./PostList";
import Tags from "./Tags";

export default function SideBar() {
	return (
		<div className="w-2/6">
			<PostCard />
			<PostList />
			<Tags />
		</div>
	);
}
