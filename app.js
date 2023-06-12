let personList = document.getElementById('personList');

let birthdayLenght = document.getElementById('birthdayLenght');
function removeList() {

    personList.style.display = 'none';
    birthdayLenght.innerHTML = "0 Birthdays Today"
}

let person = [
    {
        name: 'Bertie Yates',
        age: "29 years",
        image: "https://www.course-api.com/images/people/person-1.jpeg",
    },
    {
        name: 'Hester Hogan',
        age: "32 years",
        image: "https://www.course-api.com/images/people/person-2.jpeg",
    },
    {
        name: 'Larry Little',
        age: "36 years",
        image: "https://www.course-api.com/images/people/person-3.jpeg",
    },
    {
        name: 'Sean Walsh',
        age: "34 years",
        image: "https://www.course-api.com/images/people/person-4.jpeg",
    },
    {
        name: 'Lola Gardner',
        age: "29 years",
        image: "https://www.course-api.com/images/people/person-5.jpeg",
    },
];



function addToList(){
    
    // Generate the HTML code for each person
    const html = person.map(person => `
    <article class="person">
    <img src="${person.image}" alt="${person.name}" class="img">
    <div>
        <h4>${person.name}</h4>
        <p>${person.age}</p>
    </div>
    </article>
    `).join('');

    // Set the generated HTML code as the innerHTML of the 'personList' div
    personList.innerHTML = html;
}

function clearArray(){
    person = [];
    birthdayLenght.innerHTML = "0 Birthdays Today"
    addToList();
}

function addperson(){
    person.push({
        name: 'Glory Olaifa',
        age: "33 years",
        image: "https://www.course-api.com/images/people/person-1.jpeg",
    },);
    let personlenght = person.length
    birthdayLenght.innerHTML = personlenght + " " + "Birthdays Today"
    addToList();
}