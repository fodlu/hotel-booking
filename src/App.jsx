import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className='font-sans h-screen bg-[hsl(41,100%,93%)] text-sm'>
			<div className='grid grid-cols-[20%_80%] h-screen'>
				<Sidebar />
				<main className='p-5'>
					<Main />
				</main>
			</div>

      <Footer />
		</div>
	);
};

export default App;
