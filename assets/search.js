var logTime = {};

function searchEngine(searchString, searchKey, searchData) {
	logTime.start = Date.now();
	var result = [];

	$.each(searchData, function(i, item) {
		if (this[searchKey].toLowerCase().indexOf(searchString) > 0) {
			result.push(item);
		}

	});
	return result;
};

var source = $("#results").html();
var template = Handlebars.compile(source);

$("#searchText, #searchField").on("change paste keyup", function() {
	var searchText = $("#searchText").val().toLowerCase();
	var searchField = $("#searchField").val();

	var searchResult = searchEngine(searchText, searchField, data)
	var html = template(searchResult);

	$("#output").html(html);
	$("#output").prepend("Ditemukan <b>" + searchResult.length + "</b> Video. Total Video <b>" + data.length +"</b");
});

var $results = $('#output').isotope({
	itemSelector: '.sort-item'
});

$('button.sort').click(function() {
	var filterValue = $(this).data(filter);
	$results.isotope({
		filter: filterValue
		
	});
});