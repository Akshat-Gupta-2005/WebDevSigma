let marks = {
    "eng":10,
    "maths":20,
    "science":30,
    "sst":40,
    "sans":50,
}

for (const key in marks) {
    console.log(key + " " +marks[key]);
}