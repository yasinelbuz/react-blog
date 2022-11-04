import Header from "./components/Header";
import MainSide from "./components/MainSide";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<div className="container mx-auto">
				<div className="flex gap-6">
					<MainSide />
					<SideBar />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
