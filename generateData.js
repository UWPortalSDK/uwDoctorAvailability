var namesMap;
function createTimeData(){
    var times = [];
    var names = ['Henry','Edward','Charles','James','William','Richard','Philip','Mary','Frederick','Arthur','Lauren','Jane','Edgar','Thomas','Edmund',
                 'George','John','Jacob','Humphrey','Robert','Stephen','Adam','Alexander','Albert','Alfred',
                 'Ambrose','Andrew','Anthony','Archibald','Benjamin','Christopher','Daniel','David'];
    var minute = 540;
    for(var j=0;j<10;j++){
        var start = moment([2016, 10, 29, minute/60, minute%60]).format();
        minute+=15;
        var end = moment([2016, 10, 29, minute/60, minute%60]).format();
        minute+=15;
        var ran = Math.floor(Math.random() * names.length);
        var doctors = Object.keys(namesMap).slice(0,ran);
		times.push({'start':start,'end':end,'doctors':doctors});
    }
    console.log(times);
    return times;
}
function scrapeRealNames(){
    var doctors = {};
    
    $.get('/Develop/GetProxy?url=https://uwaterloo.ca/health-services/about/people',
    function(response){
        
        var doc = document.implementation.createHTMLDocument("");
        doc.documentElement.innerHTML = response;
        var jq = $(doc);
        var resultObjects = jq.find('.entry h2 a').map(function(){
               return $.trim($(this).text());
            }).get();
        console.log(resultObjects);
        var resultTitles = jq.find('.entry .title').map(function(){
               return $.trim($(this).text());
            }).get();
                console.log(resultTitles);

        for(var i=0;i<resultObjects.length;i++){
          doctors[resultObjects[i]] = resultTitles[i]; 
        }
        namesMap =  doctors;
    });
}
$(document).ready(function () {
  //your code here
  scrapeRealNames();
});
function inTimeRange(start,end,timeSlot){
	var timeSlotStart = moment(timeSlot.start);
    var timeSlotEnd = moment(timeSlot.end);
    return (moment(start)>timeSlot.start && moment(end)>timeSlotEnd);    
}

