import { useState } from "react";

const CHECKS = [
	{ check: "CHECK IN", date: "25 Apr", day: "Saturday · 15:00" },
	{ check: "CHECK OUT", date: "29 Apr", day: "Wednesday · 11:00" },
];

const ITEMSBOUGHT = [
	{ item: "Room · La Garrigue · 4 nights", price: "€ 620.00" },
	{ item: "Breakfast · 2 guests", price: "€ 96.00" },
	{ item: "Tourist tax", price: "€ 14.40" },
];

const FEATURES = [
	{
		img: "images/icon-key.svg",
		tag: "Arrival",
		step: "01",
		title: "Check-in from 15:00",
		date: "Sat, 25 April",
		detail:
			"Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.",
	},
	{
		img: "images/icon-wifi.svg",
		tag: "Wifi",
		step: "02",
		title: "Le Soleil · Guest",
		date: "Password below",
		wifi: true,
		password: "soleil-2026",
	},
	{
		img: "images/icon-key.svg",
		tag: "Breakfast",
		step: "03",
		title: "Served 8 - 10:30",
		date: "On the terrace",
		detail:
			"Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.",
	},
];

const Main = () => {
	const password = "soleil-2026";
	const [passwordText, setPasswordText] = useState(false);
	const handlecopy = async (textToCopy) => {
		await navigator.clipboard.writeText(textToCopy);
		setPasswordText(true);

		setTimeout(() => {
			setPasswordText(false);
		}, 3000);
	};
	return (
		<>
			<div className='flex flex-col md:flex-row md:items-center justify-between w-full'>
				<div className=''>
					<p className='text-xs uppercase font-mono-medium text-neutral-500 mb-1'>
						Booking · Confirmed
					</p>
					<p className='font-fraunces  text-3xl md:text-4xl font-semibold'>
						Bienvenue,{" "}
						<span className='italic text-[hsl(15,69%,37%)]'>Lucia.</span>
					</p>
				</div>
				<div className='flex gap-3 mt-5 md:mt-0'>
					<button className='flex-1 active:outline-2 active:outline-offset-2 active:outline-[hsl(15,69%,37%)] cursor-pointer border-2 border-neutral-300 py-0 md:py-2 md:px-5 font-semibold text-neutral-900 rounded-4xl'>
						Print receipt
					</button>
					<button className='flex-1 active:outline-2 active:outline-offset-2 active:outline-[hsl(15,69%,37%)] border-2 border-neutral-300 cursor-pointer py-2 px-5 font-semibold bg-neutral-900 rounded-4xl text-neutral-200 md:text-nowrap'>
						Add to calendar
					</button>
				</div>
			</div>

			{/* Reciept and card */}
			<section className='flex flex-col-reverse md:grid md:grid-cols-6 py-20'>
				{/* Reciept */}
				<div className='bg-white col-start-2 z-10 shadow-xl md:h-fit w-full md:w-100 p-5 rounded-2xl -rotate-3'>
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
							<p key={item.item} className='w-full flex justify-between'>
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

				{/* welcome card */}
				{/* <div className='bg-radial-[at_70%_10%] from-[hsl(22,72%,56%)] via-[hsl(18,62%,47%)] to-[hsl(15,69%,37%)] border-2 w-100 p-5 rounded-2xl'> */}
				<div className='flex flex-col col-start-4 z-50 shadow-xl md:w-100 justify-between gap-5 bg-[radial-gradient(circle_at_75%_15%,hsl(22,72%,56%)_0%,hsl(18,62%,47%)_35%,hsl(15,69%,37%)_65%,hsl(15,69%,37%)_100%)] p-5 rounded-2xl rotate-3'>
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

					<p className='font-mono uppercase text-xs text-[hsl(41,100%,93%)] mt-7'>
						Room{" "}
						<span className='block font-fraunces text-lg capitalize font-semibold'>
							La Garrigue
						</span>
					</p>
				</div>
			</section>

			{/* Guest info row  */}
			<section className='flex flex-col gap-5 md:flex-row'>
				{FEATURES.map((item, i) => (
					<div
						key={item.step}
						className='flex-1 shadow-lg rounded-3xl p-4 bg-[hsl(0,0%,100%)]'>
						<div className='flex flex-col gap-5'>
							<div className='flex justify-between items-center'>
								<div className='flex items-center gap-2'>
									<div
										className={`flex p-1 rounded-md ${!(i % 2) ? "bg-[hsl(15,69%,37%)]" : "bg-blue-500"}`}>
										<img src={item.img} alt='' />
									</div>
									<p
										className={`uppercase font-mono-medium text-xs ${!(i % 2) ? "text-[hsl(15,69%,37%)]" : "text-blue-500"}`}>
										{item.tag}
									</p>
								</div>
								<p
									className={`font-fraunces text-lg ${!(i % 2) ? "text-[hsl(15,69%,37%)]" : "text-blue-500"}`}>
									{item.step}
								</p>
							</div>
							<div className=''>
								<p className='font-fraunces font-semibold text-lg text-neutral-950'>
									{item.title}
								</p>
								<span className='text-xs text-neutral-500'>{item.date}</span>
							</div>
							{!item.wifi ?
								<p className='text-xs text-neutral-500 font-semibold'>
									{item.detail}
								</p>
							:	<div className='flex flex-col text-xs gap-2'>
									<div className='flex justify-between uppercase font-mono bg-neutral-200 py-1.5 px-2 rounded-lg'>
										<p className='text-neutral-500'>Network</p>
										<p className='font-normal md:font-semibold'>{item.title}</p>
									</div>
									<div className='rounded-lg py-1.5 px-2 bg-neutral-200 flex justify-between'>
										<p className='uppercase text-xs font-mono text-neutral-500'>
											password
										</p>

										<div className='flex gap-2'>
											<p className='font-semibold'>{password}</p>
											<button
												type='button'
												onClick={() => handlecopy(password)}
												className='cursor-pointer uppercase border px-1.5 rounded-xl text-neutral-400 active:outline-2 active:outline-offset-2 active:outline-[hsl(15,69%,37%)]'
												disabled={passwordText}>
												{!passwordText ? "COPY" : "COPIED"}
											</button>
										</div>
									</div>
								</div>
							}
						</div>
					</div>
				))}
			</section>
		</>
	);
};

export default Main;
