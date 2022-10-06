function previous(element) {
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case 'addressDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'block';
      document.getElementById('profileDiv').style.display = 'none';
      document.getElementById('resultDiv').style.display = 'none';
      break;
    case 'profileDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'block';
      document.getElementById('resultDiv').style.display = 'none';

      break;
    case 'resultDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'none';
      document.getElementById('profileDiv').style.display = 'block';

      break;

    default:
      break;
  }
}
function nextDiv(element) {
  //alert();

  let checkFirstName = document
    .getElementsByName('firstName')[0]
    .checkValidity();
  let checkLastName = document.getElementsByName('lastName')[0].checkValidity();
  let checkBirthDate = document
    .getElementsByName('birthDate')[0]
    .checkValidity();
  let checkNationality = document
    .getElementsByName('nationality')[0]
    .checkValidity();
  let checkAddress = document.getElementsByName('address')[0].checkValidity();
  let checkHouseNumber = document
    .getElementsByName('houseNumber')[0]
    .checkValidity();
  let checkZipCode = document.getElementsByName('zipCode')[0].checkValidity();
  let checkUserName = document.getElementsByName('username')[0].checkValidity();
  let checkPassword = document.getElementsByName('password')[0].checkValidity();
  let checkImageFile = document
    .getElementsByName('imageFile')[0]
    .checkValidity();
  let passwordMatch =
    document.getElementsByName('password')[0].value ===
    document.getElementsByName('password-repeat')[0].value;

  let birthDate = document.getElementsByName('birthDate')[0].value;
  let currentDate = new Date();
  //alert(Math.floor((currentDate-Date.parse(birthDate))/(1000 * 60 * 60 * 24*365)) );
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case 'personalDiv':
      if (
        checkFirstName &&
        checkLastName &&
        checkBirthDate &&
        checkNationality
      ) {
        element.parentNode.style.display = 'none';
        document.getElementById('addressDiv').style.display = 'block';
        document.getElementById('profileDiv').style.display = 'none';
        document.getElementById('resultDiv').style.display = 'none';
      } else {
        alert('you Have invalid entries');
      }

      break;
    case 'addressDiv':
      if (checkAddress && checkHouseNumber && checkZipCode) {
        element.parentNode.style.display = 'none';
        document.getElementById('personalDiv').style.display = 'none';
        document.getElementById('profileDiv').style.display = 'block';
        document.getElementById('resultDiv').style.display = 'none';
      } else {
        alert('you Have invalid entries');
      }
      break;
    case 'profileDiv':
      if (checkUserName && checkPassword && checkImageFile && passwordMatch) {
        element.parentNode.style.display = 'none';
        document.getElementById('personalDiv').style.display = 'none';
        document.getElementById('addressDiv').style.display = 'none';
        document.getElementById('resultDiv').style.display = 'block';
        showData();
      } else {
        alert('you Have invalid entries');
      }
      break;

    default:
      break;
  }
}

function showData() {
  let firstName = document.getElementsByName('firstName')[0].value;
  let lastName = document.getElementsByName('lastName')[0].value;
  let birthDate = document.getElementsByName('birthDate')[0].value;
  let nationality = document.getElementsByName('nationality')[0].value;
  let address = document.getElementsByName('address')[0].value;
  let houseNumber = document.getElementsByName('houseNumber')[0].value;
  let zipCode = document.getElementsByName('zipCode')[0].value;
  let username = document.getElementsByName('username')[0].value;
  let password = document.getElementsByName('password')[0].value;
  let imageFile = document.getElementsByName('imageFile')[0].value;

  document.getElementById('nameLabel').innerText = firstName + ' ' + lastName;
  document.getElementById('birthDateLabel').innerText = birthDate;
  document.getElementById('nationalityLabel').innerText = nationality;
  document.getElementById('addressLabel').innerText =
    address + ', ' + houseNumber + ' ' + zipCode;
  document.getElementById('usernameLabel').innerText = username;
  document.getElementById('passwordLabel').innerText = password;
  document.getElementById('photoLabel').src = imageFile.replace(
    'C:\\fakepath\\',
    './images/'
  );
}
