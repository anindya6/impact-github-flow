"use strict"
console.log(peopleInSpace)

const numberOfAstrosInSpace = (data) => {
  //return the number of astronauts in space right now, using the data
	return peopleInSpace["number"]
}
console.log("number of people in space: ", numberOfAstrosInSpace(peopleInSpace))


const astroNames = (data) => {
  // return an array containing the name strings of the astronauts in space
	//var i
	//var arr = []
	//for(i in data["people"])
	//{	
		//arr.push(data["people"][i]["name"])
	//}
	let p = data["people"].map((name) => {
		let sentence = name["name"]
		return sentence
	})
	return p
}
console.log("names of people in space: ", astroNames(peopleInSpace))


const allInSameCraft = (data) => {
  // return a boolean that specifies whether all astronauts are in the same space craft
	let p = data["people"].map((name) => {
		let sentence = name["craft"]
		return sentence
	})
	var i
	for(i=1;i<p.length;i++)
	{
		if(p[i]!=p[i-1])
			return false
	}
	return true
}
console.log("same craft? ", allInSameCraft(peopleInSpace))


const successfulResponse = (data) => {
  // return a boolean that specifies whether the response from the Open Notify API was successful
	return data["message"]=="success"
}
console.log("successful response? ", successfulResponse(peopleInSpace))


const wheresJoe = (data) => {
  // return "in space!" if Joe Acaba is in space right now. Otherwise, return "dunno."
	var i
	for(i in data["people"])
	{
		if(data["people"][i]["name"]=="Joe Acaba")
			return "In Space!"
	}
	return "dunno."
}
console.log("where's Joe? ", wheresJoe(peopleInSpace))

// BONUS
// Using your astroNames function, dynamically render each of the astronauts' names to the DOM in an unordered list when the page loads.
