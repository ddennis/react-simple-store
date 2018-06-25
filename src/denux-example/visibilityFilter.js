/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 25-06-2018.
 */

export function visibilityFilter (items, filter) {


	console.log (" visibilityFilter.js > filter = " , filter);
	
	switch (filter) {
		case 'SHOW_ALL':
			return items;
		case 'SHOW_FIRST':

			return items.filter((t, index) =>{
					if (index === 0){
						return t
					}
					return null

				}
			);

	}
}