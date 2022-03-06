async function postData(data) {
	const response = await fetch("https://api.vetrinas.ly/form", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	})
		.then((results) => results.json())
		.catch((error) => error.message);
}

// async function postData(
// 	url = "https://form-submit.clickup.com/v1/form/4gn8j-7861/submit?token=XPLAWYH6BYJMICSHXI&ngsw-bypass=true",
// 	data = {}
// ) {
// 	// Default options are marked with *
// 	const response = await fetch(url, {
// 		method: "POST", // *GET, POST, PUT, DELETE, etc.
// 		headers: {
// 			"Content-Type": "application/json",
// 			":authority": "form-submit.clickup.com",
// 			Authorization: "Bearer XPLAWYH6BYJMICSHXI&ngsw",
// 			":method": "POST",
// 			":path":
// 				"/v1/form/4gn8j-7861/submit?token=XPLAWYH6BYJMICSHXI&ngsw-bypass=true",
// 			":scheme": "https",
// 			accept: "application/json, text/plain, */*",
// 			"accept-encoding": "gzip, deflate, br",
// 			"accept-language": "en-US,en;q=0.9",
// 			"content-length": "385",
// 			"content-type": "application/json",
// 			origin: "https://forms.clickup.com",
// 			referer: "https://forms.clickup.com/",
// 			"sec-fetch-dest": "empty",
// 			"sec-fetch-mode": "cors",
// 			"sec-fetch-site": "same-site",
// 			"sec-gpc": "1",
// 			// 'Content-Type': 'application/x-www-form-urlencoded',
// 		},
// 		body: data, // body data type must match "Content-Type" header
// 	});
// 	return response.json(); // parses JSON response into native JavaScript objects
// }

async function submitHandler(e) {
	e.preventDefault();
	document.getElementById("submit-btn").setAttribute("disabled", true);
	// fetch(
	// 	"https://form-submit.clickup.com/v1/form/4gn8j-7861/submit?token=XPLAWYH6BYJMICSHXI&ngsw-bypass=true",
	// 	{ method: "POST" }
	// );
	let storeName = document.getElementById("store-name").value;
	let storeDiscription = document.getElementById("store-description").value;
	let storeLink = document.getElementById("store-link").value;
	let contactNumber = document.getElementById("contact-number").value;
	let email = document.getElementById("Email").value;
	let otherInfo = document.getElementById("other-info").value;
	console.log(storeName.value);
	const body = {
		name: storeName,
		content: storeDiscription,
		customFields: [
			{ id: "e7caba05-d6b6-4746-8cda-df864b54be1a", value: storeLink },
			{ id: "ec5e777f-0e0e-42ba-b184-1bf65779a771", value: contactNumber },
			{ id: "f86e4bd4-7f64-427a-8c5b-867f56a9936f", value: email },
			{ id: "f251953e-f92b-413f-859f-25df4b753d6a", value: otherInfo },
		],
	};
	try {
		const response = await postData(body);
		alert("horray");
	} catch (error) {
		console.log(error);
	}
}

const phoneInputField = document.getElementById("contact-number");
phoneInputField.addEventListener("input", (e) => {
	e.preventDefault();
	console.log(typeof e.target.value);

	phoneInputField.value = e.target.value.replace(
		/(\d{3})(\d{3})(\d{3})(\d{3})/,
		"$1 $2 $3 $4"
	);
});

const storeForm = document.getElementById("store-form");
storeForm.addEventListener("submit", (e) => submitHandler(e));
