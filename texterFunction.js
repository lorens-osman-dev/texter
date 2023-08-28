/* 
! To Do:
- [] modify unchangeableStrings to accept more than one variable

- [] comment important things

*/




export const lorensDreamtexter = function (inputText, lineKeeperSymbol, unchangeableStringsVariable) {
    // helper function to trim lines
    function trimLines(text) {
        const lines = text.split('\n');
        const trimmedLines = lines.map(line => line.trim());
        return trimmedLines.join('\n');
    }

    const lineKeeper = {
        symbol:  typeof lineKeeperSymbol === "undefined" ? "#" : lineKeeperSymbol,
        linesList: []
    }
    const unchangeableStrings = {
        stringListFromUser: [unchangeableStringsVariable],
        modifiedStringList: []
    }

    // Trim each line of the input text
    const trimmedInput = trimLines(inputText);
    //split string into an array
    const lines = trimmedInput.split('\n');
    // Process and modify each line
    const processedLines = lines.map((line, lineIndex) => {
        let modifiedLine = line
        //let modifiedLine = line.replace(/\./g, ' lorensDreamDot ');//replace all . with lorensDreamDot

        //- line's include Checks
        if (typeof(unchangeableStringsVariable)  !== "undefined") {

            unchangeableStrings.stringListFromUser.forEach((item) => {
                if (line.includes(item)) {
                    unchangeableStrings.modifiedStringList.push(
                        {
                            lineCode: lineIndex,
                            originString: item,
                            modifiedString: `lorensDreamUnchange${lineIndex}`
                        }
                    )
    
                    modifiedLine = modifiedLine.replace(item, ` lorensDreamUnchange${lineIndex} `)
                }
    
            })
        }

        //- line's Start Checks 
        if (line.startsWith('-')) {
            modifiedLine = modifiedLine.replace('-', ' lorensDreamDash ');
        }
        if (line.startsWith('•')) {
            modifiedLine = modifiedLine.replace('•', ' lorensDreamCircle ');
        }
        if (line.startsWith('*')) {
            modifiedLine = modifiedLine.replace('*', ' lorensDreamStar ');
        }
        if (line.startsWith(lineKeeper.symbol)) {
            lineKeeper.linesList.push(
                {
                    lineCode: lineIndex,
                    lineContent: line
                }
            )
            modifiedLine = `lorensDreamSharp${lineIndex}`
        }
        if (/^\d/.test(line)) { //starts with number
            const prefix = "lorensDreamNumber"; // Define the prefix here

            modifiedLine = line.replace(/^(\d+)\s*(.)/, (match, digits, followingChar) => {
                let replacement = '';
                // Check the following character and build the replacement string
                if (followingChar === '.') {
                    replacement = `${prefix}${digits}Dot`;
                } else if (followingChar === '-') {
                    replacement = `${prefix}${digits}Dash`;
                } else if (followingChar === '_') {
                    replacement = `${prefix}${digits}Underscore`;
                } else {
                    const lastCharacter = match.slice(-1);
                    
                    replacement = `${prefix}${digits}${lastCharacter}`;
                    
                }
                // Return the replacement string without the character following the number
                
                return replacement;
               
            });
        }

        //- line's End Checks 
        if (line.endsWith('?')) {
            modifiedLine = modifiedLine.replace('?', ' lorensDreamQmark ');
        }
        if (line.endsWith(':')) {
            modifiedLine = modifiedLine.replace(':', ' lorensDreamColon ');
        }
        if (line.endsWith('.')) {
            // using .replace() only the first instance will be replaced so we must to reverse the line and replace first (.)
            //old implementation : modifiedLine = modifiedLine.replace('.', ' lorensDreamDot ');
            //notice "toDmaerDsnerol" string in .replace() function its reversed "lorensDreamDot" string
            modifiedLine = modifiedLine.split("").reverse().join("").replace('.', ' toDmaerDsnerol ').split("").reverse().join("");

        }
        return modifiedLine;
    });

    // join the  processed result
    const joinedText = processedLines.join('\n')

    const removeWhiteSpaces = joinedText.replace(/\s+/g, ' ').trim();

    const transformedText = removeWhiteSpaces
        .replace(/lorensDreamDash/g, '\n - ')
        .replace(/lorensDreamCircle/g, '\n - ')
        .replace(/lorensDreamQmark/g, '?\n')
        .replace(/lorensDreamStar/g, '\n - ')
        .replace(/lorensDreamColon/g, ':\n')
        .replace(/lorensDreamNumber(\d+)(Dash|Dot|Underscore)?/g, (match, number, character) => {
            let replacement = `\n${number}`;
            if (character === 'Dash') {
                replacement += '- ';
            } else if (character === 'Dot') {
                replacement += '. ';
            } else if (character === 'Underscore') {
                replacement += '_ ';
            } else {
                replacement += ' ';
            }
            return replacement;
        })
        .replace(/lorensDreamSharp(\d+)/g, (match, lineIndex) => {
            const linesArray = lineKeeper.linesList
            let lineInfo = ""
            linesArray.forEach((item) => {
                if (parseInt(lineIndex) === parseInt(item.lineCode)) lineInfo = item.lineContent
            })
            const lineInfoClean = lineInfo.replace(lineKeeper.symbol, "")//remove the # 
            return "\n" + lineInfoClean + "\n"
        }
        )
        .replace(/lorensDreamUnchange(\d+)/g, (match, lineIndex) => {
            const linesArray = unchangeableStrings.modifiedStringList
            let lineInfo = ""
            linesArray.forEach((item) => {
                if (parseInt(lineIndex) === parseInt(item.lineCode)) lineInfo = item.originString
            })
            const lineInfoClean = lineInfo.replace(lineKeeper.symbol, "")//remove the # 
            return  lineInfoClean 
        }
        )
        .replace(/lorensDreamDot/g, '.\n');

    const trimTheLines = trimLines(transformedText)

    const cleanEmptyLines = trimTheLines.replace(/^\s*[\r\n]/gm, '');
    // remove last character if it empty
    let newText =""
    if(cleanEmptyLines[[cleanEmptyLines.length -1]] == "\n"){
        newText = cleanEmptyLines.slice(0, -1)
      
    }else{
        newText=cleanEmptyLines
    }
    
    return newText
}

//console.log(lorensDreamStringFixer(ttt,"#"))