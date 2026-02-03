package main

import "fmt"

func main() {

	age := 91

	if age < 18 {
		fmt.Println("Minor")
	} else if age >= 18 && age < 60 {
		fmt.Println("Adult")
	} else if age >= 60 {
		fmt.Println("Senior Citizen")
	}

}

