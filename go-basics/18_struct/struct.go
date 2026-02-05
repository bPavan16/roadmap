package main

import "fmt"

type Person struct {
	name string
	roll int
}

func main() {

	pavan := Person{"pavan", 21}

	someone := &pavan

	fmt.Println("Hello ", pavan.name)
	fmt.Println("Hello ", someone.name)

}
