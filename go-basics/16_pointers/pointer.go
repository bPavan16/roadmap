package main

import "fmt"

func main() {

	hello := 125

	ptr := &hello

	fmt.Println(hello)
	fmt.Println(ptr)
	fmt.Println(*ptr)

	*ptr = 2000
	fmt.Println(*ptr)
	fmt.Println(hello)

}
