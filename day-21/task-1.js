class Validator {
  isEmail(mail) {
    // const regExpMail = /(?.*[a - z]{2})/;
    const regExpMail = /(\S{3,})+@+(\S{2,})+\.+\S{2,}/;
    if (mail.match(regExpMail)) {
      return true;
    } else {
      return false;
    }
  }

  isDomain(domain) {
    const regExpDomain = /(\S{1,})+\.+([a-zA-Z0=9]{2,})/;
    if (domain.match(regExpDomain)) {
      return true;
    } else {
      return false;
    }
  }

  isDate(date) {
    const regExpDate = /(\d{1,2})+\.+(0[1-9]|1[0-2])+\.(\d{4})+$/;
    if (date.match(regExpDate)) {
      return true;
    } else {
      return false;
    }
  }

  isPhone(phone) {
    const regExpPhone =
    /[+995][55]+[1,3,5,7,8,9]{1}|([55]+[1,3,5,8,9]{1})+\-+([0-9]{2})+\-([0-9]{2})+\-([0-9]{2})+$/;
    if (phone.match(regExpPhone)) {
      return true;
    } else {
      return false;
    }
  }
}

var validator = new Validator();

// console.log(validator.isEmail("jshtml@mail.ru"));
console.log(validator.isEmail("luka.kilasonia.1@btu.ge"));
console.log(validator.isDomain("https.jshtml.net"));
console.log(validator.isDate("20.05.2020"));
console.log(validator.isPhone("+995-557-54-21-41")); // it can be format of your country
