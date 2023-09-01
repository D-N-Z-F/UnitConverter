let brandNav = document.getElementById("nav-brand");
let homeNav = document.getElementById("home-page");
let home = document.getElementById("home");
let category = document.getElementById("category");
let heading = document.getElementById("heading");
let inputHeading1 = document.getElementById("input-heading1");
let inputHeading2 = document.getElementById("input-heading2");
let convertBtn = document.getElementById("convert-btn");
let resetBtn = document.getElementById("reset-btn");
let inputFrom = document.getElementById("input-from");
let inputTo = document.getElementById("input-to");
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");

let units = document.getElementsByClassName("unit");
let uom = document.getElementsByClassName("uom");
let leftSelect = document.getElementsByClassName("left");
let rightSelect = document.getElementsByClassName("right");

category.style.display = "none";

//UnitConverterOnClick
brandNav.onclick = function () {
  home.style.display = "block";
  category.style.display = "none";
};

//NavHomeOnClick
homeNav.onclick = function () {
  home.style.display = "block";
  category.style.display = "none";
};

//NavCategoriesOnClick
for (var i = 0; i < units.length; i++) {
  units[i].onclick = function () {
    //Length
    if (this.innerText == "Length") {
      home.style.display = "none";
      category.style.display = "block";
      for (var i = 0; i < leftSelect.length; i++) {
        let arrayOfUnits = ["Meter", "Feet", "Inch"];
        leftSelect[i].innerText = arrayOfUnits[i];
      }
      for (var i = 0; i < rightSelect.length; i++) {
        let arrayOfUnits = ["Meter", "Feet", "Inch"];
        rightSelect[i].innerText = arrayOfUnits[i];
      }
    }
    //Length

    //Temperature
    if (this.innerText == "Temperature") {
      home.style.display = "none";
      category.style.display = "block";
      for (var i = 0; i < leftSelect.length; i++) {
        let arrayOfUnits = ["Celsius", "Fahrenheit", "Kelvin"];
        leftSelect[i].innerText = arrayOfUnits[i];
      }
      for (var i = 0; i < rightSelect.length; i++) {
        let arrayOfUnits = ["Celsius", "Fahrenheit", "Kelvin"];
        rightSelect[i].innerText = arrayOfUnits[i];
      }
    }
    //Temperature

    //Mass
    if (this.innerText == "Mass") {
      home.style.display = "none";
      category.style.display = "block";
      for (var i = 0; i < leftSelect.length; i++) {
        let arrayOfUnits = ["Kilogram", "Pound", "Ton"];
        leftSelect[i].innerText = arrayOfUnits[i];
      }
      for (var i = 0; i < rightSelect.length; i++) {
        let arrayOfUnits = ["Kilogram", "Pound", "Ton"];
        rightSelect[i].innerText = arrayOfUnits[i];
      }
    }
    //Mass

    //Volume
    if (this.innerText == "Volume") {
      home.style.display = "none";
      category.style.display = "block";
      for (var i = 0; i < leftSelect.length; i++) {
        let arrayOfUnits = ["Liter", "Milliliter", "Cubic Meter"];
        leftSelect[i].innerText = arrayOfUnits[i];
      }
      for (var i = 0; i < rightSelect.length; i++) {
        let arrayOfUnits = ["Liter", "Milliliter", "Cubic Meter"];
        rightSelect[i].innerText = arrayOfUnits[i];
      }
    }
    //Volume

    //Time
    if (this.innerText == "Time") {
      home.style.display = "none";
      category.style.display = "block";
      for (var i = 0; i < leftSelect.length; i++) {
        let arrayOfUnits = ["Hour", "Minute", "Second"];
        leftSelect[i].innerText = arrayOfUnits[i];
      }
      for (var i = 0; i < rightSelect.length; i++) {
        let arrayOfUnits = ["Hour", "Minute", "Second"];
        rightSelect[i].innerText = arrayOfUnits[i];
      }
    }
    //Time
  };
}

