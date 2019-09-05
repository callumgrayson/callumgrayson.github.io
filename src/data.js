import clicky from './img/clicky.png';
import compareYourself from './img/compare-yourself.png';
import glueyJots from './img/gluey-jots.png';
import jammming from './img/jammming.png';
import make24 from './img/make-24.png';
import notQuiteNews from './img/not-quite-news.png';
import ravenous from './img/ravenous.png';
import sampler from './img/sampler.jpg';
import svgClicker from './img/svg-clicker.png';
import swapi from './img/swapi.png';
import textSpeech from './img/text-speech.png';
import reactTetris from './img/react-tetris.png';
import svgStrokes from './img/svg_strokes.png';

export default [
	{
		year: 2019,
		cards: [
			{
				url: 'swapi/',
				title: 'Star Wars API',
				displayText:
					'Interface app for displaying data from the Star Wars API.',
				imgSrc: swapi
			},
			{
				url: 'svg-strokes/',
				title: 'SVG Strokes',
				displayText: 'Experiments in animating text using React.',
				imgSrc: svgStrokes
			},
			{
				url: 'react-tetris/',
				title: 'React Tetris',
				displayText:
					'Tetris created with React Hooks and Styled Components. Responsive and touch-friendly.',
				imgSrc: reactTetris
			},
			{
				title: 'Sampler',
				url: 'sampler/',
				displayText:
					'Simple random sample from a range. Add data for sample points. Calculate.',
				imgSrc: sampler
			}
		]
	},
	{
		year: 2018,
		cards: [
			{
				title: 'Ravenous',
				url: 'ravenous/',
				displayText:
					'Access the Yelp API to find businesses near you. Try highest rated or most reviewed.',
				imgSrc: ravenous
			},
			{
				title: 'Make 24',
				url: 'make-24/',
				displayText:
					'Type in a four digit number and see all arrangements with a single operation or brackets can result in 24.',
				imgSrc: make24
			},
			{
				title: 'Compare Yourself',
				url: 'compare-yourself/',
				displayText:
					'Add your details to compare to others. Full stack app. React Front. AWS back and auth.',
				imgSrc: compareYourself
			},

			{
				title: 'Gluey Jots',
				url: 'sticky/',
				displayText:
					'Write notes with title and text. Save them to local storage. Search by title. Delete as needed.',
				imgSrc: glueyJots
			},
			{
				title: 'Clicky',
				url: 'clicky/',
				displayText:
					'Add your clicks to a database. Simplest full stack app possible*. React front. AWS back.',
				imgSrc: clicky
			},
			{
				title: 'Jammming',
				url: 'jammming/',
				displayText:
					'Search Spotify for tracks. Create and save a custom playlist to your account.',
				imgSrc: jammming
			},
			{
				title: 'Web Speak',
				url: 'text-speech/',
				displayText:
					'Type text and the app will read it back to you. Choose from a range of voices. Change the rate and pitch of the voices.',
				imgSrc: textSpeech
			},
			{
				title: 'Not Quite News',
				url: 'not-quite-news/',
				displayText:
					'Progressive Web App accessing newsAPI.org. Manifest for saving app to homescreen and service worker for offline access.',
				imgSrc: notQuiteNews
			},
			{
				title: 'SVG Clicker',
				url: 'svg-clicker/',
				displayText:
					'Nested and overlapping SVG as clickable elements.',
				imgSrc: svgClicker
			}
		]
	}
];
