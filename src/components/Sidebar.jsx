import { useState } from "react";

const NAVITEMS = [
	{ title: "Your stay", img: "icon-bed.svg" },
	{ title: "The house", img: "icon-house.svg" },
	{ title: "Around town", img: "icon-pin.svg" },
	{ title: "Breakfast", img: "icon-breakfast-outline.svg" },
	{ title: "Messages", img: "icon-mail.svg" },
];

const Sidebar = ({ setMenu, menu }) => {
	const [active, setActive] = useState(0);

	return (
		<div className='h-full border-r border-neutral-200 p-5 flex justify-between flex-col'>
			<div className='border-b border-b-neutral-200 pb-3'>
				<img src='images/logo.svg' alt='Hotel booking logo' />
			</div>
			{menu && (
				<div className='md:hidden flex-1 flex flex-col'>
					<div className='flex-1 flex justify-between flex-col py-4 h-full gap-50'>
						<nav className='flex flex-col gap-1'>
							{NAVITEMS.map((item, i) => (
								<button
									className={`rounded-lg flex gap-3 px-3 py-2 font-semibold text-neutral-500 active:outline-2 active:outline-offset-2 active:outline-[hsl(15,69%,37%)] hover:bg-gray-50 cursor-pointer ${active === i && "bg-white shadow-xs text-neutral-950"}`}
									onClick={() => {
										setActive(i);
										setMenu(false);
									}}>
									<img src={`images/${item.img}`} alt={item.title} />
									{item.title}
								</button>
							))}
						</nav>

						{/* local weather */}
						<div
							className='shadow-lg rounded-2xl py-3 px-5 bg-[hsl(44,84%,75%)] flex flex-col gap-2 relative overflow-hidden
				'>
							<img
								src='images/icon-weather.svg'
								className='h-20 w-20 absolute -top-5 -right-5'
								alt=''
							/>
							<p className='font-mono font-semibold text-neutral-500 uppercase '>
								Today in Cassis
							</p>
							<p className='text-3xl font-semibold text-neutral-700 font-fraunces'>
								27°
							</p>
							<p className='text-neutral-500'>Sunny · light breeze</p>
						</div>
					</div>
					<div className='flex flex-col gap-2 font-mono-medium border-t-2 border-dotted border-t-neutral-200 text-neutral-400 pt-3 font-light text-sm uppercase'>
						<p className=''>Est. 1987</p>
						<p className=''>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
						<p className=''>© 2026 Maison Soleil</p>
					</div>
				</div>
			)}
			<div className='hidden flex-1 md:h-full md:flex md:flex-col'>
				<div className='flex-1 flex justify-between flex-col py-4'>
					<nav className='flex flex-col gap-1'>
						{NAVITEMS.map((item, i) => (
							<button
								className={`rounded-lg flex gap-3 px-3 py-2 font-semibold text-neutral-500 active:outline-2 active:outline-offset-2 active:outline-[hsl(15,69%,37%)] hover:bg-gray-50 cursor-pointer ${active === i && "bg-white shadow-xs text-neutral-950"}`}
								onClick={() => {
									setActive(i);
									setMenu(false);
								}}>
								<img src={`images/${item.img}`} alt={item.title} />
								{item.title}
							</button>
						))}
					</nav>

					{/* local weather */}
					<div
						className='shadow-lg rounded-2xl py-3 px-5 bg-[hsl(44,84%,75%)] flex flex-col gap-2 relative overflow-hidden
				'>
						<img
							src='images/icon-weather.svg'
							className='h-20 w-20 absolute -top-5 -right-5'
							alt=''
						/>
						<p className='font-mono font-semibold text-neutral-500 uppercase '>
							Today in Cassis
						</p>
						<p className='text-3xl font-semibold text-neutral-700 font-fraunces'>
							27°
						</p>
						<p className='text-neutral-500'>Sunny · light breeze</p>
					</div>
				</div>
				<div className='flex flex-col gap-2 font-mono-medium border-t-2 border-dotted border-t-neutral-200 text-neutral-400 pt-3 font-light text-sm uppercase'>
					<p className=''>Est. 1987</p>
					<p className=''>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
					<p className=''>© 2026 Maison Soleil</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