//CategoriesOnClick
for (var i = 0; i < uom.length; i++) {
  uom[i].onclick = function () {
    //Length
    if (this.innerText == "Length") {
      home.style.display = "none";
      category.style.display = "block";
      for (var i = 0; i < leftSelect.length; i++) {
        let arrayOfUnits = ["Meter", "Feet", "Inch"];
        leftSelect[i].innerText = arrayOfUnits[i];
      }
      for (var i = 0; i < rightSelect.length; i++) {
        let arrayOfUnits = ["Meter", "Feet", "Inch"];
        rightSelect[i].innerText = arrayOfUnits[i];
      }
    }
    //Length

    //Temperature
    if (this.innerText == "Temperature") {
      home.style.display = "none";
      category.style.display = "block";
      for (var i = 0; i < leftSelect.length; i++) {
        let arrayOfUnits = ["Celsius", "Fahrenheit", "Kelvin"];
        leftSelect[i].innerText = arrayOfUnits[i];
      }
      for (var i = 0; i < rightSelect.length; i++) {
        let arrayOfUnits = ["Celsius", "Fahrenheit", "Kelvin"];
        rightSelect[i].innerText = arrayOfUnits[i];
      }
    }
    //Temperature

    //Mass
    if (this.innerText == "Mass") {
      home.style.display = "none";
      category.style.display = "block";
      for (var i = 0; i < leftSelect.length; i++) {
        let arrayOfUnits = ["Kilogram", "Pound", "Ton"];
        leftSelect[i].innerText = arrayOfUnits[i];
      }
      for (var i = 0; i < rightSelect.length; i++) {
        let arrayOfUnits = ["Kilogram", "Pound", "Ton"];
        rightSelect[i].innerText = arrayOfUnits[i];
      }
    }
    //Mass

    //Volume
    if (this.innerText == "Volume") {
      home.style.display = "none";
      category.style.display = "block";
      for (var i = 0; i < leftSelect.length; i++) {
        let arrayOfUnits = ["Liter", "Milliliter", "Cubic Meter"];
        leftSelect[i].innerText = arrayOfUnits[i];
      }
      for (var i = 0; i < rightSelect.length; i++) {
        let arrayOfUnits = ["Liter", "Milliliter", "Cubic Meter"];
        rightSelect[i].innerText = arrayOfUnits[i];
      }
    }
    //Volume

    //Time
    if (this.innerText == "Time") {
      home.style.display = "none";
      category.style.display = "block";
      for (var i = 0; i < leftSelect.length; i++) {
        let arrayOfUnits = ["Hour", "Minute", "Second"];
        leftSelect[i].innerText = arrayOfUnits[i];
      }
      for (var i = 0; i < rightSelect.length; i++) {
        let arrayOfUnits = ["Hour", "Minute", "Second"];
        rightSelect[i].innerText = arrayOfUnits[i];
      }
    }
    //Time
  };
}

//SelectUnitOnClick
for (var i = 0; i < leftSelect.length; i++) {
  leftSelect[i].onclick = function () {
    inputHeading1.innerText = this.innerText;
  };
  rightSelect[i].onclick = function () {
    inputHeading2.innerText = this.innerText;
  };
}

