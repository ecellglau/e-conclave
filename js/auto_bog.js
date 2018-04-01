$(function(){
  var participant = [
    { value: 'Umang Mittal | umang.mittal_bba17@gla.ac.in', data: '<a href="certi/bog/1.pdf" target="_blank" download="1.pdf">Download</a>'},
    { value: 'Kartikey Rathore | kartikey.rathore_bcom16@gla.ac.in', data: '<a href="certi/bog/2.pdf" target="_blank" download="2.pdf">Download</a>'},
    { value: 'Abhishek Sharma | tannusharma199818koshi@gmail.com', data: '<a href="certi/bog/3.pdf" target="_blank" download="3.pdf">Download</a>'},
    { value: 'Gaurav Srivastava | gaurav.srivastav_mba17@gla.ac.in', data: '<a href="certi/bog/4.pdf" target="_blank" download="4.pdf">Download</a>'},
    { value: 'Alfiza | alfiza.gla_bbafb17@gla.ac.in', data: '<a href="certi/bog/5.pdf" target="_blank" download="5.pdf">Download</a>'},
    { value: 'Afizah | afizah.gla_bbafb17@gla.ac.in', data: '<a href="certi/bog/6.pdf" target="_blank" download="6.pdf">Download</a>'},
    { value: 'Devansh Agrawal | devanshagrawal099@gmail.com', data: '<a href="certi/bog/7.pdf" target="_blank" download="7.pdf">Download</a>'},
    { value: 'Sakshi Rathore | sakshi.rathore_bbafb17@gla.ac.in', data: '<a href="certi/bog/8.pdf" target="_blank" download="8.pdf">Download</a>'},
    { value: 'Aman Mittal | ujjawalmittal32@gmail.com', data: '<a href="certi/bog/9.pdf" target="_blank" download="9.pdf">Download</a>'},
    { value: 'Ayush Dubey | dubeyayush9369@gmail.com', data: '<a href="certi/bog/10.pdf" target="_blank" download="10.pdf">Download</a>'},
    { value: 'Shubham Garg | shubham14.sg@gmail.com', data: '<a href="certi/bog/11.pdf" target="_blank" download="11.pdf">Download</a>'},
    { value: 'Arpit Goyal | goyalarpit22july@gmail.com', data: '<a href="certi/bog/12.pdf" target="_blank" download="12.pdf">Download</a>'},
    { value: 'Somya Bhardwaj | somya.bhardwaj1999@gmail.com', data: '<a href="certi/bog/13.pdf" target="_blank" download="13.pdf">Download</a>'},
    { value: 'Divya | sbrish143div@gmail.com', data: '<a href="certi/bog/14.pdf" target="_blank" download="14.pdf">Download</a>'},
    { value: 'Meenal Singhal | skyfairymeenalsinghal@gmail.com', data: '<a href="certi/bog/15.pdf" target="_blank" download="15.pdf">Download</a>'},
    { value: 'Prakhar Mittal | prakharmittal0571@gmail.com', data: '<a href="certi/bog/16.pdf" target="_blank" download="16.pdf">Download</a>'},
    { value: 'Venkatesh Gupta | venku1995gupta@gmail.com', data: '<a href="certi/bog/17.pdf" target="_blank" download="17.pdf">Download</a>'},
    { value: 'Vivek Modanwal | vivekmodanwal2@gmail.com', data: '<a href="certi/bog/18.pdf" target="_blank" download="18.pdf">Download</a>'},
    { value: 'Shubham Shrivastava | shubhamshrivastava181@gmail.com', data: '<a href="certi/bog/19.pdf" target="_blank" download="19.pdf">Download</a>'},
    { value: 'Karan Maheshwari | karanmaheshwari278@gmail.com', data: '<a href="certi/bog/20.pdf" target="_blank" download="20.pdf">Download</a>'},
    { value: 'Shashank Shekhar Singh | shashank.singh_cs16@gla.ac.in', data: '<a href="certi/bog/21.pdf" target="_blank" download="21.pdf">Download</a>'},
    { value: 'Nishtha Gupta | gnishtha1714@gmail.com', data: '<a href="certi/bog/22.pdf" target="_blank" download="22.pdf">Download</a>'},
    { value: 'Prince Chaturvedi | princechaturvedi50@gmail.com', data: '<a href="certi/bog/23.pdf" target="_blank" download="23.pdf">Download</a>'},
    { value: 'Abhishek Bharadwaj | abhishekbhardwaj521@gmail.com', data: '<a href="certi/bog/24.pdf" target="_blank" download="24.pdf">Download</a>'},
    { value: 'Faiz Ghani | faiz.ghani_bsc16@gla.ac.in', data: '<a href="certi/bog/25.pdf" target="_blank" download="25.pdf">Download</a>'},
    { value: 'Shiva Sharma | shiva.sharma_ee16@gla.ac.in', data: '<a href="certi/bog/26.pdf" target="_blank" download="26.pdf">Download</a>'},
    { value: 'Vishesh Agarwal | agarwalvishesh2000@gmail.com', data: '<a href="certi/bog/27.pdf" target="_blank" download="27.pdf">Download</a>'},
    { value: 'Mohit Sharma | mohit.sharma_bba17@gla.ac.in', data: '<a href="certi/bog/28.pdf" target="_blank" download="28.pdf">Download</a>'},
    { value: 'Arunabh Raghuvanshi | arunabh.raghuvanshi_eed17@gla.ac.in', data: '<a href="certi/bog/29.pdf" target="_blank" download="29.pdf">Download</a>'},
    { value: 'Anubhav Srivastava | anubhav.srivastava_ced17@gla.ac.in', data: '<a href="certi/bog/30.pdf" target="_blank" download="30.pdf">Download</a>'},
    { value: 'Muzahid Islam | muzahidislam300@gmail.com', data: '<a href="certi/bog/31.pdf" target="_blank" download="31.pdf">Download</a>'},
    { value: 'Nishparsh Singhal | nishparsh.singhal_bbafb17@gla.ac.in', data: '<a href="certi/bog/32.pdf" target="_blank" download="32.pdf">Download</a>'},
    { value: 'Sudhish Goswami | suddirock2@gmail.com', data: '<a href="certi/bog/33.pdf" target="_blank" download="33.pdf">Download</a>'},
    { value: 'Abhishek Goyal | goyal1996abhi@gmail.com', data: '<a href="certi/bog/34.pdf" target="_blank" download="34.pdf">Download</a>'},
    { value: 'Shubham Sharma | ss791313@gmail.com', data: '<a href="certi/bog/35.pdf" target="_blank" download="35.pdf">Download</a>'},
    { value: 'Kartikey Singh | kartikey.singh_bba17@gla.ac.in', data: '<a href="certi/bog/36.pdf" target="_blank" download="36.pdf">Download</a>'},
    { value: 'Ishan Rathi | Ishurathi19@gmail.com', data: '<a href="certi/bog/37.pdf" target="_blank" download="37.pdf">Download</a>'},
    { value: 'Nitin Shrivastav | srivastavanitin039@gmail.com', data: '<a href="certi/bog/38.pdf" target="_blank" download="38.pdf">Download</a>'},
    { value: 'Shashank Kumar | shashank.kumar_cs17@gla.ac.in', data: '<a href="certi/bog/39.pdf" target="_blank" download="39.pdf">Download</a>'},
    { value: 'Sfurti Mishra | sfurtimishra1999@gmail.com', data: '<a href="certi/bog/40.pdf" target="_blank" download="40.pdf">Download</a>'},
    { value: 'Ishita Gupta | ishita.gupta_bbafb17@gla.ac.in', data: '<a href="certi/bog/41.pdf" target="_blank" download="41.pdf">Download</a>'},
    { value: 'Kajal Kaushik | kajal.kaushik_bbafb17@gla.ac.in', data: '<a href="certi/bog/42.pdf" target="_blank" download="42.pdf">Download</a>'},
    { value: 'Harshit Gupta | harshit.gupta_bbafb17@gla.ac.in', data: '<a href="certi/bog/43.pdf" target="_blank" download="43.pdf">Download</a>'},
    { value: 'Harsh Matlani | harsh.matlani_bbafb17@gla.ac.in', data: '<a href="certi/bog/44.pdf" target="_blank" download="44.pdf">Download</a>'},
    { value: 'Jay Otwani | jay.otwani_bbafb17@gla.ac.in', data: '<a href="certi/bog/45.pdf" target="_blank" download="45.pdf">Download</a>'},
    { value: 'Megha Varshney | devanshagrawal099@gmail.com', data: '<a href="certi/bog/46.pdf" target="_blank" download="46.pdf">Download</a>'},
    { value: 'Pragyan Agrawal | pragyan9073@gmail.com', data: '<a href="certi/bog/47.pdf" target="_blank" download="47.pdf">Download</a>'},
    { value: 'Yash Mittal | yashmittalj7@gmail.com', data: '<a href="certi/bog/48.pdf" target="_blank" download="48.pdf">Download</a>'},
    { value: 'Rohit Khandelwal | mukulkhandelwal100@gmail.com', data: '<a href="certi/bog/49.pdf" target="_blank" download="49.pdf">Download</a>'},
    { value: 'Pratham Agrawal | 2000pagrawal@gmail.com', data: '<a href="certi/bog/50.pdf" target="_blank" download="50.pdf">Download</a>'},
    { value: 'Anuj Pathak | anuj.pathak_bca16@gla.ac.in', data: '<a href="certi/bog/51.pdf" target="_blank" download="51.pdf">Download</a>'},
    { value: 'Anshul Kulshrestha | anshul.kulshrestha_bca16@gla.ac.in', data: '<a href="certi/bog/52.pdf" target="_blank" download="52.pdf">Download</a>'},
    { value: 'Aman Verma | aman.verma_bca16@gla.ac.in', data: '<a href="certi/bog/53.pdf" target="_blank" download="53.pdf">Download</a>'},
    { value: 'Gaurav Sharma | gauravmadhav9@gmail.com', data: '<a href="certi/bog/54.pdf" target="_blank" download="54.pdf">Download</a>'},
    { value: 'Abhishek Singh Tomar | rajattomar97@gmail.com', data: '<a href="certi/bog/55.pdf" target="_blank" download="55.pdf">Download</a>'},
    { value: 'Umang Mittal | NA', data: '<a href="certi/bog/56.pdf" target="_blank" download="56.pdf">Download</a>'},
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