player_1 = localStorage.getItem("player1");
player_2 = localStorage.getItem("player2");

player1score = 0;
player2score = 0;

document.getElementById("player1").innerHTML = player_1, +":";
document.getElementById("player2").innerHTML = player_2, +":";

document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("player_ques").innerHTML = "Question turn - "+player_1;
document.getElementById("player_ans").innerHTML = "Answer turn - "+player_2;

function send(){
    number_1 = document.getElementById("num_1").value;
    console.log("number_1");

    number_2 = document.getElementById("num_2").value;
    console.log("number_2");

    actual_answer = parseInt(number_1) * (number_2);
    console.log("actual_answer");

    question_number = "<h4>"+number_1+"X"+number_2+"</h4>";
    console.log("question_number");

    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    console.log("input_box");

    check_button = "<br><br><button class='btn btn-info'  onclick = 'check()'>Check</button>";
    console.log("check_button");

    row = question_number+input_box+check_button;
    console.log("row");

    document.getElementById("output").innerHTML = row;

    document.getElementById(number_1).value = "";

    document.getElementById(number_2).value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player_1")
		{
			player_1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player_1_score;
		}
		else 
		{
			player_2_score = player2score +1;
		    document.getElementById("player2_score").innerHTML = player_2_score;
		}
	}
	
	if(question_turn == "player_1")
	{
		question_turn = "player_2"
		document.getElementById("player_ques").innerHTML = "Question Turn - " + player_2 ;
	}
	else 
	{
		question_turn = "player_1"
		document.getElementById("player_ques").innerHTML = "Question Turn - " + player_1 ;
	}

	if(answer_turn == "player_1")
	{
		answer_turn = "player_2"
		document.getElementById("player_ans").innerHTML = "Answer Turn - " + player_2;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_ans").innerHTML = "Answer Turn - " + player_1;
	}

    document.getElementById("output").innerHTML = "";
}
