export default function(state = {
  headerInvert: 'invert(0)',
  backgroundColor: 'rgba(0,0,0,0)',
  mode: 'start'
}, action) {
//initial state should be set to whatever data structure you want your new state contained in
	switch (action.type) {
    case 'DEFAULTHEADER':
			return Object.assign({}, {
        headerInvert: 'invert(0)',
        backgroundColor: 'rgba(0,0,0,0)',
        mode: 'default'
      });
			break;
    case 'INVERTHEADER':
			return Object.assign({}, {
        headerInvert: 'invert(1)',
        backgroundColor: 'rgba(0,0,0,0)',
        mode: 'invert'
      });
			break;
      case 'SCROLLHEADER':
  			return {
          headerInvert: 'invert(0)',
          backgroundColor: 'rgba(255,255,255,1)',
          mode: 'scroll'
        };
      case 'MENUHEADER':
  			return {
          headerInvert: 'invert(1)',
          backgroundColor: 'rgba(0,0,0,0)',
          mode: 'menu'
        };
  			break;
        case 'INVERTHEADER':
    			return Object.assign({}, {
            headerInvert: 'invert(1)',
          });
    			break;
		default:
			return state;
			break;
	}
};
