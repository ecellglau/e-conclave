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
    { value: 'Sumit Priya Jha | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/13.pdf" target="_blank" download="13.pdf">Download</a>'},
    { value: 'Yshika Agarwal | yshika0581@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/1_1.pdf" target="_blank" download="1_1.pdf">Download</a>'},
    { value: 'Nancy Gupta | nancy.gupta@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/2_1.pdf" target="_blank" download="2_1.pdf">Download</a>'},
    { value: 'Sourabh Singh | 100rab2000@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/3_1.pdf" target="_blank" download="3_1.pdf">Download</a>'},
    { value: 'Utkarsh Jain | utkarshjain2907@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/4_1.pdf" target="_blank" download="4_1.pdf">Download</a>'},
    { value: 'Harsh Chaudhary | hchaudhary663@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/5_1.pdf" target="_blank" download="5_1.pdf">Download</a>'},
    { value: 'Raman Yaduvanshi | raman.yaduvanshi_dme16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/6_1.pdf" target="_blank" download="6_1.pdf">Download</a>'},
    { value: 'Sparsh Rastogi | sparsh.rastogi_dce16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/7_1.pdf" target="_blank" download="7_1.pdf">Download</a>'},
    { value: 'Ritik Kumar | ritikkumarsingh@outlook.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/8_1.pdf" target="_blank" download="8_1.pdf">Download</a>'},
    { value: 'Rahul Kumar Singh | rahul.singh_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/9_1.pdf" target="_blank" download="9_1.pdf">Download</a>'},
    { value: 'Abhishekh Singh Chauhan | aschauhan783@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/1_2.pdf" target="_blank" download="1_2.pdf">Download</a>'},
    { value: 'Kartik Hans | kartikhans82@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/2_2.pdf" target="_blank" download="2_2.pdf">Download</a>'},
    { value: 'Md Gulshanawar Saifi | sahil.saifi0750@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/3_2.pdf" target="_blank" download="3_2.pdf">Download</a>'},
    { value: 'Harshit Pratap Singh | singhharshitpratap1@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/4_2.pdf" target="_blank" download="4_2.pdf">Download</a>'},
    { value: 'Meenal Singhal | skyfairymeenalsinghal@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/5_2.pdf" target="_blank" download="5_2.pdf">Download</a>'},
    { value: 'Sanskar Maheshwari | sanskar.tata@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/6_2.pdf" target="_blank" download="6_2.pdf">Download</a>'},
    { value: 'Mukul Dubey | mukuldubey2@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/1_3.pdf" target="_blank" download="1_3.pdf">Download</a>'},
    { value: 'Nitanshi Mittal | nianshimittal28@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/2_3.pdf" target="_blank" download="2_3.pdf">Download</a>'},
    { value: 'Atul Kumar Maurya | atul.maurya_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/tbp/1_4.pdf" target="_blank" download="1_4.pdf">Download</a>'},
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