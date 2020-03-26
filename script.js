var input = document.querySelector("input");
var vowels = document.querySelector("vowels");
var len_count = document.querySelector("#len_count");
var v_count =  document.querySelector("#vowel_count");
var c_count = document.querySelector("#consonant_count");
var s_count = document.querySelector("#spaces_count");
var sc_count = document.querySelector("#sc_count");
var reset = document.querySelector("#button2");
function vowel_count(input)
{
    var vowels = 'aeiouAEIOU'
    var vowelscount = 0;
    for(var i = 0;i<input.length;i++)
    {
        if(vowels.indexOf(input[i]) !== -1)
        {
            vowelscount++;
        }
    }
    return vowelscount;
}

function consonant_count(input)
{
    var vowels = 'aeiouAEIOU'
    var consonantcount = 0;
    for(var i = 0;i<input.length;i++)
    {
        if(vowels.indexOf(input[i]) === -1)
        {
            consonantcount++;
        }
    }
    return consonantcount;
}

function space_count(input)
{
    var space = ' '
    var spacecount = 0;
    for(var i = 0;i<input.length;i++)
    {
        if(space.indexOf(input[i]) !== -1)
        {
            spacecount++;
        }
    }
    return spacecount;
}

function sc(input)
{
    var space = ":,?!@#$%^&*()-+*/-><{}[]";
    var scount = 0;
    for(var i = 0;i<input.length;i++)
    {
        if(space.indexOf(input[i]) !== -1)
        {
            scount++;
        }
    }
    return scount;
}
input.addEventListener("change", function(){
    len_count.textContent = input.value.length;
    v_count.textContent = vowel_count(input.value); 
    c_count.textContent = consonant_count(input.value) - space_count(input.value);
    s_count.textContent = space_count(input.value);
    sc_count.textContent = sc(input.value);

});

reset.addEventListener("click", function(){
    len_count.textContent = 0;
    v_count.textContent = 0;
    c_count.textContent = 0;
    s_count.textContent = 0;
    sc_count.textContent = 0;
    document.querySelector("input").value = " ";
});






