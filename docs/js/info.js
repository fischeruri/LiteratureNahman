function checkTest() {
    var grade = 0;
    var isQ1T = document.getElementById('Q1T').checked;
    var isQ2T = document.getElementById("Q2").value;
    var isQ3T = document.getElementById("Q3").value;
    var isQ4T = document.getElementById('Q4T').checked;
    if (isQ1T) {
        grade ++;
    }
    if (isQ2T == "true") {
        grade++;
    }
    if (isQ3T == "true") {
        grade++;
    }
    if (isQ4T) {
        grade++;
    }
    document.getElementById("TestTable").style.display = "none";
    if (grade == 0) {
        document.getElementById("EndTable0").style.display = "table";
    }
    else if (grade == 1) {
        document.getElementById("EndTable1").style.display = "table";
    }
    else if (grade == 2) {
        document.getElementById("EndTable2").style.display = "table";
    }
    else if (grade == 3) {
        document.getElementById("EndTable3").style.display = "table";
    }
    else if (grade == 4) {
        document.getElementById("EndTable4").style.display = "table";
    }
    document.getElementById("HomepageLink").style.display = "table";
}
function Test() {
    document.getElementById("InfoTable").style.display = "none";
    document.getElementById("TestTable").style.display = "table";
    setTimeout(checkTest, 60000);
}
function ShowInfo() {
    document.getElementById("IntroTable").style.display = "none";
    document.getElementById("InfoTable").style.display = "table";
    setTimeout(Test, 60000);
}
