$(function(){
  var participant = [
    { value: 'Tushar Chaudhary | Tushar.chaudhary35@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/1.pdf" target="_blank" download="1.pdf">Download</a>'},
    { value: 'Mayank Mittal | mayank.mittal_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/2.pdf" target="_blank" download="2.pdf">Download</a>'},
    { value: 'Rohitash Yadav | rohitashyadav455@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/3.pdf" target="_blank" download="3.pdf">Download</a>'},
    { value: 'Prapti Jain | praptijain50@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/4.pdf" target="_blank" download="4.pdf">Download</a>'},
    { value: 'Kanahaiya | kanahaiya.gla_cs17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/5.pdf" target="_blank" download="5.pdf">Download</a>'},
    { value: 'Ankita Awasthi | ankita.awasthi_cs17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/6.pdf" target="_blank" download="6.pdf">Download</a>'},
    { value: 'Mayank Singh Chandel | mayank.chandel_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/7.pdf" target="_blank" download="7.pdf">Download</a>'},
    { value: 'Shailesh Sharma | shailesh.99.2000@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/8.pdf" target="_blank" download="8.pdf">Download</a>'},
    { value: 'Anshul Bansal | bansal.anshulcool26@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/9.pdf" target="_blank" download="9.pdf">Download</a>'},
    { value: 'Archana Mall | archana.mall_cs15@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/10.pdf" target="_blank" download="10.pdf">Download</a>'},
    { value: 'Shashank Shekhar Singh | shashank.singh_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/11.pdf" target="_blank" download="11.pdf">Download</a>'},
    { value: 'Prince Chaturvedi | princechaturvedi50@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/12.pdf" target="_blank" download="12.pdf">Download</a>'},
    { value: 'Abhishek Bharadwaj | abhishekbhardwaj521@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/13.pdf" target="_blank" download="13.pdf">Download</a>'},
    { value: 'Faiz Ghani | faiz.ghani_bsc16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/14.pdf" target="_blank" download="14.pdf">Download</a>'},
    { value: 'Vishesh Agarwal | agarwalvishesh2000@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/15.pdf" target="_blank" download="15.pdf">Download</a>'},
    { value: 'Abhishek Goyal | goyal1996abhi@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/16.pdf" target="_blank" download="16.pdf">Download</a>'},
    { value: 'Sfurti Mishra | sfurtimishra1999@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/17.pdf" target="_blank" download="17.pdf">Download</a>'},
    { value: 'Harsh Matlani | harsh.matlani_bbafb17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/18.pdf" target="_blank" download="18.pdf">Download</a>'},
    { value: 'Pragyan Agrawal | pragyan9073@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/19.pdf" target="_blank" download="19.pdf">Download</a>'},
    { value: 'Yash Mittal | yashmittalj7@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/20.pdf" target="_blank" download="20.pdf">Download</a>'},
    { value: 'Rohit Khandelwal | mukulkhandelwal100@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/21.pdf" target="_blank" download="21.pdf">Download</a>'},
    { value: 'Pratham Agrawal | 2000pagrawal@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/22.pdf" target="_blank" download="22.pdf">Download</a>'},
    { value: 'Anshul Kulshrestha | anshul.kulshrestha_bca16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/23.pdf" target="_blank" download="23.pdf">Download</a>'},
    { value: 'Gaurav Sharma | gauravmadhav9@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/24.pdf" target="_blank" download="24.pdf">Download</a>'},
    { value: 'Abhishek Singh Tomar | rajattomar97@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/25.pdf" target="_blank" download="25.pdf">Download</a>'},
    { value: 'Kapil Yadav | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/26.pdf" target="_blank" download="26.pdf">Download</a>'},
    { value: 'Abhay Singh | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/27.pdf" target="_blank" download="27.pdf">Download</a>'},
    { value: 'Tushar Chaudary | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/28.pdf" target="_blank" download="28.pdf">Download</a>'},
    { value: 'Nancy Gupta | nancy.gupta@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/1_1.pdf" target="_blank" download="1_1.pdf">Download</a>'},
    { value: 'Aman Mittal | ujjawalmittal32@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/2_1.pdf" target="_blank" download="2_1.pdf">Download</a>'},
    { value: 'Harshit Khare | harshitkhare13@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/3_1.pdf" target="_blank" download="3_1.pdf">Download</a>'},
    { value: 'Chandra Prakash | chandra.prakash_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/4_1.pdf" target="_blank" download="4_1.pdf">Download</a>'},
    { value: 'Mayank Pathak | mayank.pathak_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/5_1.pdf" target="_blank" download="5_1.pdf">Download</a>'},
    { value: 'Krishna Chandra | krishna.chandra_bca16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/6_1.pdf" target="_blank" download="6_1.pdf">Download</a>'},
    { value: 'Meenal Singhal | skyfairymeenalsinghal@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/1_2.pdf" target="_blank" download="1_2.pdf">Download</a>'},
    { value: 'Divya Goel | divyagoel0498@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/2_2.pdf" target="_blank" download="2_2.pdf">Download</a>'},
    { value: 'Rishabh Kapoor | kapoorrishabh7991@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/3_2.pdf" target="_blank" download="3_2.pdf">Download</a>'},
    { value: 'Harshit Maheshwari | harshit.karan.RM@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/4_2.pdf" target="_blank" download="4_2.pdf">Download</a>'},
    { value: 'Shubham Yadav | syadavyadav48@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/1_3.pdf" target="_blank" download="1_3.pdf">Download</a>'},
    { value: 'Shaurya Shukla | shaurya.shukla_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/2_3.pdf" target="_blank" download="2_3.pdf">Download</a>'},
    { value: 'B.Sai Chandra Pawan | bsaipawan_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/3_3.pdf" target="_blank" download="3_3.pdf">Download</a>'},
    { value: 'Rajiv Kumar Yadav | rajiv.yadav_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/4_3.pdf" target="_blank" download="4_3.pdf">Download</a>'},
    { value: 'Shivaansh Agarwal | shivaansh.agarwal_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/5_3.pdf" target="_blank" download="5_3.pdf">Download</a>'},
    { value: 'Himanshu Goyal | himanshu.goyal_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/6_3.pdf" target="_blank" download="6_3.pdf">Download</a>'},
    { value: 'Abhijeet Katiyar | abhijeet.katiyar_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/7_3.pdf" target="_blank" download="7_3.pdf">Download</a>'},
    { value: 'Nitanshi Mittal | nianshimittal28@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/8_3.pdf" target="_blank" download="8_3.pdf">Download</a>'},
    { value: 'Harsh Gupta | harsh.gupta_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/9_3.pdf" target="_blank" download="9_3.pdf">Download</a>'},
    { value: 'Anand Kumar | anand.kumar_cs14@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/1_4.pdf" target="_blank" download="1_4.pdf">Download</a>'},
    { value: 'Nirmal Kumar Savita | nirmal.savita_cs14@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/2_4.pdf" target="_blank" download="2_4.pdf">Download</a>'},
    { value: 'Gauri Goswami | gauri.goswami_bba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/1_5.pdf" target="_blank" download="1_5.pdf">Download</a>'},
    { value: 'Saurabh Jain | saurabh.jain_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/2_5.pdf" target="_blank" download="2_5.pdf">Download</a>'},
    { value: 'Muskan Varshney | muskan.varshney_cs17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/3_5.pdf" target="_blank" download="3_5.pdf">Download</a>'},
    { value: 'Mayank Saurakhia | msmayanksaurakhia27@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/4_5.pdf" target="_blank" download="4_5.pdf">Download</a>'},
    { value: 'Akshant Chooramani | akshantchooramani4@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/5_5.pdf" target="_blank" download="5_5.pdf">Download</a>'},
    { value: 'Aman Gupta | amangupta@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/sch/6_5.pdf" target="_blank" download="6_5.pdf">Download</a>'},
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