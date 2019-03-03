import { isArray } from 'basic-data-handling/isArray_notArray';
import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { ifIndexNotNegative_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';
import { replaceAt } from '@writetome51/array-replace-at';
import { arraysMatch } from '@writetome51/arrays-match';
import { _doMultiReplace } from './private_functions';


// Won't work if value is object.

export function replaceFirstOf(value, newValue, array): void {
	if ((isArray(value) && isArray(newValue) && arraysMatch(value, newValue)) ||
		(value === newValue)) {
		throw new Error('The value to replace and the new value are identical.  This is not allowed.');
	}
	let index = getFirstIndexOf(value, array);
	ifIndexNotNegative_getActionResult(index, () => {
		replaceAt(index, newValue, array);
	});
}


// Won't work if values contains object.

export function replaceFirstOfEach(values: any[], newValues: any[], array): void {
	_doMultiReplace(replaceFirstOf, values, newValues, array);
}