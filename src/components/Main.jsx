const CHECKS = [
	{ check: "CHECK IN", date: "25 Apr", day: "Saturday · 15:00" },
	{ check: "CHECK OUT", date: "29 Apr", day: "Wednesday · 11:00" },
];

const ITEMSBOUGHT = [
	{ item: "Room · La Garrigue · 4 nights", price: "€ 620.00" },
	{ item: "Breakfast · 2 guests", price: "€ 96.00" },
	{ item: "Tourist tax", price: "€ 14.40" },
];

const Main = () => {
	return (
		<>
			<div className='flex items-center justify-between'>
				<div className=''>
					<p className='text-xs uppercase font-mono-medium text-neutral-500 mb-1'>
						Booking · Confirmed
					</p>
					<p className='font-fraunces text-2xl font-semibold'>
						Bienvenue,{" "}
						<span className='italic text-[hsl(15,69%,37%)]'>Lucia.</span>
					</p>
				</div>
				<div className='flex gap-3'>
					<button className='cursor-pointer border-2 border-neutral-300 py-2 px-5 font-semibold text-neutral-900 rounded-4xl'>
						Print receipt
					</button>
					<button className='cursor-pointer py-2 px-5 font-semibold bg-neutral-900 rounded-4xl text-neutral-200'>
						Add to calendar
					</button>
				</div>
			</div>

			{/* Reciept and card */}
			<section className='flex'>
				{/* Reciept */}
				<div className='bg-white w-100 p-5 rounded-2xl'>
					<div className='flex justify-between pb-3 border-b-2 border-neutral-200 border-dotted'>
						<div className=''>
							<p className='uppercase font-mono text-xs text-neutral-400'>
								Receipt
							</p>
							<p className='font-semibold font-fraunces text-xl'>Your stay</p>
						</div>
						<div className=''>
							<p className='font-mono-medium text-xs text-neutral-400 text-right'>
								№ MS-2026
								<span className='block'>0421-AH</span>
							</p>
						</div>
					</div>

					{/* checks in and out */}
					<div className='flex justify-around py-5 border-b-2 border-neutral-200 border-dotted '>
						{CHECKS.map((item) => (
							<div
								key={item.check}
								className='flex items-center flex-col gap-2'>
								<p className='font-mono-medium text-xs text-neutral-400'>
									{item.check}
								</p>

								<p className='font-fraunces text-4xl'>{item.date}</p>

								<p className='text-neutral-500 font-semibold'>{item.day}</p>
							</div>
						))}
					</div>

					{/* list items */}
					<div className='flex flex-col w-full font-semibold gap-1.5 border-b-2 border-b-neutral-500 py-5'>
						{ITEMSBOUGHT.map((item) => (
							<p className='w-full flex justify-between'>
								{" "}
								{item.item}
								<span className=''>{item.price}</span>
							</p>
						))}
					</div>

					{/* total */}
					<div className='flex justify-between py-5 items-center'>
						<p className='font-mono uppercase text-neutral-400'>Total paid</p>
						<p className='font-fraunces text-2xl font-semi-bold'>€ 730.40</p>
					</div>

					<div className='flex justify-between items-center'>
						<p className='font-mono-medium uppercase text-xs text-neutral-400'>
							Paid · Wise · GBP
						</p>

						<img src='images/icon-barcode.svg' alt='barcode image' />
					</div>
				</div>

				{/* <div className='bg-radial-[at_70%_10%] from-[hsl(22,72%,56%)] via-[hsl(18,62%,47%)] to-[hsl(15,69%,37%)] border-2 w-100 p-5 rounded-2xl'> */}
				<div className='flex flex-col justify-between bg-[radial-gradient(circle_at_75%_15%,hsl(22,72%,56%)_0%,hsl(18,62%,47%)_35%,hsl(15,69%,37%)_65%,hsl(15,69%,37%)_100%)] w-100 p-5 rounded-2xl'>
					<span className='w-full border-t-2 pt-4 border-dashed border-[hsl(22,72%,56%)] uppercase text-[hsl(41,100%,93%)] text-xs'>
						welcome card
					</span>

					<div className=''>
						<p className='font-fraunces text-[hsl(44,84%,75%)] italic'>
							A note from your host,{" "}
							<span className='block pt-2 text-3xl font-fraunces-italic text-[hsl(41,100%,93%)]'>
								Margaux.
							</span>
						</p>

						<p className=' font-sans text-[hsl(41,100%,93%)] mt-8'>
							{" "}
							We're so glad you're coming. The shutters will be open, the
							lemonade cold, and the cat - Poivre - pretending not to notice
							you.
						</p>
					</div>

					<p className='font-mono uppercase text-xs text-[hsl(41,100%,93%)]'>
						Room <span className='block font-fraunces text-lg capitalize font-semibold'>La Garrigue</span>
					</p>
				</div>
			</section>

			{/* Guest info row  */}
			<section className=''>
				<div className=''>
					<div className=''>
						<div className=''>
							<div className=''>
								<img src='images/icon-key.svg' alt='' />
							</div>
							<p className=''>Arrival</p>
						</div>
						<p className=''>01</p>
					</div>
					<p className=''>Check-in from 15:00</p>
					<span className=''>Sat, 25 April</span>
					<p className=''>
						Ring the brass bell by the blue door. If we're at the market, the
						key is in the terracotta pot by the olive tree.
					</p>
				</div>

				<div className=''>
					<div className=''>
						<div className=''>
							<div className=''>
								<img src='images/icon-key.svg' alt='' />
							</div>
							<p className=''>Wifi</p>
						</div>
						<p className=''>02</p>
					</div>
					<p className=''>Le Soleil · Guest</p>
					<span className=''>Password below</span>
					<div className=''>
						<p className=''>Network</p>
						<p className=''>Le Soleil · Guest</p>
					</div>

					<div className=''>
						<p className=''>Password</p>
						<div className=''>
							<p className=''>soleil-2026</p>
							<button className=''>Copy</button>
						</div>
					</div>
				</div>

				<div className=''>
					<div className=''>
						<div className=''>
							<div className=''>
								<img src='images/icon-key.svg' alt='' />
							</div>
							<p className=''>Breakfast</p>
						</div>
						<p className=''>03</p>
					</div>
					<p className=''>Served 8 - 10:30</p>
					<span className=''>On the terrace</span>
					<p className=''>
						Fresh figs, Marseille honey, pain au levain, and espresso.
						Gluten-free option? Leave a note the night before.
					</p>
				</div>
			</section>
		</>
	);
};

export default Main;
