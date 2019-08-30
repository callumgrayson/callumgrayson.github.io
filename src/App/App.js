import React from 'react';
import styles from './App.module.scss';
import ghIcon from '../img/GitHub-Mark-32px.png';
import data from '../data';

function App() {
	return (
		<div className={styles.App}>
			<a
				className={styles.gh_link}
				href="https://github.com/callumgrayson"
				rel="noopener noreferrer"
			>
				<img src={ghIcon} alt="GitHub icon link" />
			</a>

			<div className={styles.container}>
				<div className={styles.head_area}>
					<h1>Callum Grayson - Developer</h1>
					<div className={styles.intro}>
						<h4>
							Building functional, easy-to-use websites and web
							apps using the latest technologies.
						</h4>
					</div>
				</div>

				<div className={styles.App}>
					<h2>Projects</h2>

					<div>
						{data.map((el) => (
							<div className={styles.card_space}>
								<h2>{el.year}</h2>
								{/* <div className={styles.cards}> */}
								{el.cards.map((card) => (
									<div className={styles.card}>
										<a
											href={`https://callumgrayson.github.io/${card.url}`}
											rel="noopener noreferrer"
											className={styles.card_image_link}
										>
											<h4 className={styles.card_title}>
												{card.title}
											</h4>
											<div
												className={
													styles.card_image_box
												}
											>
												<img
													className={
														styles.card_image
													}
													src={card.imgSrc}
													alt={`Screenshot of the ${card.title} app`}
												/>
											</div>
										</a>
										<p className={styles.card_caption}>
											{card.displayText}
										</p>
									</div>
								))}
								{/* </div> */}
							</div>
						))}
					</div>
				</div>
			</div>

			<div className={styles.bottom_area} />
			<div className={styles.face_spacer} />
		</div>
	);
}

export default App;
