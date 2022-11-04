export default function PostList() {
	return (
		<div className="bg-white">
			<h2 className="bg-gray-100 p-4">Popular Posts</h2>
			<ul>
				<li className="p-4 border-b hover:bg-gray-300 flex cursor-pointer">
					<img
						src="https://www.w3schools.com/w3images/workshop.jpg"
						className="w-12 h-12 object-cover mr-2"
					/>
					<div>
						<h3 className="font-bold">Lorem</h3>
						<span>Sed mattis nunc</span>
					</div>
				</li>
				<li className="p-4 border-b hover:bg-gray-300 flex cursor-pointer">
					<img
						src="https://www.w3schools.com/w3images/workshop.jpg"
						className="w-12 h-12 object-cover mr-2"
					/>
					<div>
						<h3 className="font-bold">Lorem</h3>
						<span>Sed mattis nunc</span>
					</div>
				</li>
			</ul>
		</div>
	);
}
