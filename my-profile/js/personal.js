//business logic

function openSideMenu() {
  document.getElementById('side-menu').style.width= "250px";
  document.getElementById('main').style.marginLeft= "250px";
}

function closeSideMenu() {
  document.getElementById('side-menu').style.width="0";
  document.getElementById('main').style.marginLeft="0";
}

function Contact(first, last, dob, sex, marital, id, blood, height, weight, address, street, postal, city, country, email, mobile, work, phone, relation, doctor) {
  this.firstName = first;
  this.lastName = last;
  this.dob = dob;
  this.sex = sex;
  this.maritalStatus = marital;
  this.id = id;
  this.bloodType = blood;
  this.height = height;
  this.weight = weight;
  this.address = address;
  this.street = street;
  this.postalCode = postal;
  this.city = city;
  this.country = country;
  this.email = email;
  this.mobileNo = mobile;
  this.workNo = work;
  this.phoneNo = phone;
  this.relation = relation;
  this.doctor = doctor;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " +
    this.lastName + " " +
    this.dob + " " +
    this.sex + " " +
    this.maritalStatus + " " +
    this.id + " " +
    this.bloodType + " " +
    this.height + " " +
    this.weight + " " +
    this.address + " " +
    this.street + " " +
    this.postalCode + " " +
    this.city + " " +
    this.country + " " +
    this.email + " " + this.mobileNo + " " + this.workNo + " " + this.relation + " " + this.doctor + " " + this.phoneNo;
}
// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedDob = $("input#new-dob").val();
    var inputtedSex = $("input#new-sex").val();
    var inputtedMaritalStatus = $("input#new-marital-status").val();
    var inputtedIDNo = $("input#new-id-number").val();
    var inputtedBloodType = $("input#new-blood-type").val();
    var inputtedHeight = $("input#new-height").val();
    var inputtedWeight = $("input#new-weight").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedStreet = $("input#new-street").val();
    var inputtedPostalCode = $("input#new-postal-code").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedMobileNo = $("input#new-mobile-no").val();
    var inputtedWorkNo = $("input#new-work-no").val();
    var inputtedRelation = $("input#new-relation").val();
    var inputtedDoctor = $("input#new-doctor").val();
    var inputtedPhoneNo = $("input#new-phone-no").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedDob, inputtedSex, inputtedMaritalStatus, inputtedIDNo, inputtedBloodType, inputtedHeight, inputtedWeight, inputtedAddress, inputtedStreet, inputtedPostalCode, inputtedCity, inputtedCountry, inputtedEmail, inputtedMobileNo, inputtedWorkNo, inputtedPhoneNo, inputtedRelation, inputtedDoctor);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".first-name").text(newContact.street);
      $(".last-name").text(newContact.city);
      $(".last-name").text(newContact.country);
      $(".sex").text(newContact.sex);
      $(".marital-status").text(newContact.maritalStatus);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-country").val("");
  });
});
