$(function(){
  var participant = [
    { value: 'Saransh Agarwal | saransh2agarwal@gmail.com', data: '<a href="certi/adm/1.pdf" target="_blank" download="1.pdf">Download</a>'},
    { value: 'Naman Bhatnagar | NA', data: '<a href="certi/adm/2.pdf" target="_blank" download="2.pdf">Download</a>'},
    { value: 'Shubham Paliwal | NA', data: '<a href="certi/adm/3.pdf" target="_blank" download="3.pdf">Download</a>'},
    { value: 'Karan Balani | NA', data: '<a href="certi/adm/4.pdf" target="_blank" download="4.pdf">Download</a>'},
    { value: 'Ayush Bhardwaj | NA', data: '<a href="certi/adm/5.pdf" target="_blank" download="5.pdf">Download</a>'},
    { value: 'Vishal Goswami | vishalgoswami2011@gmail.com', data: '<a href="certi/adm/6.pdf" target="_blank" download="6.pdf">Download</a>'},
    { value: 'Ajeet Yadav | NA', data: '<a href="certi/adm/7.pdf" target="_blank" download="7.pdf">Download</a>'},
    { value: 'Divyanshu Pandey | divyanshu.pnd166@gmail.com', data: '<a href="certi/adm/8.pdf" target="_blank" download="8.pdf">Download</a>'},
    { value: 'Harshit Sharma | harshit.sharma_cs16@gla.ac.in', data: '<a href="certi/adm/9.pdf" target="_blank" download="9.pdf">Download</a>'},
    { value: 'Tanya Chitranshi | NA', data: '<a href="certi/adm/10.pdf" target="_blank" download="10.pdf">Download</a>'},
    { value: 'Umang Goyal | NA', data: '<a href="certi/adm/11.pdf" target="_blank" download="11.pdf">Download</a>'},
    { value: 'Aditya Jain | NA', data: '<a href="certi/adm/12.pdf" target="_blank" download="12.pdf">Download</a>'},
    { value: 'Shubham Shrivastava | shubhamshrivastava181@gmail.com', data: '<a href="certi/adm/13.pdf" target="_blank" download="13.pdf">Download</a>'},
    { value: 'Karan Maheshwari | karanmaheshwari278@gmail.com', data: '<a href="certi/adm/14.pdf" target="_blank" download="14.pdf">Download</a>'},
    { value: 'Shiva Sharma | shiva.sharma_ee16@gla.ac.in', data: '<a href="certi/adm/15.pdf" target="_blank" download="15.pdf">Download</a>'},
    { value: 'Rohitt Sharma | NA', data: '<a href="certi/adm/16.pdf" target="_blank" download="16.pdf">Download</a>'},
    { value: 'Manish Kumar Singh | NA', data: '<a href="certi/adm/17.pdf" target="_blank" download="17.pdf">Download</a>'},
    { value: 'Krishna Sharma | NA', data: '<a href="certi/adm/18.pdf" target="_blank" download="18.pdf">Download</a>'},
    { value: 'Puneet Shailza | NA', data: '<a href="certi/adm/19.pdf" target="_blank" download="19.pdf">Download</a>'},
    { value: 'Nishparsh Singhal | nishparsh.singhal_bbafb17@gla.ac.in', data: '<a href="certi/adm/20.pdf" target="_blank" download="20.pdf">Download</a>'},
    { value: 'Harshit Gupta | harshit.gupta_bbafb17@gla.ac.in', data: '<a href="certi/adm/21.pdf" target="_blank" download="21.pdf">Download</a>'},
    { value: 'Harsh Matlani | NA', data: '<a href="certi/adm/22.pdf" target="_blank" download="22.pdf">Download</a>'},
    { value: 'Sakshi Rathore | NA', data: '<a href="certi/adm/23.pdf" target="_blank" download="23.pdf">Download</a>'},
    { value: 'Afizah | NA', data: '<a href="certi/adm/24.pdf" target="_blank" download="24.pdf">Download</a>'},
    { value: 'Alfiza | NA', data: '<a href="certi/adm/25.pdf" target="_blank" download="25.pdf">Download</a>'},
    { value: 'Prashant Prajapti | NA', data: '<a href="certi/adm/26.pdf" target="_blank" download="26.pdf">Download</a>'},
    { value: 'Somya Agrawal | NA', data: '<a href="certi/adm/27.pdf" target="_blank" download="27.pdf">Download</a>'},
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