//ConvertOnClick
convertBtn.onclick = function () {
  if (inputHeading1.innerText == "Unit" || inputHeading2.innerText == "Unit")
    return alert("Must select unit!");
  if (inputFrom.value == 0) return alert("Must be more than 0!");
  if (inputHeading1.innerText == inputHeading2.innerText)
    return alert("Cannot convert into same unit!");

  //Length
  if (inputHeading1.innerText == "Meter" && inputHeading2.innerText == "Feet")
    inputTo.value = inputFrom.value * 3.280839895;
  if (inputHeading1.innerText == "Meter" && inputHeading2.innerText == "Inch")
    inputTo.value = inputFrom.value / 0.0254;
  if (inputHeading1.innerText == "Feet" && inputHeading2.innerText == "Meter")
    inputTo.value = inputFrom.value * 0.3048;
  if (inputHeading1.innerText == "Feet" && inputHeading2.innerText == "Inch")
    inputTo.value = inputFrom.value * 12;
  if (inputHeading1.innerText == "Inch" && inputHeading2.innerText == "Meter")
    inputTo.value = inputFrom.value * 0.0254;
  if (inputHeading1.innerText == "Inch" && inputHeading2.innerText == "Feet")
    inputTo.value = inputFrom.value / 12;
  //Length

  //Temperature
  if (
    inputHeading1.innerText == "Celsius" &&
    inputHeading2.innerText == "Fahrenheit"
  )
    inputTo.value = inputFrom.value * 1.8 + 32;
  if (
    inputHeading1.innerText == "Celsius" &&
    inputHeading2.innerText == "Kelvin"
  )
    inputTo.value = parseInt(inputFrom.value) + 273.15;
  if (
    inputHeading1.innerText == "Fahrenheit" &&
    inputHeading2.innerText == "Celsius"
  )
    inputTo.value = (inputFrom.value - 32) / 1.8;
  if (
    inputHeading1.innerText == "Fahrenheit" &&
    inputHeading2.innerText == "Kelvin"
  )
    inputTo.value = (parseInt(inputFrom.value) + 459.67) * (5 / 9);
  if (
    inputHeading1.innerText == "Kelvin" &&
    inputHeading2.innerText == "Celsius"
  )
    inputTo.value = inputFrom.value - 273.15;
  if (
    inputHeading1.innerText == "Kelvin" &&
    inputHeading2.innerText == "Fahrenheit"
  )
    inputTo.value = inputFrom.value * (9 / 5) - 459.67;
  //Temperature

  //Mass
  if (
    inputHeading1.innerText == "Kilogram" &&
    inputHeading2.innerText == "Pound"
  )
    inputTo.value = inputFrom.value / 0.45359237;
  if (inputHeading1.innerText == "Kilogram" && inputHeading2.innerText == "Ton")
    inputTo.value = inputFrom.value / 1000;
  if (
    inputHeading1.innerText == "Pound" &&
    inputHeading2.innerText == "Kilogram"
  )
    inputTo.value = inputFrom.value * 0.45359237;
  if (inputHeading1.innerText == "Pound" && inputHeading2.innerText == "Ton")
    inputTo.value = inputFrom.value * 0.00045359237;
  if (inputHeading1.innerText == "Ton" && inputHeading2.innerText == "Kilogram")
    inputTo.value = inputFrom.value * 1000;
  if (inputHeading1.innerText == "Ton" && inputHeading2.innerText == "Pound")
    inputTo.value = inputFrom.value / 0.00045359237;
  //Mass

  //Volume
  if (
    inputHeading1.innerText == "Liter" &&
    inputHeading2.innerText == "Milliliter"
  )
    inputTo.value = inputFrom.value * 1000;
  if (
    inputHeading1.innerText == "Liter" &&
    inputHeading2.innerText == "Cubic Meter"
  )
    inputTo.value = inputFrom.value / 1000;
  if (
    inputHeading1.innerText == "Milliliter" &&
    inputHeading2.innerText == "Liter"
  )
    inputTo.value = inputFrom.value / 1000;
  if (
    inputHeading1.innerText == "Milliliter" &&
    inputHeading2.innerText == "Cubic Meter"
  )
    inputTo.value = inputFrom.value / 1000000;
  if (
    inputHeading1.innerText == "Cubic Meter" &&
    inputHeading2.innerText == "Liter"
  )
    inputTo.value = inputFrom.value * 1000;
  if (
    inputHeading1.innerText == "Cubic Meter" &&
    inputHeading2.innerText == "Milliliter"
  )
    inputTo.value = inputFrom.value * 1000000;
  //Volume

  //Time
  if (inputHeading1.innerText == "Hour" && inputHeading2.innerText == "Minute")
    inputTo.value = inputFrom.value * 60;
  if (inputHeading1.innerText == "Hour" && inputHeading2.innerText == "Second")
    inputTo.value = inputFrom.value * 3600;
  if (inputHeading1.innerText == "Minute" && inputHeading2.innerText == "Hour")
    inputTo.value = inputFrom.value * 0.0166667;
  if (
    inputHeading1.innerText == "Minute" &&
    inputHeading2.innerText == "Second"
  )
    inputTo.value = inputFrom.value * 60;
  if (inputHeading1.innerText == "Second" && inputHeading2.innerText == "Hour")
    inputTo.value = inputFrom.value / 3600;
  if (
    inputHeading1.innerText == "Second" &&
    inputHeading2.innerText == "Minute"
  )
    inputTo.value = inputFrom.value / 60;
  //Time
};

//ResetOnClick
resetBtn.onclick = function () {
  form1.reset();
  form2.reset();
  inputHeading1.innerText = "Unit";
  inputHeading2.innerText = "Unit";
};
