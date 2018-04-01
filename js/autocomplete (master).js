$(function(){
  var participant = [
  	{ value: 'Nihit Jain (nihit.jain_cs16@gla.ac.in)', data: '<a href="/sheero/certi/adm/sample.pdf">Download</a>'},
  	{ value: 'Atul Kumar Maurya (nihit.jain_cs16@gla.ac.in)', data: '<a href="/certi/adm/sample.pdf">Download</a>'},
  	{ value: 'Divyansh Srivastava (nihit.jain_cs16@gla.ac.in)', data: '<a href="/certi/adm/sample.pdf">Download</a>'},
  	{ value: 'Aman Anand (nihit.jain_cs16@gla.ac.in)', data: '<a href="/certi/adm/sample.pdf">Download</a>'},
  	{ value: 'Rajiv Kumar Yadav (nihit.jain_cs16@gla.ac.in)', data: '<a href="/certi/adm/sample.pdf">Download</a>'},
  	{ value: 'Brijesh Mishra (nihit.jain_cs16@gla.ac.in)', data: '<a href="/certi/adm/sample.pdf">Download</a>'},
  	{ value: 'Tarun Garg (nihit.jain_cs16@gla.ac.in)', data: '<a href="/certi/adm/sample.pdf">Download</a>'},
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