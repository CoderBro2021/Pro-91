function adduser(){
    player1 = document.getElementById("player_1_inp").value;
    player2 = document.getElementById("player_2_inp").value;
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    window.location="index2.html";
}