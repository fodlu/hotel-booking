import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className='font-sans bg-[hsl(41,100%,93%)] text-sm'>
			<div className='grid grid-cols-[20%_80%]'>
				<div className='sticky top-0 h-screen shrink-0'>
					<Sidebar />
				</div>
				<main className='p-5'>
					<Main />
				</main>
			</div>

			<Footer />
		</div>
	);
};

export default App;
