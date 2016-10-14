function submitanswers(){
	var total=5;
	var score=0;
	var q1=document.forms["quizForms"]["q1"].value;
	var q2=document.forms["quizForms"]["q2"].value;
	var q3=document.forms["quizForms"]["q3"].value;
	var q4=document.forms["quizForms"]["q4"].value;
	var q5=document.forms["quizForms"]["q5"].value;

	for (var i =  1; i <= total; i++) {
		if( eval('q'+i)==null || eval('q'+i)=='')
		{
			alert("Your Missed Question "+i);
			return false;
		}
	}
	var ansewer=["b","a","d","b","d"];

	for (var i =  1; i <= total; i++) {
		if( eval('q'+i)==ansewer[i-1])
		{
			score++;
		}
	}

	var result=document.getElementById('result');
	result.innerHTML='<h3>your scored <span>'+score+'</span> out of <span>'+total+'</span> </h3>';
	return false;
}