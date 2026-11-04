import React from "react";

const NAVITEMS = [
    {title: "Your  stay", img: "icon-bed.svg"}
]

const Sidebar = () => {
	return (
		<div className='border-r border-neutral-200 p-3'>
			<div className=''>
				<img src='images/logo.svg' alt='Hotel booking logo' />
			</div>
			<div className=''>
				<nav className=''></nav>

				{/* local weather */}
				<div className=''>
					<p className=''>Today in Cassis</p>
					<p className=''>27°</p>
					<p className=''>Sunny · light breeze</p>
				</div>
			</div>
			<div className=''>
				<p className=''>Est. 1987</p>
				<p className=''>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
				<p className=''>© 2026 Maison Soleil</p>
			</div>
		</div>
	);
};

export default Sidebar;
