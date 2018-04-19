$(function(){
  var participant = [
    { value: 'Harshit Maheshwari | harshit.karan.rm@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/1.pdf" target="_blank" download="1.pdf">Download</a>'},
    { value: 'Kartikey Mishra | kartikey.mishra_bba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/2.pdf" target="_blank" download="2.pdf">Download</a>'},
    { value: 'Prashant Singh Pundhir | pundhirprashant775@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/3.pdf" target="_blank" download="3.pdf">Download</a>'},
    { value: 'Sachin Goyal | sachin.goyal_cs17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/4.pdf" target="_blank" download="4.pdf">Download</a>'},
    { value: 'Zahid Ahmed | zahid.ahmed_mba15@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/5.pdf" target="_blank" download="5.pdf">Download</a>'},
    { value: 'Divya Agrawal | divya22ag@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/6.pdf" target="_blank" download="6.pdf">Download</a>'},
    { value: 'Aditiya Chaturvedi | chaturvediaditiya@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/7.pdf" target="_blank" download="7.pdf">Download</a>'},
    { value: 'Abhishekh Gautam | abhishekh.gautam_cs115@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/8.pdf" target="_blank" download="8.pdf">Download</a>'},
    { value: 'Ashish Bhatia | ashish.bhatia_cs15@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/9.pdf" target="_blank" download="9.pdf">Download</a>'},
    { value: 'Mohammad Usman | mohammad.usman_mba16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/10.pdf" target="_blank" download="10.pdf">Download</a>'},
    { value: 'Abhishek Narain Singh | abhishek.singh_cs15@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/11.pdf" target="_blank" download="11.pdf">Download</a>'},
    { value: 'Pranjal Saxena | pranjal.saxena2012@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/12.pdf" target="_blank" download="12.pdf">Download</a>'},
    { value: 'Sumit Jha | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/13.pdf" target="_blank" download="13.pdf">Download</a>'},
    { value: 'Yshika Agarwal | ', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/1_1.pdf" target="_blank" download="1_1.pdf">Download</a>'},
    { value: 'Nancy Gupta | ', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/2_1.pdf" target="_blank" download="2_1.pdf">Download</a>'},
    { value: 'Sourabh Singh | ', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/3_1.pdf" target="_blank" download="3_1.pdf">Download</a>'},
    { value: 'Utkarsh Jain | ', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/4_1.pdf" target="_blank" download="4_1.pdf">Download</a>'},
    { value: 'Harsh Chaudhary | ', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/5_1.pdf" target="_blank" download="5_1.pdf">Download</a>'},
    { value: 'Raman Yaduvanshi | ', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/6_1.pdf" target="_blank" download="6_1.pdf">Download</a>'},
    { value: 'Sparsh Rastogi | ', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/7_1.pdf" target="_blank" download="7_1.pdf">Download</a>'},
    { value: 'Ritik Kumar | ', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/8_1.pdf" target="_blank" download="8_1.pdf">Download</a>'},
    { value: 'Rahul Kumar Singh | ', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/9_1.pdf" target="_blank" download="9_1.pdf">Download</a>'},
    ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: participant,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Participant Name | e-mail :</strong> ' + suggestion.value + ' <br> <strong>Link:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});