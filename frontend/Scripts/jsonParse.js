// document.getElementById("buttontest").onclick = function() {
//     $.getJSON( 'response.json', function( data ) {
//
//
//         originName = document.getElementById("userInput").elements["origin"].value;
//         destinationName = document.getElementById("userInput").elements["destination"].value;
//
//         if (destinationName == "LHR") {
//             test = 0;
//             lengthTest = 34;
//         } else if (destinationName == "AUS") {
//             test = 34;
//             lengthTest = 8;
//         } else if (destinationName == "MCO") {
//             test = 42;
//             lengthTest = 39;
//         } else if (destinationName == "LAX") {
//             test = 81;
//             lengthTest = 63;
//         } else if (destinationName == "JFK") {
//             test = 144;
//             lengthTest = 111;
//         } else if (destinationName == "MIA") {
//             test = 255;
//             lengthTest = 17;
//         }
//         console.log(test +" "+lengthTest)
//
//         if(data.scheduledFlights.length == 0 && destinationName == data.scheduledFlights[test].arrivalAirportFsCode)
//         {
//             document.getElementById("apiTest2").innerHTML = "There aren't any scheduled flights at this time";
//         } else if (originName == data.scheduledFlights[test].departureAirportFsCode && destinationName == data.scheduledFlights[test].arrivalAirportFsCode)
//         {
//             //Set apiTest to list out flight info
//             document.getElementById("apiTest").innerHTML = "Flight Info";
//             document.getElementById("apiTest2").innerHTML = "";
//             for (var i = test; i < lengthTest+test; i++) {
//                 // Create a p and set the text content to the flight info
//                 flightnumber = data.scheduledFlights[i].flightNumber
//                 var fnp = document.createElement("P");
//                 fnp.innerHTML = "Flight number is " + flightnumber;
//                 departureTime = data.scheduledFlights[i].departureTime
//                 var dtimep = document.createElement("P");
//                 dtimep.innerHTML = "Departure time is " + departureTime;
//                 departureTerminal = data.scheduledFlights[i].departureTerminal
//                 var dterminalp = document.createElement("P");
//                 dterminalp.innerHTML = "Departure terminal is " + departureTerminal;
//                 arrivalTime = data.scheduledFlights[i].arrivalTime
//                 var atimep = document.createElement("P");
//                 atimep.innerHTML = "Arrival time is " + arrivalTime;
//                 arrivalTerminal = data.scheduledFlights[i].arrivalTerminal
//                 var aterminalp = document.createElement("P");
//                 aterminalp.innerHTML = "Arrival terminal is " + arrivalTerminal;
//
//                 var separator = document.createElement("P");
//                 separator.innerHTML = "__________________________________________";
//                 //Append to empty element to fill out the page
//                 document.getElementById("apiTest2").appendChild(fnp)
//                 document.getElementById("apiTest2").appendChild(dtimep)
//                 document.getElementById("apiTest2").appendChild(dterminalp)
//                 document.getElementById("apiTest2").appendChild(atimep)
//                 document.getElementById("apiTest2").appendChild(aterminalp)
//                 document.getElementById("apiTest2").appendChild(separator)
//
//                 //This is for debbuging
//                 console.log( i + " flight number is " + flightnumber);
//                 console.log( i + " departure time is " + departureTime);
//                 console.log( i + " departure terminal is " + departureTerminal);
//                 console.log( i + " arrival time is " + arrivalTime);
//                 console.log( i + " arrival terminal is " + arrivalTerminal);
//                 console.log(data.scheduledFlights[i].departureAirportFsCode);
//                 console.log(data.scheduledFlights[i].arrivalAirportFsCode);
//
//
//             }
//
//         } else {
//            document.getElementById("apiTest2").innerHTML = "This place is not in our data base";
//         }
//
//
//     });
//
//
//
// };

/* Use the code below when we figure out the CORS issue*/


document.getElementById("buttontest").onclick = function() {
    $.getJSON( "http://localhost:3000/flights/"+document.getElementById("userInput").elements["destination"].value, function( data ) {
        originName = document.getElementById("userInput").elements["origin"].value;
        destinationName = document.getElementById("userInput").elements["destination"].value;
        if(data.scheduledFlights.length == 0 && destinationName == data.scheduledFlights[0].arrivalAirportFsCode)
        {
            document.getElementById("apiTest2").innerHTML = "There aren't any scheduled flights at this time";
        } else if (originName == data.scheduledFlights[0].departureAirportFsCode && destinationName == data.scheduledFlights[0].arrivalAirportFsCode)
        {
            //Set apiTest to list out flight info
            document.getElementById("apiTest").innerHTML = "Flight Info";
            for (var i = 0; i < data.scheduledFlights.length; i++) {
                // Create a p and set the text content to the flight info
                flightnumber = data.scheduledFlights[i].flightNumber
                var fnp = document.createElement("P");
                fnp.innerHTML = "Flight number is " + flightnumber;
                departureTime = data.scheduledFlights[i].departureTime
                var dtimep = document.createElement("P");
                dtimep.innerHTML = "Departure time is " + departureTime;
                departureTerminal = data.scheduledFlights[i].departureTerminal
                var dterminalp = document.createElement("P");
                dterminalp.innerHTML = "Departure terminal is " + departureTerminal;
                arrivalTime = data.scheduledFlights[i].arrivalTime
                var atimep = document.createElement("P");
                atimep.innerHTML = "Arrival time is " + arrivalTime;
                arrivalTerminal = data.scheduledFlights[i].arrivalTerminal
                var aterminalp = document.createElement("P");
                aterminalp.innerHTML = "Arrival terminal is " + arrivalTerminal;

                var separator = document.createElement("P");
                separator.innerHTML = "__________________________________________";
                //Append to empty element to fill out the page
                document.getElementById("apiTest2").appendChild(fnp)
                document.getElementById("apiTest2").appendChild(dtimep)
                document.getElementById("apiTest2").appendChild(dterminalp)
                document.getElementById("apiTest2").appendChild(atimep)
                document.getElementById("apiTest2").appendChild(aterminalp)
                document.getElementById("apiTest2").appendChild(separator)

                //This is for debbuging
                console.log( i + " flight number is " + flightnumber);
                console.log( i + " departure time is " + departureTime);
                console.log( i + " departure terminal is " + departureTerminal);
                console.log( i + " arrival time is " + arrivalTime);
                console.log( i + " arrival terminal is " + arrivalTerminal);
                console.log(data.scheduledFlights[i].departureAirportFsCode);
                console.log(data.scheduledFlights[i].arrivalAirportFsCode);


            }

        } else {
           document.getElementById("apiTest2").innerHTML = "This place is not in our data base";
        }


    });



};
