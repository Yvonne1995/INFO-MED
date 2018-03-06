//business logic
function Contact(first, last, dob, sex, marital, id, blood, height, weight, address, street, postal, city, country, email, mobile, work) {
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
}

Contact.prototype.fullName = function() {
  return this.firstName + " " +
    this.lastName + " " +
    this.dob + " " +
    this.sex + " " +
    this.marital + " " +
    this.id + " " +
    this.blood + " " +
    this.height + " " +
    this.weight + " " +
    this.address + " " +
    this.street + " " +
    this.postal + " " + this.city + " " + this.country + " " + this.email + " " + this.mobile + " " + this.work;
}
// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedDOB = $("input#new-dob").val();
    var inputtedSex = $("input#new-sex").val();
    var inputtedMaritalStatus = $("input#new-marital-status").val();
    var inputtedIDNo = $("input#new-id-no").val();
    var inputtedBloodType = $("input#new-blood-type").val();
    var inputtedHeight = $("input#new-height").val();
    var inputtedWeight = $("input#new-weight").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedStreet = $("input#new-street").val();
    var inputtedPostalCode = $("input#new-postal-code").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedMobileNo = $("input#new-mobile").val();
    var inputtedWorkNo = $("input#new-work").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedDOB, inputtedSex, inputtedMaritalStatus, inputtedIDNo, inputtedBloodType, inputtedHeight, inputtedWeight, inputtedAddress, inputtedStreet, inputtedPostalCode, inputtedCity, inputtedCountry, inputtedEmail, inputtedMobileNo, inputtedWorkNo);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".first-name").text(newContact.street);
      $(".last-name").text(newContact.city);
      $(".last-name").text(newContact.country);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-country").val("");
  });
});
