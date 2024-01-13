function skillsMember() {
    var member = document.getElementById("member");
    var memberText = member.options[member.selectedIndex].text;
    var memberValue = member.options[member.selectedIndex].value;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsText = memberSkills.options[memberSkills.selectedIndex].text;
    var memberSkillsValue = memberSkills.options[memberSkills.selectedIndex].value;
    if (memberValue == "member") {
        document.getElementById("memberSkills").style.display = "none";
    } else {
        document.getElementById("memberSkills").style.display = "block";
    }
}