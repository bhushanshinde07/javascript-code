let currentplayer="O"
const board=[ "_","_","_",
             "_","_","_",
            "_","_","_"]
  
            function displayboard(){
            console.log(board[0]+"|"+board[1]+"|" + board[2])
            console.log(board[3]+"|"+board[4]+"|" + board[5])
            console.log(board[6]+"|"+board[7]+"|" + board[8])
            console.log ("____________________________________")
            }
            function handleturns(){//user enter
                 let position =  prompt("please enter valid index position between 0 to 8")// assume 2
                 board[position]=currentplayer // currentplayer is O 
            }
            function chaneplay(){
                if(currentplayer=="O"){
                    currentplayer="X"
                }
                else if(currentplayer=="X"){
                    currentplayer="O"
                }
            }
            function winner(){

            }
            function checkrow(){ // 3 row win O should or X should in three position value check if it is x or O
            let row1=board[0]== board[1]==board[2]!="-" // rowinfo is either X or O store 
            let row2=board[3]==board[4]==(board[5]!="_"
            if(row1 || row2|| row3){
             gameisgoing=false
            }
            }
            function playgame(){
               while (true){ // for repeating handleturn
               displayboard()// board display
                handleturns()
                chaneplay()
            }
            }
            playgame()