//business logic

function openSideMenu() {
  document.getElementById('side-menu').style.width= "250px";
  document.getElementById('main').style.marginLeft= "250px";
}

function closeSideMenu() {
  document.getElementById('side-menu').style.width="0";
  document.getElementById('main').style.marginLeft="0";
}

function Contact(first, last, relation, address, postal, city, country, email, mobile, work, doctor, phone) {
  this.firstName = first;
  this.lastName = last;
  this.relation = relation;
  this.address = address;
  this.postalCode = postal;
  this.city = city;
  this.country = country;
  this.email = email;
  this.mobileNo = mobile;
  this.workNo = work;
  this.doctor = doctor;
  this.phoneNo = phone;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " +
    this.lastName + " " +
    this.relation + " " +
    this.address + " " +
    this.postalCode + " " +
    this.city + " " +
    this.country + " " +
    this.email + " " + this.mobileNo + " " + this.workNo + " " + this.doctor + " " + this.phoneNo;
}
// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedRelation = $("input#new-relation").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedPostalCode = $("input#new-postal-code").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedMobileNo = $("input#new-mobile-no").val();
    var inputtedWorkNo = $("input#new-work-no").val();
    var inputtedDoctor = $("input#new-doctor").val();
    var inputtedPhoneNo = $("input#new-phone-no").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedRelation, inputtedAddress, inputtedPostalCode, inputtedCity, inputtedCountry, inputtedEmail, inputtedMobileNo, inputtedWorkNo, inputtedDoctor, inputtedPhoneNo);

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
