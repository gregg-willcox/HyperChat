
// using the current page's URL
const myUrl = new URL(window.location.toLocaleString());
var puzzleNum = myUrl.searchParams.get("puzzle")

if (puzzleNum!=null){
    console.log("Found puzzle number: ", puzzleNum, "| in: ", myUrl);
}
else{
    console.log("No puzzle found: ", myUrl);
}

var puzzleName = "Images/chess_puzzle_"+puzzleNum.toString()+".png";

const puzzleImage = document.getElementById("puzzle-window");

puzzleImage.src = puzzleName;
