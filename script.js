
function quiz() {
	var correctAns = 0; 
	var totalQuestions = 3;  
    alert("Welcome! Lets See How Much You Have Learned!");
    alert("Answer All The Questions With Numbers Only! (No Symbols)");
  
       var ans1 = prompt("In What Year Will Climate Change Be Irreversible?");     
	if(ans1 == "2052"){
		alert("Correct!");  
		correctAns = correctAns + 1;  

	} else {
		 alert("Incorrect"); 

	}
    
          var ans2 = prompt("What Percentage of Plastic That You Put In The Recycle Bin get Recycled?");    
	if(ans2 == "8") {
		alert("Correct!");  
		 correctAns = correctAns + 1;  

	} else {
		  alert("Incorrect"); 

	}
   
        var ans3 = prompt("When will polar bears go extict?");      
	if(ans3 == "2100") {
		 alert("Correct!");  
		 correctAns = correctAns + 1;  

	} else {
		  alert("Incorrect"); 

	}
	  alert("Great Job You Got " + correctAns + " questions out of " + totalQuestions + " correct.");
}
              