import React from "react";

const Main = () => {
	return (
		<div>
			<div className=''>
				<div className=''>
					<p className=''>Booking · Confirmed</p>
					<p className=''>Bienvenue, Lucia.</p>
				</div>
				<div className=''>
					<button className=''>Print receipt</button>
					<button className=''>Add to calendar</button>
				</div>
			</div>

			{/* Reciept and card */}
			<section className=''>
				{/* Reciept */}
				<div className=''>
					<div className=''>
						<div className=''>
							<p className=''>Receipt</p>
							<p className=''>Your stay</p>
						</div>
						<div className=''>
							<p className=''>
								№ MS-2026
								<span>0421-AH</span>
							</p>
						</div>
					</div>

					{/* checks in and out */}
					<div className=''>
						<div className=''>
							<p className=''>CHECK IN</p>

							<p className=''>25 Apr</p>

							<p className=''>Saturday · 15:00</p>
						</div>
						<div className=''>
							<p className=''>CHECK OUT</p>

							<p className=''>29 Apr</p>

							<p className=''>Wednesday · 11:00</p>
						</div>
					</div>

					{/* list items */}
					<div className=''>
						<p className=''>
							Room · La Garrigue · 4 nights
							<span className=''>€ 620.00</span>
						</p>
						<p className=''>
							Breakfast · 2 guests
							<span className=''>€ 96.00</span>
						</p>
						<p className=''>
							Tourist tax
							<span className=''>€ 14.40</span>
						</p>
					</div>

					{/* total */}
					<div className=''>
						<p className=''>Total paid</p>
						<p className=''>€ 730.40</p>
					</div>

					<div className=''>
						<p className=''>Paid · Wise · GBP</p>

						<img src='images/icon-barcode.svg' alt='barcode image' />
					</div>
				</div>

				<div className=''>
					<div className='' />

					<span className=''>welcome card</span>

					<p className=''>
						A note from your host, <span className=''>Margaux.</span>
					</p>

					<p className=''>
						{" "}
						We're so glad you're coming. The shutters will be open, the lemonade
						cold, and the cat - Poivre - pretending not to notice you.
					</p>

					<p className=''>
						Room <span className=''>La Garrigue</span>
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
							<p className=''>Wifi
  </p>
						</div>
						<p className=''>02</p>
					</div>
					<p className=''>Le Soleil · Guest</p>
					<span className=''>Password below</span>
					<div className="">
            <p className="">Network</p>
            <p className="">Le Soleil · Guest</p>
          </div>

          <div className="">
            <p className="">Password</p>
            <div className="">
              <p className="">soleil-2026</p>
              <button className="">Copy</button>
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
		</div>
	);
};

export default Main;
