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
			'speciality': 'Software'
	};
    mockData.push(obj);
     
     
 }  
 return mockData;
    
    
};

function inTimeRange(start,end,timeSlot){
	var timeSlotStart = moment(timeSlot.start);
    var timeSlotEnd = moment(timeSlot.end);
    return (moment(start)>timeSlot.start && moment(end)>timeSlotEnd);    
}

