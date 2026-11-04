import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className=''>
			<div className='grid grid-cols-[15%_85%] h-screen'>
				<Sidebar />
				<main className=''>
					<Main />
				</main>
			</div>

      <Footer />
		</div>
	);
};

export default App;
