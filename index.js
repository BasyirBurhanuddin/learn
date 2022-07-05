const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl=document.getElementById("firstPassword-el")
let passwordLengthEl=document.getElementById("passwordLength-el")

let checkBoxNumber=document.getElementById("numbers-el")
let checkBoxSymbol=document.getElementById("symbols-el")

function generatePassword()
{
    firstPasswordEl.textContent=""
    
    //if checkbox "numbers" & "symbols" is ticked, it generate both ->
    //characters + number + symbol
    if(checkBoxNumber.checked===true && checkBoxSymbol.checked===true)
    {
        console.log("numbers checked")
        
        //just to ensure user enter amount  in input box pwd length
        //if no input nothing happen
        if(passwordLengthEl.value==="")
        {
            
        }
        //if user input number, then it will generate password according to how much pwd length
        else
        {
            generateNumbersSymbols()
        }
    }
    //generate characters+numbers ONLY
    //symbol excluded
    else if(checkBoxNumber.checked===true && checkBoxSymbol.checked===false)
    {
              
        //just to ensure user enter amount  in input box pwd length
        //if no input nothing happen
        if(passwordLengthEl.value==="")
        {
            
        }
        //if user input number, then it will generate password according to how much pwd length
        else
        {
            generateNumbers()
        }
    }
    //if checkbox  "symbols" is ticked, it generate 
    //characters +  symbol ONLY (numbers excluded)
    else if(checkBoxNumber.checked===false && checkBoxSymbol.checked===true)
    {
              
        //just to ensure user enter amount  in input box pwd length
        //if no input nothing happen
        if(passwordLengthEl.value==="")
        {
            
        }
        //if user input number, then it will generate password according to how much pwd length
        else
        {
            generateSymbols()
        }
    }
    // if checkbox unticked both "numbers" & "symbols", it generate
    // characters only
     else if(checkBoxNumber.checked===false && checkBoxSymbol.checked===false)
    {
              
        //just to ensure user enter amount  in input box pwd length
        //if no input nothing happen
        if(passwordLengthEl.value==="")
        {
            
        }
        //if user input number, then it will generate password according to how much pwd length
        else
        {
            generateCharsOnly()
        }
    } 
    
    console.log(firstPasswordEl.textContent)
    
     
    
}

function generateNumbersSymbols()
{
            //console.log(passwordLengthEl.value)
            for(let i=0; i<passwordLengthEl.value;i++)
            {
                let getRandomPasswordChar=Math.floor(Math.random()*(characters.length))
                // console.log("random minus symbol: "+ getRandomPasswordChar)
                
                firstPasswordEl.textContent+=characters[getRandomPasswordChar]
            }
}
function generateNumbers()
{
          //console.log(passwordLengthEl.value)
            for(let i=0; i<passwordLengthEl.value;i++)
            {
                let getRandomPasswordChar=Math.floor(Math.random()*(characters.length-29))
                // console.log("random minus symbol: "+ getRandomPasswordChar)
                
                firstPasswordEl.textContent+=characters[getRandomPasswordChar]
            }
}

function generateSymbols()
{
    //console.log(passwordLengthEl.value)
            for(let i=0; i<passwordLengthEl.value;i++)
            {
                let getRandomPasswordChar=Math.floor(Math.random()*(characters.length))
                
                //if random number generated is on the "numbers" [0-9],then,
                //it will loop back to for loop using continue
                if(getRandomPasswordChar>=52 && getRandomPasswordChar<=61 )
                {
                    i--
                    continue
                }
                // console.log("random minus symbol: "+ getRandomPasswordChar)
                else{ 
                firstPasswordEl.textContent+=characters[getRandomPasswordChar]
                }
            }
}
function generateCharsOnly()
{
    //console.log(passwordLengthEl.value)
            for(let i=0; i<passwordLengthEl.value;i++)
            {
                let getRandomPasswordChar=Math.floor(Math.random()*(characters.length-39))
                // console.log("random minus symbol: "+ getRandomPasswordChar)
                
                firstPasswordEl.textContent+=characters[getRandomPasswordChar]
            }
}