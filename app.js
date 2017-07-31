

module.exports = aritGeo;

function aritGeo(seq){
	if (seq.length == 0){
		return 0;
	}

	for (let i=0; i < seq.length; i++){

		if (seq[i-1] == undefined || seq[i+1] == undefined) {
			continue;
		}

		/*if (typeof(seq[i] != "number")){
			return -1;
		}*/

		if (seq[i] % seq[i-1] !== 0){

			// Test for arithmetic sequence
			let ariCheck = [];
			for (let i=0; i < seq.length; i++){
				if (seq[i-1] == undefined || seq[i+1] == undefined) {
					continue;
				}
				ariCheck.push(seq[i] - seq[i-1]);
			}

			let ariVar = 0;
			for (let i=0; i<ariCheck.length; i++){
				 if (ariCheck[i] == ariCheck[0]){
				 	return "Arithmetic";
				 } else {
				 	return -1;
				 }
			}

		} else if (seq[i+1] % seq[i] == 0) {

			// Test for geometric sequence
			let geoCheck = [];

			for (let i=0; i < seq.length; i++){
				if (seq[i-1] == undefined || seq[i+1] == undefined) {
					continue;
				}
				geoCheck.push(seq[i] / seq[i-1]);
			}

			let geoVar = "";
			for (let i=0; i<geoCheck.length; i++){
				 if (geoCheck[i] == geoCheck[0]){
				 	return "Geometric";
				 } else {
				 	return -1
				 }
			}
			
		}

	}


}
