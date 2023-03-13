export const JournalEntry = () => {
	return (
		<div className='journal__entry pointer'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgZgriAxeXJILn97a50mNY4an6T4Bl9Z3_rX6g0cV&s)',
				}}
			></div>

			<div className='journal__entry-body'>
				<p className='journal__entry-title'>Un nuevo dia</p>
				<p className='journal__entry-content'>Lorem ipsum dolor sit.</p>
			</div>

			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	)
}
