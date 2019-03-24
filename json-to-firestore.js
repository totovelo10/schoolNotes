const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAhnkrdlGV96G16cHhNRS-eKPXzF6N4wvw",
  authDomain: "schoolnotes-fc26d.firebaseapp.com",
  databaseURL: "https://schoolnotes-fc26d.firebaseio.com",
  projectId: "schoolnotes-fc26d",
  storageBucket: "schoolnotes-fc26d.appspot.com",
  messagingSenderId: "840351142557"
};
firebase.initializeApp(config);

var db = firebase.firestore();

var users = [
	{
		"id": 1,
		"name": "Hickman",
		"firstname": "Basia",
		"email": "Pellentesque@diamSeddiam.co.uk",
		"dateNaissance": "06/08/2019",
		"type": "Professeur"
	},
	{
		"id": 2,
		"name": "Delgado",
		"firstname": "Linus",
		"email": "Phasellus.libero@ornare.ca",
		"dateNaissance": "21/06/2018",
		"type": "Administrateur"
	},
	{
		"id": 3,
		"name": "Hays",
		"firstname": "Tatyana",
		"email": "erat.nonummy.ultricies@ut.co.uk",
		"dateNaissance": "02/09/2018",
		"type": "Professeur"
	},
	{
		"id": 4,
		"name": "Fulton",
		"firstname": "Hannah",
		"email": "nunc@diamPellentesquehabitant.com",
		"dateNaissance": "20/09/2018",
		"type": "Professeur"
	},
	{
		"id": 5,
		"name": "Clarke",
		"firstname": "Hedwig",
		"email": "nec.enim.Nunc@netus.net",
		"dateNaissance": "07/03/2019",
		"type": "Elève"
	},
	{
		"id": 6,
		"name": "Hicks",
		"firstname": "Lila",
		"email": "enim.gravida.sit@duinecurna.ca",
		"dateNaissance": "30/04/2019",
		"type": "Administrateur"
	},
	{
		"id": 7,
		"name": "Lancaster",
		"firstname": "Ursula",
		"email": "commodo.ipsum.Suspendisse@sollicitudin.net",
		"dateNaissance": "10/02/2020",
		"type": "Administrateur"
	},
	{
		"id": 8,
		"name": "Knight",
		"firstname": "Lois",
		"email": "Curabitur@sollicitudinorci.net",
		"dateNaissance": "10/03/2019",
		"type": "Professeur"
	},
	{
		"id": 9,
		"name": "Murphy",
		"firstname": "Diana",
		"email": "dolor@Donecluctus.org",
		"dateNaissance": "26/06/2018",
		"type": "Professeur"
	},
	{
		"id": 10,
		"name": "Herrera",
		"firstname": "Wanda",
		"email": "gravida.Praesent@velit.com",
		"dateNaissance": "30/07/2018",
		"type": "Professeur"
	},
	{
		"id": 11,
		"name": "Bradford",
		"firstname": "Stewart",
		"email": "non.lacinia@blanditmattisCras.com",
		"dateNaissance": "15/10/2018",
		"type": "Professeur"
	},
	{
		"id": 12,
		"name": "Moses",
		"firstname": "Ori",
		"email": "Maecenas.ornare@Donec.edu",
		"dateNaissance": "09/07/2019",
		"type": "Administrateur"
	},
	{
		"id": 13,
		"name": "Benton",
		"firstname": "Nathan",
		"email": "rhoncus.Proin@et.com",
		"dateNaissance": "05/06/2019",
		"type": "Professeur"
	},
	{
		"id": 14,
		"name": "Glenn",
		"firstname": "Jessica",
		"email": "tempor@adipiscing.ca",
		"dateNaissance": "16/05/2018",
		"type": "Professeur"
	},
	{
		"id": 15,
		"name": "Daugherty",
		"firstname": "Brett",
		"email": "mollis@arcuVestibulum.net",
		"dateNaissance": "02/08/2019",
		"type": "Administrateur"
	},
	{
		"id": 16,
		"name": "Vazquez",
		"firstname": "Naomi",
		"email": "purus@blanditviverra.edu",
		"dateNaissance": "03/12/2019",
		"type": "Professeur"
	},
	{
		"id": 17,
		"name": "Porter",
		"firstname": "Hope",
		"email": "Suspendisse.dui.Fusce@aauctor.com",
		"dateNaissance": "26/05/2018",
		"type": "Elève"
	},
	{
		"id": 18,
		"name": "Weeks",
		"firstname": "Burke",
		"email": "arcu@sitamet.ca",
		"dateNaissance": "22/03/2018",
		"type": "Elève"
	},
	{
		"id": 19,
		"name": "Bird",
		"firstname": "Jolie",
		"email": "aliquam@estvitae.com",
		"dateNaissance": "15/06/2019",
		"type": "Elève"
	},
	{
		"id": 20,
		"name": "Buchanan",
		"firstname": "Malachi",
		"email": "semper.dui@pellentesquetellussem.com",
		"dateNaissance": "29/06/2019",
		"type": "Administrateur"
	},
	{
		"id": 21,
		"name": "Reid",
		"firstname": "Emi",
		"email": "ipsum.Curabitur.consequat@est.org",
		"dateNaissance": "23/11/2018",
		"type": "Administrateur"
	},
	{
		"id": 22,
		"name": "Palmer",
		"firstname": "Lawrence",
		"email": "Proin@Nuncmauris.net",
		"dateNaissance": "27/02/2019",
		"type": "Administrateur"
	},
	{
		"id": 23,
		"name": "Abbott",
		"firstname": "Athena",
		"email": "est.Nunc@vitaerisusDuis.co.uk",
		"dateNaissance": "03/03/2020",
		"type": "Elève"
	},
	{
		"id": 24,
		"name": "Benjamin",
		"firstname": "Plato",
		"email": "lorem.eu.metus@utodiovel.org",
		"dateNaissance": "21/07/2018",
		"type": "Professeur"
	},
	{
		"id": 25,
		"name": "Snider",
		"firstname": "Hiram",
		"email": "nulla@ultricesVivamus.ca",
		"dateNaissance": "23/01/2020",
		"type": "Professeur"
	},
	{
		"id": 26,
		"name": "Gray",
		"firstname": "Faith",
		"email": "nisl.Maecenas@massaMauris.net",
		"dateNaissance": "09/11/2019",
		"type": "Administrateur"
	},
	{
		"id": 27,
		"name": "Gibson",
		"firstname": "Burke",
		"email": "elementum.purus@Fusce.ca",
		"dateNaissance": "24/08/2018",
		"type": "Elève"
	},
	{
		"id": 28,
		"name": "Evans",
		"firstname": "James",
		"email": "egestas@ProinmiAliquam.org",
		"dateNaissance": "26/08/2018",
		"type": "Administrateur"
	},
	{
		"id": 29,
		"name": "Rojas",
		"firstname": "Chava",
		"email": "lobortis.ultrices.Vivamus@Phasellusfermentumconvallis.co.uk",
		"dateNaissance": "12/11/2018",
		"type": "Elève"
	},
	{
		"id": 30,
		"name": "Barlow",
		"firstname": "Cathleen",
		"email": "interdum@dictumauguemalesuada.co.uk",
		"dateNaissance": "12/07/2018",
		"type": "Elève"
	},
	{
		"id": 31,
		"name": "Dillard",
		"firstname": "Upton",
		"email": "eu.nulla.at@felis.com",
		"dateNaissance": "13/09/2018",
		"type": "Administrateur"
	},
	{
		"id": 32,
		"name": "Cotton",
		"firstname": "Oleg",
		"email": "massa.Quisque.porttitor@quamelementumat.net",
		"dateNaissance": "01/04/2019",
		"type": "Professeur"
	},
	{
		"id": 33,
		"name": "Bullock",
		"firstname": "Leroy",
		"email": "luctus@velitduisemper.org",
		"dateNaissance": "30/04/2018",
		"type": "Elève"
	},
	{
		"id": 34,
		"name": "Villarreal",
		"firstname": "Isaiah",
		"email": "libero.Integer@Sed.com",
		"dateNaissance": "14/12/2019",
		"type": "Administrateur"
	},
	{
		"id": 35,
		"name": "Little",
		"firstname": "Amery",
		"email": "sociosqu@ipsum.co.uk",
		"dateNaissance": "21/06/2018",
		"type": "Administrateur"
	},
	{
		"id": 36,
		"name": "Harmon",
		"firstname": "Christopher",
		"email": "neque@id.org",
		"dateNaissance": "23/04/2018",
		"type": "Professeur"
	},
	{
		"id": 37,
		"name": "Solomon",
		"firstname": "Colby",
		"email": "vitae@Aliquamerat.ca",
		"dateNaissance": "04/03/2019",
		"type": "Elève"
	},
	{
		"id": 38,
		"name": "Parsons",
		"firstname": "Riley",
		"email": "sed.dictum@enimMaurisquis.net",
		"dateNaissance": "24/10/2018",
		"type": "Professeur"
	},
	{
		"id": 39,
		"name": "Hancock",
		"firstname": "Angelica",
		"email": "magna.Nam.ligula@aneque.com",
		"dateNaissance": "13/11/2019",
		"type": "Administrateur"
	},
	{
		"id": 40,
		"name": "Webb",
		"firstname": "Emery",
		"email": "pharetra.Quisque.ac@nec.co.uk",
		"dateNaissance": "02/02/2019",
		"type": "Administrateur"
	},
	{
		"id": 41,
		"name": "Stafford",
		"firstname": "Kiona",
		"email": "justo@utnullaCras.edu",
		"dateNaissance": "08/08/2019",
		"type": "Elève"
	},
	{
		"id": 42,
		"name": "Lynn",
		"firstname": "Drew",
		"email": "massa.lobortis@dapibusligula.net",
		"dateNaissance": "26/11/2018",
		"type": "Professeur"
	},
	{
		"id": 43,
		"name": "Hickman",
		"firstname": "Jerry",
		"email": "Nam.consequat.dolor@at.edu",
		"dateNaissance": "17/01/2020",
		"type": "Professeur"
	},
	{
		"id": 44,
		"name": "Robbins",
		"firstname": "Jesse",
		"email": "quis.pede.Suspendisse@utdolor.edu",
		"dateNaissance": "08/10/2019",
		"type": "Professeur"
	},
	{
		"id": 45,
		"name": "Anderson",
		"firstname": "Kirby",
		"email": "lacus.Mauris.non@In.co.uk",
		"dateNaissance": "26/02/2020",
		"type": "Administrateur"
	},
	{
		"id": 46,
		"name": "Davidson",
		"firstname": "Dana",
		"email": "mauris.a.nunc@vitaesodalesnisi.edu",
		"dateNaissance": "26/07/2019",
		"type": "Professeur"
	},
	{
		"id": 47,
		"name": "George",
		"firstname": "Xavier",
		"email": "enim.consequat@tortor.org",
		"dateNaissance": "24/12/2018",
		"type": "Elève"
	},
	{
		"id": 48,
		"name": "Ballard",
		"firstname": "Ian",
		"email": "ac@esttempor.edu",
		"dateNaissance": "24/08/2018",
		"type": "Elève"
	},
	{
		"id": 49,
		"name": "Wilkinson",
		"firstname": "Hamish",
		"email": "lorem.auctor.quis@maurissit.com",
		"dateNaissance": "26/11/2019",
		"type": "Elève"
	},
	{
		"id": 50,
		"name": "Wilkerson",
		"firstname": "Shaeleigh",
		"email": "a.malesuada.id@hendrerit.co.uk",
		"dateNaissance": "29/02/2020",
		"type": "Elève"
	},
	{
		"id": 51,
		"name": "Marquez",
		"firstname": "Gretchen",
		"email": "Duis.mi.enim@sed.ca",
		"dateNaissance": "22/08/2019",
		"type": "Elève"
	},
	{
		"id": 52,
		"name": "Mccall",
		"firstname": "Alec",
		"email": "fringilla.porttitor.vulputate@AliquamnislNulla.ca",
		"dateNaissance": "20/02/2020",
		"type": "Professeur"
	},
	{
		"id": 53,
		"name": "Ramos",
		"firstname": "Justine",
		"email": "hendrerit@justo.com",
		"dateNaissance": "23/05/2018",
		"type": "Elève"
	},
	{
		"id": 54,
		"name": "Hunter",
		"firstname": "Myles",
		"email": "a.facilisis.non@ut.org",
		"dateNaissance": "14/04/2018",
		"type": "Administrateur"
	},
	{
		"id": 55,
		"name": "Warren",
		"firstname": "Karina",
		"email": "lectus@lectusNullam.co.uk",
		"dateNaissance": "30/04/2019",
		"type": "Administrateur"
	},
	{
		"id": 56,
		"name": "Stewart",
		"firstname": "Hilda",
		"email": "nunc.id.enim@non.co.uk",
		"dateNaissance": "24/09/2019",
		"type": "Elève"
	},
	{
		"id": 57,
		"name": "Greer",
		"firstname": "Baker",
		"email": "mollis.Duis@lectuspedeultrices.ca",
		"dateNaissance": "08/09/2019",
		"type": "Administrateur"
	},
	{
		"id": 58,
		"name": "Pace",
		"firstname": "Dale",
		"email": "a.ultricies.adipiscing@dignissim.co.uk",
		"dateNaissance": "24/08/2018",
		"type": "Professeur"
	},
	{
		"id": 59,
		"name": "Beasley",
		"firstname": "Iola",
		"email": "luctus@a.edu",
		"dateNaissance": "22/03/2018",
		"type": "Administrateur"
	},
	{
		"id": 60,
		"name": "Velez",
		"firstname": "Bertha",
		"email": "erat.semper.rutrum@quis.com",
		"dateNaissance": "05/07/2018",
		"type": "Administrateur"
	},
	{
		"id": 61,
		"name": "Tanner",
		"firstname": "Chanda",
		"email": "egestas.blandit.Nam@Quisquenonummy.org",
		"dateNaissance": "08/12/2019",
		"type": "Professeur"
	},
	{
		"id": 62,
		"name": "Valentine",
		"firstname": "Caleb",
		"email": "Sed.eu@atfringillapurus.co.uk",
		"dateNaissance": "27/08/2018",
		"type": "Elève"
	},
	{
		"id": 63,
		"name": "Hudson",
		"firstname": "Isaiah",
		"email": "Morbi.quis@sed.co.uk",
		"dateNaissance": "24/10/2019",
		"type": "Administrateur"
	},
	{
		"id": 64,
		"name": "Delacruz",
		"firstname": "Libby",
		"email": "fames.ac@blanditmattisCras.ca",
		"dateNaissance": "10/01/2020",
		"type": "Elève"
	},
	{
		"id": 65,
		"name": "William",
		"firstname": "Shea",
		"email": "amet.consectetuer@euturpisNulla.edu",
		"dateNaissance": "27/06/2018",
		"type": "Professeur"
	},
	{
		"id": 66,
		"name": "Graves",
		"firstname": "Troy",
		"email": "quam.elementum.at@egetnisi.ca",
		"dateNaissance": "06/01/2020",
		"type": "Administrateur"
	},
	{
		"id": 67,
		"name": "Juarez",
		"firstname": "Buckminster",
		"email": "tellus@sodalesnisimagna.ca",
		"dateNaissance": "01/11/2019",
		"type": "Professeur"
	},
	{
		"id": 68,
		"name": "Greene",
		"firstname": "Nichole",
		"email": "aliquet@ut.edu",
		"dateNaissance": "02/05/2019",
		"type": "Professeur"
	},
	{
		"id": 69,
		"name": "Clements",
		"firstname": "Kessie",
		"email": "dui.quis.accumsan@eudui.net",
		"dateNaissance": "13/08/2019",
		"type": "Elève"
	},
	{
		"id": 70,
		"name": "Ewing",
		"firstname": "Stella",
		"email": "vitae.posuere@montesnascetur.edu",
		"dateNaissance": "07/11/2019",
		"type": "Administrateur"
	},
	{
		"id": 71,
		"name": "Mcclure",
		"firstname": "Hedwig",
		"email": "Nullam@noncursus.org",
		"dateNaissance": "01/05/2018",
		"type": "Administrateur"
	},
	{
		"id": 72,
		"name": "Sanford",
		"firstname": "Troy",
		"email": "Phasellus.at.augue@Nunc.com",
		"dateNaissance": "13/05/2018",
		"type": "Elève"
	},
	{
		"id": 73,
		"name": "Owen",
		"firstname": "Jarrod",
		"email": "posuere@nuncullamcorpereu.co.uk",
		"dateNaissance": "25/05/2019",
		"type": "Elève"
	},
	{
		"id": 74,
		"name": "Higgins",
		"firstname": "Rae",
		"email": "justo@scelerisque.net",
		"dateNaissance": "10/01/2020",
		"type": "Professeur"
	},
	{
		"id": 75,
		"name": "Flores",
		"firstname": "Armando",
		"email": "ante.blandit.viverra@ametrisus.co.uk",
		"dateNaissance": "19/07/2019",
		"type": "Professeur"
	},
	{
		"id": 76,
		"name": "Workman",
		"firstname": "Theodore",
		"email": "lobortis.nisi.nibh@nec.edu",
		"dateNaissance": "04/03/2019",
		"type": "Elève"
	},
	{
		"id": 77,
		"name": "Washington",
		"firstname": "Wynter",
		"email": "commodo.auctor@feugiat.edu",
		"dateNaissance": "10/12/2019",
		"type": "Elève"
	},
	{
		"id": 78,
		"name": "Gutierrez",
		"firstname": "Baxter",
		"email": "eu.tellus.eu@dolorsit.net",
		"dateNaissance": "15/04/2018",
		"type": "Elève"
	},
	{
		"id": 79,
		"name": "Nunez",
		"firstname": "Yetta",
		"email": "tortor.dictum@Pellentesqueultricies.ca",
		"dateNaissance": "17/12/2018",
		"type": "Elève"
	},
	{
		"id": 80,
		"name": "Hines",
		"firstname": "September",
		"email": "mi.fringilla.mi@temporaugue.com",
		"dateNaissance": "19/04/2018",
		"type": "Administrateur"
	},
	{
		"id": 81,
		"name": "Finley",
		"firstname": "Deacon",
		"email": "Duis@vitaealiquameros.edu",
		"dateNaissance": "21/07/2019",
		"type": "Professeur"
	},
	{
		"id": 82,
		"name": "Morse",
		"firstname": "Macy",
		"email": "sit.amet@cursuset.net",
		"dateNaissance": "14/05/2018",
		"type": "Administrateur"
	},
	{
		"id": 83,
		"name": "Craft",
		"firstname": "Yoko",
		"email": "euismod.et@risusatfringilla.edu",
		"dateNaissance": "05/08/2019",
		"type": "Administrateur"
	},
	{
		"id": 84,
		"name": "Espinoza",
		"firstname": "Eagan",
		"email": "Vestibulum.ante@Pellentesque.net",
		"dateNaissance": "07/05/2018",
		"type": "Elève"
	},
	{
		"id": 85,
		"name": "Peterson",
		"firstname": "Jenna",
		"email": "egestas.hendrerit.neque@vestibulummassarutrum.co.uk",
		"dateNaissance": "22/02/2020",
		"type": "Elève"
	},
	{
		"id": 86,
		"name": "Schwartz",
		"firstname": "Celeste",
		"email": "et.lacinia@acliberonec.net",
		"dateNaissance": "28/08/2018",
		"type": "Administrateur"
	},
	{
		"id": 87,
		"name": "Knapp",
		"firstname": "Meghan",
		"email": "vitae@inceptos.net",
		"dateNaissance": "12/02/2019",
		"type": "Professeur"
	},
	{
		"id": 88,
		"name": "Salas",
		"firstname": "Kerry",
		"email": "egestas@Aliquamgravidamauris.ca",
		"dateNaissance": "11/05/2019",
		"type": "Elève"
	},
	{
		"id": 89,
		"name": "Mcleod",
		"firstname": "Josephine",
		"email": "sagittis.semper@eratsemper.co.uk",
		"dateNaissance": "28/06/2018",
		"type": "Elève"
	},
	{
		"id": 90,
		"name": "Mcgee",
		"firstname": "Paki",
		"email": "dignissim.pharetra@sed.co.uk",
		"dateNaissance": "28/08/2018",
		"type": "Professeur"
	},
	{
		"id": 91,
		"name": "Hester",
		"firstname": "Knox",
		"email": "nec.malesuada.ut@atvelitCras.ca",
		"dateNaissance": "16/11/2018",
		"type": "Administrateur"
	},
	{
		"id": 92,
		"name": "Payne",
		"firstname": "Brynn",
		"email": "ultricies.ornare@auctorMaurisvel.co.uk",
		"dateNaissance": "31/07/2019",
		"type": "Professeur"
	},
	{
		"id": 93,
		"name": "Frye",
		"firstname": "Ila",
		"email": "convallis.ante.lectus@estmollis.net",
		"dateNaissance": "07/11/2018",
		"type": "Administrateur"
	},
	{
		"id": 94,
		"name": "Koch",
		"firstname": "Cameran",
		"email": "amet@fringilla.ca",
		"dateNaissance": "14/08/2018",
		"type": "Elève"
	},
	{
		"id": 95,
		"name": "Barrett",
		"firstname": "Randall",
		"email": "Integer.sem.elit@duiFusce.net",
		"dateNaissance": "28/03/2019",
		"type": "Elève"
	},
	{
		"id": 96,
		"name": "Navarro",
		"firstname": "Basil",
		"email": "diam.Duis@ut.com",
		"dateNaissance": "25/01/2020",
		"type": "Professeur"
	},
	{
		"id": 97,
		"name": "Bright",
		"firstname": "Dahlia",
		"email": "vulputate.velit.eu@Nullamfeugiatplacerat.net",
		"dateNaissance": "12/09/2018",
		"type": "Professeur"
	},
	{
		"id": 98,
		"name": "Thornton",
		"firstname": "Yuli",
		"email": "sed@magnaatortor.com",
		"dateNaissance": "27/03/2018",
		"type": "Professeur"
	},
	{
		"id": 99,
		"name": "Hubbard",
		"firstname": "Hop",
		"email": "neque.non.quam@Vivamus.co.uk",
		"dateNaissance": "18/04/2019",
		"type": "Professeur"
	},
	{
		"id": 100,
		"name": "Sexton",
		"firstname": "Simon",
		"email": "tempus.non.lacinia@temporestac.org",
		"dateNaissance": "15/07/2018",
		"type": "Administrateur"
	}
]

users.forEach(function(obj) {
    db.collection("users").add({
        id: obj.id,
        name: obj.name,
        firstname: obj.firstname,
		email: obj.email,
		dateNaissance: obj.dateNaissance,
        type: obj.type
    }).then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
		//update id field to correspond to id document
		docRef.update({
			id : docRef.id
		})
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});