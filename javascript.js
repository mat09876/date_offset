(function calander() {


var parent = document.querySelectorAll('.mat-calndr')[0];
var getFirstDayInMonth = function(month, year) {
	return new Date(year, month - 1, 1);
};

var getLastDayinMonth = function(month, year) {
	return new Date(year, month, 0)
};

var getNoDayInMonth = function(month, year) {
	return getLastDayinMonth(month, year).getDate();
};
var getFirstIndex = function(month, year) {
	var day = getFirstDayInMonth(month, year).getDay();
	return day === 0 ? 6 : day - 1;
};

var getDayByOffset = function(d, offset) {
	var day = new Date(d.getFullYear(), d.getMonth(), d.getDate() + offset);
	return day.getDate() + '-' + day.getMonth() + '-' + day.getFullYear();
}

var makeEle = function(type, option) {
	var ele = type === 'frag' ? document.createDocumentFragment() : document.createElement(type);
	if(option) {
		for(i in option) {
			ele[i] = option[i];
		}
	}
	return ele;
};

var capitalize = function(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
};


var curMonth = 9;
var curYear = 2016

//problem
// - the function is tooooo long and big

function createCalendar() {
	var table = makeEle('table'),
		frag = makeEle('frag'),
		firstIndex = getFirstIndex(curMonth, curYear),
		noOfDaysInMonth = getNoDayInMonth(curMonth, curYear),
		tr, td, i = 0,
		count = 0,
		weekHeadings = ['mo','tr','we','th','fr','sa','sn'];

	table.onclick = function(e) {
		console.log(e.target);
	};
	tr = makeEle('tr');
	var th;
	for(i = 0; i  < weekHeadings.length; i ++) {
		th = makeEle('th', 'calndr__heading');
		th.innerText = capitalize(weekHeadings[i]);
		tr.appendChild(th);
	}
	table.appendChild(tr);
 
	for(i = 0; i < 42; i += 1) {
		if(i % 7 === 0) {
			tr = makeEle('tr');
			frag.appendChild(tr);
		}
		td = makeEle('td', {
			className: 'calndr__day'
		});

		td.innerText = (count >= firstIndex && count < noOfDaysInMonth + firstIndex) ? i - firstIndex + 1 : '';
		tr.appendChild(td);
		count++;
	}
	table.appendChild(frag);
	parent.appendChild(table);
};

createCalendar();


}());

                                                                                                                                                                                                                                                                                                                                                  
