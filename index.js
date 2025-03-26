(function () {
	
Math.interpolate = lagrangeInterpolation;

function lagrangeInterpolation(points) {
	return function (x) {
		return points.reduce((acc,[,yi],i) => {
			return acc + yi * _lg(i,x);
		},0);
	};
	
	function _lg(i,x) {
		const [xi] = points[i];
		return points.reduce((acc,[xj],j) => {
			return acc * (
				((x-xj)/(xi-xj))**(1-(j===i))
			);
		},1);
	}
}

})()
