let simulate=false;

let roadcount = 
[
    ["I_ln", 0],
    ["II_ln",0],
    ["III_ln",0],
    ["IV_ln",0],
    ["cr_rd1", 0],
    ["cr_rd2", 0],
    ["cr_rd4", 0],
    ["T_jun", 0],
    ["stg_rd", 0],
    ["rb_rd",0],
    ["dd_end",0]
];
const referroadcount = 
[
    ["I_ln", 1],
    ["II_ln",0.5],
    ["III_ln",0.3],
    ["IV_ln",0.25],
    ["cr_rd1", 1],
    ["cr_rd2", 0.5],
    ["cr_rd4", 0.25],
    ["T_jun", 0.5],
    ["stg_rd",0.3],
    ["rb_rd",0.2],
    ["dd_end",0]
];
let column = 1;
let jscount = 0;

document.getElementById("simulation").addEventListener
("click", function()
{
    simulate=true;
}
);

while(simulate==true)
{
    
    for (let i = 0; i < data.length; i++) 
    {
        if (roadcount[i][0] === /*userInput*/) {
          roadcount[i][1]++;
          console.log("Count incremented for "+ userInput);
          break;
        }
    }

    for (let i = 0; i < data.length; i++)
    {
        jscount += roadcount[i][column];
    }

    if(jscount>0)
    {
        for (let i = 0; i < jscount; i++)
        {
            
        }
    }
    else
    {
    //invalid
    }
    //once python is done computing set simulate to false 

}
    //print out the value from python
