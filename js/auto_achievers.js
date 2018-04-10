$(function(){
  var participant = [
  	{ value: 'Shiva Sharma | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/ADM1.pdf" target="_blank" download="ADM1.pdf">Download</a>'},
    { value: 'Rohit Sharma | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/ADM2.pdf" target="_blank" download="ADM2.pdf">Download</a>'},
    { value: 'Harsh Matlani | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/ADM3.pdf" target="_blank" download="ADM3.pdf">Download</a>'},
    { value: 'Sakshi Rathore | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/ADM4.pdf" target="_blank" download="ADM4.pdf">Download</a>'},
    { value: 'Harshit Gupta | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/ADM5.pdf" target="_blank" download="ADM5.pdf">Download</a>'},
    { value: 'Afizah | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/ADM6.pdf" target="_blank" download="ADM6.pdf">Download</a>'},
    { value: 'Alfiza | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/ADM7.pdf" target="_blank" download="ADM7.pdf">Download</a>'},
    { value: 'Saransh Agrawal | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/ADM8.pdf" target="_blank" download="ADM8.pdf">Download</a>'},
    { value: 'Naman Bhatnagar | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/ADM9.pdf" target="_blank" download="ADM9.pdf">Download</a>'},
    { value: 'Shubham Paliwal | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/AD10.pdf" target="_blank" download="AD10.pdf">Download</a>'},
    { value: 'Karan Balani | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/AD11.pdf" target="_blank" download="AD11.pdf">Download</a>'},
    { value: 'Ayush Bhardwaj | ADMAD Show', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/AD12.pdf" target="_blank" download="AD12.pdf">Download</a>'},
    { value: 'Archana Mall | Social Challenge', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/SCH1.pdf" target="_blank" download="SCH1.pdf">Download</a>'},
    { value: 'Shailesh Sharma | Social Challenge', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/SCH2.pdf" target="_blank" download="SCH2.pdf">Download</a>'},
    { value: 'Gaurav Sharma | Social Challenge', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/SCH3.pdf" target="_blank" download="SCH3.pdf">Download</a>'},
    { value: 'Anshul Kulshrestha | Social Challenge', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/SCH4.pdf" target="_blank" download="SCH4.pdf">Download</a>'},
    { value: 'Anand Dikshit | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/50V1.pdf" target="_blank" download="50V1.pdf">Download</a>'},
    { value: 'Ajit Singh | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/50V7.pdf" target="_blank" download="50V7.pdf">Download</a>'},
    { value: 'Prashant Varshney | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/50V8.pdf" target="_blank" download="50V8.pdf">Download</a>'},
    { value: 'Atishay Jain | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/50V9.pdf" target="_blank" download="50V9.pdf">Download</a>'},
    { value: 'Priyasha Ahuja | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/50V2.pdf" target="_blank" download="50V2.pdf">Download</a>'},
    { value: 'Rajat Baghel | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/5010.pdf" target="_blank" download="5010.pdf">Download</a>'},
    { value: 'Radhika Agrawal | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/5011.pdf" target="_blank" download="5011.pdf">Download</a>'},
    { value: 'Kapil Yadav | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/5012.pdf" target="_blank" download="5012.pdf">Download</a>'},
    { value: 'Jay | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/50V3.pdf" target="_blank" download="50V3.pdf">Download</a>'},
    { value: 'Ishita | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/50V4.pdf" target="_blank" download="50V4.pdf">Download</a>'},
    { value: 'Kajol | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/50V5.pdf" target="_blank" download="50V5.pdf">Download</a>'},
    { value: 'Megha | ? 50 Venture', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/50V6.pdf" target="_blank" download="50V6.pdf">Download</a>'},
    { value: 'Virat Agrawal | B-Plan', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/TBP1.pdf" target="_blank" download="TBP1.pdf">Download</a>'},
    { value: 'Divya Agrawal | B-Plan', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/TBP2.pdf" target="_blank" download="TBP2.pdf">Download</a>'},
    { value: 'Prashant Gaur | B-Plan', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/TBP3.pdf" target="_blank" download="TBP3.pdf">Download</a>'},
    { value: 'Prasoon Awasthi | B-Plan', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/TBP8.pdf" target="_blank" download="TBP8.pdf">Download</a>'},
    { value: 'Shubham Khare | B-Plan', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/TBP9.pdf" target="_blank" download="TBP9.pdf">Download</a>'},
    { value: 'Kumar Divyansh | B-Plan', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/TBP10.pdf" target="_blank" download="TBP10.pdf">Download</a>'},
    { value: 'Suyash Dixit | B-Plan', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/TBP4.pdf" target="_blank" download="TBP4.pdf">Download</a>'},
    { value: 'Nishtha Gupta | B-Plan', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/TBP5.pdf" target="_blank" download="TBP5.pdf">Download</a>'},
    { value: 'Yshika Agarwal | B-Plan', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/TBP6.pdf" target="_blank" download="TBP6.pdf">Download</a>'},
    { value: 'Saurabh Singh | B-Plan', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/achievers/TBP7.pdf" target="_blank" download="TBP7.pdf">Download</a>'},
    ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: participant,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Participant Name (email):</strong> ' + suggestion.value + ' <br> <strong>Link:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});