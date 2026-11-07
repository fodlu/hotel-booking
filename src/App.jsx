import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
	const [menu, setMenu] = useState(false)
	return (
		<div className='relative font-sans bg-[hsl(41,100%,93%)] text-sm'>

			<button type="button" onClick={() => setMenu(prev=> !prev)} className="absolute md:hidden top-5 right-5 z-1000 border border-neutral-300 p-1 rounded-sm cursor-pointer">{menu ? <img src="images/icon-close.svg" alt="control" /> : <img src="images/icon-menu.svg" alt="control" /> }</button>
			<div className='relative md:grid md:grid-cols-[20%_80%]'>
				<div className={`md:block md:sticky md:top-0 max-h-screen w-full z-100 left-0 top-0 bg-[hsl(41,100%,93%)] md:shrink-0`}>
					<Sidebar setMenu={setMenu} menu={menu} />
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
