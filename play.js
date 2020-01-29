var palyer1=prompt('Enter your name,you will be Blue')
var player1color='rgb(86,151,255)';

var palyer2=prompt('Enter your name,you will be Red')
var player2color='rgb(237,45,73)';

var game_on=true;
var table=$('table tr');

function reportWin(rowNum,colNum){
  console.log('you won starting at this row,col');
  console.log(rowNum);
  console.log(colNum);
}

function changecolor(rowIndex,colIndex,color){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}
