var correct = 0;

// FIRST PAGE

document.getElementById('first01').addEventListener('click', function() {
    Function01();
    Variable01();
});

document.getElementById('second01').addEventListener('click', Function01);
document.getElementById('third01').addEventListener('click', Function01);

function Function01() {
    var quiz02 = document.getElementById('quiz02');
    var quiz01 = document.getElementById('quiz01');
    
    // Hide quiz01
    quiz01.style.display = 'none';
    
    // Show ghostStatement
    quiz02.style.display = 'block';
}

function Variable01() {
    correct++;
    console.log(correct + "/7")
}

// SECOND PAGE

document.getElementById('first02').addEventListener('click', Function02);

document.getElementById('second02').addEventListener('click', function() {
    Function02();
    Variable02();
});

document.getElementById('third02').addEventListener('click', Function02);

function Function02() {
    var quiz03 = document.getElementById('quiz03');
    var quiz02 = document.getElementById('quiz02');
    
    // Hide quiz02
    quiz02.style.display = 'none';
    
    // Show ghostStatement
    quiz03.style.display = 'block';
}

function Variable02() {
    correct++;
    console.log(correct + "/7")
}

// THIRD PAGE

document.getElementById('first03').addEventListener('click', function() {
    Function03();
    Variable03();
});

document.getElementById('second03').addEventListener('click', Function03);
document.getElementById('third03').addEventListener('click', Function03);

function Function03() {
    var quiz04 = document.getElementById('quiz04');
    var quiz03 = document.getElementById('quiz03');
    
    // Hide quiz03
    quiz03.style.display = 'none';
    
    // Show ghostStatement
    quiz04.style.display = 'block';
}

function Variable03() {
    correct++;
    console.log(correct + "/7")
}

// FORTH PAGE

document.getElementById('first04').addEventListener('click', Function04);
document.getElementById('second04').addEventListener('click', Function04);

document.getElementById('third04').addEventListener('click', function() {
    Function04();
    Variable04();
});

function Function04() {
    var quiz05 = document.getElementById('quiz05');
    var quiz04 = document.getElementById('quiz04');
    
    // Hide quiz04
    quiz04.style.display = 'none';
    
    // Show ghostStatement
    quiz05.style.display = 'block';
}

function Variable04() {
    correct++;
    console.log(correct + "/7")
}

//FIFTH PAGE

document.getElementById('first05').addEventListener('click', Function05);

document.getElementById('second05').addEventListener('click', function() {
    Function05();
    Variable05();
});

document.getElementById('third05').addEventListener('click', Function05);

function Function05() {
    var quiz06 = document.getElementById('quiz06');
    var quiz05 = document.getElementById('quiz05');
    
    // Hide quiz05
    quiz05.style.display = 'none';
    
    // Show ghostStatement
    quiz06.style.display = 'block';
}

function Variable05() {
    correct++;
    console.log(correct + "/7")
}

//SIXTH PAGE

document.getElementById('first06').addEventListener('click', Function06);

document.getElementById('second06').addEventListener('click', function() {
    Function06();
    Variable06();
});

document.getElementById('third06').addEventListener('click', Function06);

function Function06() {
    var quiz07 = document.getElementById('quiz07');
    var quiz06 = document.getElementById('quiz06');
    
    // Hide quiz06
    quiz06.style.display = 'none';
    
    // Show ghostStatement
    quiz07.style.display = 'block';
}

function Variable06() {
    correct++;
    console.log(correct + "/7")
}

// SEVENTH PAGE

document.getElementById('first07').addEventListener('click', function() {
    Function07();
    RightSolutionFunction();
});

document.getElementById('second07').addEventListener('click', function() {
    Function07();
    RightSolutionFunction();
});

document.getElementById('third07').addEventListener('click', function() {
    Function07();
    Variable07();
    RightSolutionFunction();
});

function Function07() {
    var quiz07 = document.getElementById('quiz07');
    
    // Hide quiz07
    quiz07.style.display = 'none';
    var viewFullStory = document.getElementById('viewFullStory');
    
    // Show ghostStatement
    viewFullStory.style.display = 'block';
}

function Variable07() {
    correct++;
    console.log(correct + "/7")
}

function RightSolutionFunction() {
    var rightSolutionCount = document.getElementById("rightSolutionCount");

    // Setzen des Inhalts des Paragraphen auf den Wert der Variable
    rightSolutionCount.innerHTML = "You answered " + correct + " / 7 questions correctly";
}