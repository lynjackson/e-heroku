const titles = [
  'Renounce & Enjoy',
  'Creativity',
  'Abundance Mindset',
  'Consistent Evaluation',
  'Client Service',
  'Experience',
  'Openness',]

const texts = [
  'When we are compulsively attached to the results of our work, it makes it more difficult to simply enjoy what we are doing',
  'Creativity is not the capacity to draw or compose or sculpt, but a way of understanding the world',
  'With ideas, we strive to maintain an abundance mindset, clinging to ideas no longer than we need to because we know there will always be more',
  'Regularly question practices in life and work. Reassess which behaviors are productive and which are destructive. Adjust accordingly.',
  'Good client service is one of our highest ideals because of the trust implied when handing something important to you, over to us.',
  'We try not to take our or others’ experience for granted. We see it as the the greatest gift we’re given.',
  'Life is full of mystery. Only by embracing the unknown and remaining open to all are we free enough to find solutions we can’t initially imagine.',



]


export default function(state = {
  page: 0,
  backgroundColorValue: 0,
  headerInvert: 1,
  textColor: 'white',
  title: 'Renounce & Enjoy',
  text: 'When we are compulsively attached to the results of our work, it makes it more difficult to simply enjoy what we are doing',
}, action) {
//initial state should be set to whatever data structure you want your new state contained in
	switch (action.type) {
		case 'NEXTPAGE':
			return Object.assign(state, {
          page: state.page+1,
          backgroundColorValue: state.backgroundColorValue+40,
          headerInvert: ()=>{(state.page > 1) ? 1: 0},
          textColor: ()=>{state.page > 1 ? 'white': 'black'},
          title: titles[state.page+1],
          text: texts[state.page+1],
      });
			break;
      case 'PREVPAGE':
  			return Object.assign(state, {
            page: state.page-1,
            backgroundColorValue: state.backgroundColorValue-40,
            headerInvert: ()=>{(state.page > 1) ? 1: 0},
            textColor: ()=>{state.page > 1 ? 'white': 'black'},
            title: titles[state.page-1],
            text: texts[state.page-1],
        });
  			break;
		default:
			return state;
			break;
	}
};

// backgroundColor: this.state.backgroundColorValue + 20,
// headerInvert: ()=>{return this.page > 1 ? 1: 0},
// textColor: ()=>{return this.page > 1 ? 'white': 'black'},
// title: 'Good Design Aims to Be Part Of Something Greater than Itself',
// text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',


// backgroundColor: `rgb(${state.backgroundColorValue}, ${state.backgroundColorValue}, ${state.backgroundColorValue}, )`,

// const characters = {
//   1: { id: 1, firstName: "Jeffrey", lastName: "Lebowski" },
//   2: { id: 2, firstName: "Walter", lastName: "Sobchak" },
//   3: { id: 3, firstName: "Donald", lastName: "Kerabatsos" }
// };
// const maude = { id: 4, firstName: "Maude", lastName: "Lebowski" };
//
// const newCharacters = { ...characters, [maude.id]: maude };
// //add maude
//
//
// const updateId = 1;
// const updatedCharacter = { id: 1, firstName: "The", lastName: "Dude" };
//
// const newCharacters = { ...characters, [updateId]: updatedCharacter };
// //Modify The Dude's property
