function createData(){
 var mockData = [];
 for (var i=0;i<10;i++){
    var name = 'Doctor'+i;
    var times = [];
    for(var j=0;j<10;j++){
        var start = moment([2016, 10, 19+i, 10+j, 15]).format();
        var end = moment([2016, 10, 19+i, 10+j, 55]).format();
        times.push({'start':start,'end':end});     
    }
    var obj = {
			'name': name,
			'availability':times,
			'speciality': 'Software',
	};
    mockData.push(obj);
 }  
 return mockData;
};

function createTimeData(){
    var times = [];
    var names = ['Henry','Edward','Charles','James','William','Richard','Philip','Henry','Frederick','Arthur','Charles','James','Edgar','Thomas','Edmund',
                 'George','John','Jacob','Humphrey','Robert','Stephen','Adam','Alexander','Albert','Alfred',
                 'Ambrose','Andrew','Anthony','Archibald','Benjamin','Christopher','Daniel','David'];
    var minute = 540;
    for(var j=0;j<10;j++){
        var start = moment([2016, 10, 29, minute/60, minute%60]).format();
        minute+=15;
        var end = moment([2016, 10, 29, minute/60, minute%60]).format();
        minute+=15;
        var ran = Math.floor(Math.random() * names.length);
        var doctors = names.slice(0,ran);
		times.push({'start':start,'end':end,'doctors':doctors});
    }
    console.log(times);
    return times;
}


function inTimeRange(start,end,timeSlot){
	var timeSlotStart = moment(timeSlot.start);
    var timeSlotEnd = moment(timeSlot.end);
    return (moment(start)>timeSlot.start && moment(end)>timeSlotEnd);    
}

