export   const tests = [
    //trim
    {
        input: `   line   `,
        outputExpected: `line`,
        description: "trim"
    },
    {
        input: ` line \n line `,
        outputExpected: `line line`,
        description: "trim multiple lines"
    },
    // remove all white spaces
    {
        input: `   line   \n        line2    \n\n      line3`,
        outputExpected: `line line2 line3`,
        description: "remove all white spaces"
    },
    // • to -
    {
        input: `•line`,
        outputExpected: `-  line`,
        description: "change • to - "
    },
    {
        input: `•line\n•line`,
        outputExpected: `-  line\n-  line`,
        description: "change • to - multiple lines"
    },
    
    
    {
        input: `   •line   `,
        outputExpected: `-  line`,
        description: "trim + change • to -"
    },
    {
        input: ` •line \n •line `,
        outputExpected: `-  line\n-  line`,
        description: "trim multiple lines + change • to - multiple lines"
    },
        // * to -
        {
            input: `*line`,
            outputExpected: `-  line`,
            description: "change * to - "
        },
        {
            input: `*line\n*line`,
            outputExpected: `-  line\n-  line`,
            description: "change * to - multiple lines"
        },
        
        
        {
            input: `   *line   `,
            outputExpected: `-  line`,
            description: "trim + change * to -"
        },
        {
            input: ` *line \n *line `,
            outputExpected: `-  line\n-  line`,
            description: "trim multiple lines + change * to - multiple lines"
        },
    // fix -
    {
        input: `-line`,
        outputExpected: `-  line`,
        description: "fix -  "
    },
    {
        input: `-line\n-line`,
        outputExpected: `-  line\n-  line`,
        description: "fix - in multiple lines"
    },
    
    
    {
        input: `   -line   `,
        outputExpected: `-  line`,
        description: "trim + fix - "
    },
    {
        input: ` -line \n -line `,
        outputExpected: `-  line\n-  line`,
        description: "trim multiple lines + fix - in multiple lines"
    },
    //numbers list 
    {
        input: "1 line",
        outputExpected: "1 line",
        description: "numbers list "
    },
    {
        input: "1 line1\n2 line2",
        outputExpected: "1 line1\n2 line2",
        description: "don't merge the lines if there is numbers list "
    },
    {
        input: "1       line1    \n2       line2      ",
        outputExpected: "1 line1\n2 line2",
        description: "don't merge the lines if there is numbers list  + trim the lines"
    },
    {
        input: "1 line1.\n2 line2",
        outputExpected: "1 line1 .\n2 line2",
        description: "don't merge the lines if there is numbers list  + respect the (.) at the end of line"
    },
    {
        input: "1 line1:\n2 line2",
        outputExpected: "1 line1 :\n2 line2",
        description: "don't merge the lines if there is numbers list  + respect the (:) at the end of line"
    },
    {
        input: "1 line1?\n2 line2",
        outputExpected: "1 line1 ?\n2 line2",
        description: "don't merge the lines if there is numbers list  + respect the (?) at the end of line"
    },
    {
        input: "1 line1\n#line2\n2 line3",
        outputExpected: "1 line1\nline2\n2 line3",
        description: "don't merge the lines if there is numbers list  + respect the (#) "
    },
    //numbers list with . 
    {
        input: "1.line",
        outputExpected: "1. line",
        description: "add space after the (.)"
    },
    {
        input: "1.line1\n2.line2",
        outputExpected: "1. line1\n2. line2",
        description: "don't merge the lines if there is numbers list (.) version"
    },
    {
        input: "1.      line1    \n2.      line2      ",
        outputExpected: "1.  line1\n2.  line2",
        description: "don't merge the lines if there is numbers list (.) version + trim the lines"
    },
    {
        input: "1.line1.\n2.line2",
        outputExpected: "1. line1 .\n2. line2",
        description: "don't merge the lines if there is numbers list (.) version + respect the (.) at the end of line"
    },
    {
        input: "1.line1:\n2.line2",
        outputExpected: "1. line1 :\n2. line2",
        description: "don't merge the lines if there is numbers list (.) version + respect the (:) at the end of line"
    },
    {
        input: "1.line1?\n2.line2",
        outputExpected: "1. line1 ?\n2. line2",
        description: "don't merge the lines if there is numbers list (.) version + respect the (?) at the end of line"
    },
    {
        input: "1.line1\n#line2\n2.line3",
        outputExpected: "1. line1\nline2\n2. line3",
        description: "don't merge the lines if there is numbers list (.) version + respect the (#) "
    },
    //numbers list with - 
    {
        input: "1-line",
        outputExpected: "1- line",
        description: "add space after the (-)"
    },
    {
        input: "1-line1\n2-line2",
        outputExpected: "1- line1\n2- line2",
        description: "don't merge the lines if there is numbers list (-) version"
    },
    {
        input: "1-      line1    \n2-      line2      ",
        outputExpected: "1-  line1\n2-  line2",
        description: "don't merge the lines if there is numbers list (-) version + trim the lines"
    },
    {
        input: "1-line1.\n2-line2",
        outputExpected: "1- line1 .\n2- line2",
        description: "don't merge the lines if there is numbers list (-) version + respect the (.) at the end of line"
    },
    {
        input: "1-line1:\n2-line2",
        outputExpected: "1- line1 :\n2- line2",
        description: "don't merge the lines if there is numbers list (-) version + respect the (:) at the end of line"
    },
    {
        input: "1-line1?\n2-line2",
        outputExpected: "1- line1 ?\n2- line2",
        description: "don't merge the lines if there is numbers list (-) version + respect the (?) at the end of line"
    },
    {
        input: "1-line1\n#line2\n2-line3",
        outputExpected: "1- line1\nline2\n2- line3",
        description: "don't merge the lines if there is numbers list (-) version + respect the (#) "
    },
     //numbers list with _ 
     {
        input: "1_line",
        outputExpected: "1_ line",
        description: "add space after the (_)"
    },
    {
        input: "1_line1\n2_line2",
        outputExpected: "1_ line1\n2_ line2",
        description: "don't merge the lines if there is numbers list (_) version"
    },
    {
        input: "1_      line1    \n2_      line2      ",
        outputExpected: "1_  line1\n2_  line2",
        description: "don't merge the lines if there is numbers list (_) version + trim the lines"
    },
    {
        input: "1_line1.\n2_line2",
        outputExpected: "1_ line1 .\n2_ line2",
        description: "don't merge the lines if there is numbers list (_) version + respect the (.) at the end of line"
    },
    {
        input: "1_line1:\n2_line2",
        outputExpected: "1_ line1 :\n2_ line2",
        description: "don't merge the lines if there is numbers list (_) version + respect the (:) at the end of line"
    },
    {
        input: "1_line1?\n2_line2",
        outputExpected: "1_ line1 ?\n2_ line2",
        description: "don't merge the lines if there is numbers list (_) version + respect the (?) at the end of line"
    },
    {
        input: "1_line1\n#line2\n2_line3",
        outputExpected: "1_ line1\nline2\n2_ line3",
        description: "don't merge the lines if there is numbers list (_) version + respect the (#) "
    },
    //merge the lines 
    {
        input: "line\nline",
        outputExpected: "line line",
        description: "merge the lines if no need to line break"
    },
    {
        input: "line\nline\nline",
        outputExpected: "line line line",
        description: "merge the lines if no need to line break"
    },
    {
        input: "line\nline.\nline",
        outputExpected: "line line .\nline",
        description: "merge the lines and add break line if need , add break line because (:)"
    },
    {
        input: "line\nline:\nline",
        outputExpected: "line line :\nline",
        description: "merge the lines and add break line if need , add break line because (.)"
    },
    {
        input: "line\nline?\nline",
        outputExpected: "line line ?\nline",
        description: "merge the lines and add break line if need , add break line because (?)"

    },
    {
        input: "line1\nline2\n#line3\nline4\nline5\nline6",
        outputExpected: "line1 line2\nline3\nline4 line5 line6",
        description: "merge the lines and add break line if need ,respect (#)"
        
    },
    //merge the line that ends with(.)
    {
        input: "line.",
        outputExpected: "line .",
        description: "if the line end s with (.)"
    },
    {
        input: "line\nline.",
        outputExpected: "line line .",
        description: "merge the line that ends with(.) with it's previous line"
    },

]