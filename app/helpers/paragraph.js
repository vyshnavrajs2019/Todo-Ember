import { helper } from '@ember/component/helper';

export function paragraph([content]/*, hash*/) {
	let paragraphs = content.split("\n");
  	return paragraphs;
}

export default helper(paragraph);
