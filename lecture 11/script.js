let times = ["9-11", "12-14", "14-18", "18-21"];

let flag = "true";

for (let i = 0; i < times.length - 1; i++ ) {
    if (times[i].split("-")[1] > times[i+1].split("-")[0]) {
        flag = "false";
        break;
    }
}

alert(flag);
