function getJSON(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = handleResponse;
    xhr.onerror = function (error) { reject(error); };
    xhr.send();

    function handleResponse() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let employees = JSON.parse(xhr.responseText);
          resolve(employees)
          console.log(employees);
        } else {
          reject(this.statusText);
        }
      }
    }
  });
}

function generateListItems(employees) {
  let statusHTML = '';
  for (let i = 0; i < employees.length; i = i + 1) {
    if (employees[i].inoffice === true) {
      statusHTML = statusHTML + '<li class="in">';
    } else {
      statusHTML = statusHTML + '<li class="out">';
    }
    statusHTML = statusHTML + employees[i].name;
    statusHTML = statusHTML + '</li>';
  }
  console.log(employees[2].inoffice);
  console.log(statusHTML);
  return statusHTML;
}

function generateUnorderedList(listItems) {
  return '<ul class="bulleted">' + listItems + '</ul>';
}

function addEmployeesToPage(unorderedList) {
  document.getElementById('employeeList').innerHTML = unorderedList;
}

getJSON('../data/employees.json')
  .then(generateListItems)
  .then(generateUnorderedList)
  .then(addEmployeesToPage)
  .catch(function (e) {
    console.log(e);
  });
