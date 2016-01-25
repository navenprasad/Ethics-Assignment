var demoApp = angular.module('ethicsApp', ['ngMaterial']);

demoApp.controller('MainController', function($scope){


	$scope.questions = [
		{no: 1, title : "Hello",text: "What is your name", 
		picture: "http://ecx.images-amazon.com/images/I/51x%2Bc%2BvkkvL._SL.jpg", 
		optionA:"ansA", 
		optionB:"ansB", 
		optionC:"ansC",
		optionD:"ansD", 
		correct: 'ansA'},
		



		{no: 2, title: "Next title", text: "yada yada yada", picture: "www.google.com", options:['ans1', 'ans2', 'ans3', 'ans4'], correct: 'ans2'},
	];
});