import React from "react";

export default function ChatAbout() {
	return (
		<div className="flex-1 flex items-center justify-center bg-gray-900 min-h-screen">
			<div className="text-center space-y-8 p-8">
				<h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-green-500 to-purple-600 text-transparent bg-clip-text animate-pulse">
					Welcome to Daily Chat
				</h1>
				<p className="w-full md:w-3/4 lg:w-1/2 mx-auto text-lg text-gray-300 leading-relaxed font-light tracking-wide bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
					Step into the future of real-time communication! Powered by the lightning-fast Supabase database, Daily Chat lets you send messages instantly and stay connected effortlessly. Log in now and join the conversation!
				</p>
			</div>
		</div>
	);
}
