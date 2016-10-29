function createData(){
 var mockData = [];
 for (var i=0;i<10;i++){
    var name = 'Doctor'+i;
    var times = [];
     var images = ['http://www.800doctor.com/wp-content/uploads/2015/11/Doctor-Consultation.png',
                  'http://efdreams.com/data_images/dreams/doctor/doctor-12.jpg',
                  'http://tehachapidoctors.com/wp-content/uploads/2015/10/Tehachapi-Doctor.png',
                  'http://www.dottorelondon.com/wp-content/uploads/2015/12/doctor1-1.png',
                  'http://www.apollonion.com/assets/image/imagesplashdoc/women-img0001.png',
                  'http://image.shutterstock.com/z/stock-photo-very-handsome-young-doctor-with-blue-eyes-portrait-96303416.jpg',
                  'http://previews.123rf.com/images/andresr/andresr1207/andresr120700576/14599871-Portrait-of-friendly-male-doctor-smiling-Stock-Photo-medical.jpg',
                 ];
    for(var j=0;j<10;j++){
        var start = moment([2016, 10, 19+i, 10+j, 15]).format();
        var end = moment([2016, 10, 19+i, 10+j, 55]).format();
        times.push({'start':start,'end':end});     
    }
    var obj = {
			'name': name,
			'availability':times,
			'speciality': 'Software',
        	'image': images[i],
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

