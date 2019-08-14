export default function(state = {
  headerInvert: 'invert(0)',
  backgroundColor: 'rgba(0,0,0,0)',
  mode: 'start',
  headerHeight: '50px',
  display: 'none'
}, action) {
//initial state should be set to whatever data structure you want your new state contained in
	switch (action.type) {
    case 'DEFAULTHEADER':
			return Object.assign({}, {
        headerInvert: 'invert(0)',
        backgroundColor: 'rgba(0,0,0,0)',
        mode: 'default',
        headerHeight: '50px',
        display: 'none'
      });
      case 'VALUESHEADER':
  			return Object.assign({}, {
          headerInvert: 'invert(1)',
          backgroundColor: 'rgba(0,0,0,0)',
          mode: 'default',
          headerHeight: '50px',
          display: 'none'
        });
			break;
    case 'INVERTHEADER':
			return Object.assign({}, {
        headerInvert: 'invert(1)',
        backgroundColor: 'rgba(0,0,0,0)',
        mode: 'invert',
        headerHeight: '50px',
        display: 'none'
      });
			break;
      case 'SCROLLHEADER':
  			return {
          headerInvert: 'invert(1)',
          backgroundColor: 'rgb(51, 51, 51)',
          mode: 'scroll',
          headerHeight: '50px',
          display: 'none'
        };
      case 'MENUHEADER':
  			return {
          headerInvert: 'invert(1)',
          backgroundColor: 'rgb(51,51,51)',
          mode: 'menu',
          headerHeight: '100vh',
          display: 'flex'
        };
  			break;
        case 'INVERTHEADER':
    			return Object.assign({}, {
            headerInvert: 'invert(1)',
            headerHeight: '50px',
            display: 'none'
          });
    			break;
		default:
			return state;
			break;
	}
};
