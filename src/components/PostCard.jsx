import React from "react";

export default function PostCard() {
	return (
		<div className="bg-white mb-6 shadow-black-800 shadow-lg">
			<img
				src="https://www.w3schools.com/w3images/woods.jpg"
				className="w-full h-50 object-cover"
			/>
			<div className="p-4">
				<h1 className="font-bold text-lg">TITLE HEADING</h1>
				<span className="inline-block">
					Title description, April 7, 2014
				</span>
				<p className="my-6 leading-7">
					Mauris neque quam, fermentum ut nisl vitae, convallis
					maximus nisl. Sed mattis nunc id lorem euismod placerat.
					Vivamus porttitor magna enim, ac accumsan tortor cursus at.
					Phasellus sed ultricies mi non congue ullam corper. Praesent
					tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
					porta lectus vitae, ultricies congue gravida diam non
					fringilla.
				</p>
				<div className="flex justify-between">
					<button className="border px-4 py-2 hover:bg-gray-200">
						READ MORE
					</button>
					<span>Comments (0)</span>
				</div>
			</div>
		</div>
	);
}
