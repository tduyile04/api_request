// displays JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyAW7pRu4gSMLOd_VUDjfMGgP8FBHsIHjpc');
    //showResponse("Welcome");
    search();

    //https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyAW7pRu4gSMLOd_VUDjfMGgP8FBHsIHjpc&part=snippet
}
function search() {
    // Makes a search.list() API call using JavaScript client library.
    var request = gapi.client.youtube.search.list({
        part: 'snippet', q: 'andela'
    });
    
    // Sends the request to the API server,
    // and invoke onSearchReponse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
	showResponse(response);
}