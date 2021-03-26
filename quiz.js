function check(){
    var k=0;
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q4=document.quiz.q4.value;
    var q5=document.quiz.q5.value;
    var result=document.getElementById('result');
    if (q1=="benar") {k++}
    if (q2=="benar") {k++}
    if (q3=="benar") {k++}
    if (q4=="benar") {k++}
    if (q5=="benar") {k++}
    
    result.textContent=`${k}`;
}
