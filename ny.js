var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
});


// $("#searchButton").on("click", function() {
    $.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {
  console.log(result.response.docs[0].headline.main);
  var results = result.response.docs;
  for (var i = 0; i < results.length; i++) {

// Step 3: uncomment the for loop above and the closing curly bracket below.
// Make a div with jQuery and store it in a variable named searchDiv.
var searchDiv = $("<div>"); //creates empty div
// Make a paragraph tag with jQuery and store it in a variable named p.
var headline = $("<h2>")
// Set the inner text of the paragraph to the rating of the image in results[i].
headline.text(results[i].headline.main);
// Make an image tag with jQuery and store it in a variable named animalImage.
// var animalImage = $("<img>");
// Set the image's src to results[i]'s fixed_height.url.
// animalImage.attr("src", results[i].images.fixed_height.url);
// Append the p variable to the animalDiv variable.
// animalDiv.append(p);
// Append the animalImage variable to the animalDiv variable.
// animalDiv.append(animalImage);
// Prepend the animalDiv variable to the element with an id of gifs-appear-here.
// $("#gifs-appear-here").prepend(animalDiv);
// ============= put step 3 in between these dashes ======================

// ==================================
}
}).fail(function(err) {
  throw err;
});
// });

//

//title
//author
//datetime
//url