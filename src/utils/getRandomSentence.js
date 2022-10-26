const sentences = [
	"The clock within this blog and the clock on my laptop are 1 hour different from each other.",
	"They ran around the corner to find that they had traveled back in time.",
	"I hear that Nancy is very pretty. ",
	"Sometimes you have to just give up and win by cheating.",
	"Blue sounded too cold at the time and yet it seemed to work for gin.",
	"The green tea and avocado smoothie turned out exactly as would be expected.",
	"In that instant, everything changed. ",
	"It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.",
	"There are over 500 starfish in the bathroom drawer.",
	"The murder hornet was disappointed by the preconceived ideas people had of him.",
	"It's not often you find a soggy banana on the street.",
	"The Japanese yen for commerce is still well-known.",
	"Shakespeare was a famous 17th-century diesel mechanic. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
];

const getRandomSentence = () => {
	const randomIndex = Math.floor(Math.random() * sentences.length);
	const sentence = sentences[randomIndex];
	return sentence;
};

export default getRandomSentence;
