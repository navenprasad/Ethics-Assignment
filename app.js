var demoApp = angular.module("ethicsApp", ["ngMaterial"]);

demoApp.controller("MainController", function($scope){


	$scope.questions = [
		{
			no: 1,
			text : "What is The Data Protection Act intended to secure?",
			picture : "http://ecx.images-amazon.com/images/I/51x%2Bc%2BvkkvL._SL.jpg",
			optionA : "Your PC from being hacked.",
			optionB : "Individual information put away on PCs.",
			optionC : "Theft of copyright materials.",
			correct : "B"
		},
		{
			no: 2,
			text : "The Data Protection Act was initially gone in 1984. It was later upgraded in which year?",
			picture : "www.google.com",
			optionA : "1990",
			optionB : "1994",
			optionC : "1998",
			correct : "C"
		},
		{
			no: 3,
			text : "Who is the individual (or officer) who has the forces to implement the Data Protection Act?",
			picture : "www.google.com",
			optionA : "Data Commissioner",
			optionB : "Information Controller",
			optionC : "Information Subject",
			correct : "A"
		},
		{
			no: 4,
			text : "What is a man or organization that gathers information about individuals called?",
			picture : "www.google.com",
			optionA : "Information Commissioner",
			optionB : "Data Controller",
			optionC : "Data User",
			correct : "B"
		},
		{
			no: 5,
			text : "What is a person who has individual information put away about them called?",
			picture : "www.google.com",
			optionA : "Data Commissioner",
			optionB : "Information Controller ",
			optionC : "Information Subject",
			correct : "C"
		},
		{
			no: 6,
			text : "What is the named individual in an organization who applies to the information official for authorization to store and utilize individual information called?",
			picture : "www.google.com",
			optionA : "Information Commissioner",
			optionB : "Data Controller",
			optionC : "Data Subject",
			correct : "B"
		},
		{
			no: 7,
			text : "Which of these is an illustration of touchy information?",
			picture : "www.google.com",
			optionA : "Name",
			optionB : "Date of birth",
			optionC : "Religion",
			correct : "C"
		},
		{
			no: 8,
			text : "How many standards of the Data Protection Act are there",
			picture : "www.google.com",
			optionA : "4",
			optionB : "6",
			optionC : "8",
			correct : "C"
		},
		{
			no: 9,
			text : "To what extent can individual information be put away? ",
			picture : "www.google.com",
			optionA : "Just for whatever length of time that is vital ",
			optionB : "There is no time limit ",
			optionC : "One year ",
			correct : "A"
		},
		{
			no: 10,
			text : "Which of the accompanying does a man NOT have the privilege to do under the Data Protection Act?",
			picture : "www.google.com",
			optionA : "Stop an organization putting away individual information on them.",
			optionB : "Have erroneous information changed.",
			optionC : "Have entry to the individual information being put away about them.",
			correct : "A"
		}
	];
});
