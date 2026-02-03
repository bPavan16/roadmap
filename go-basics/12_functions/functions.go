package main

import "fmt"

func add(a int, b int) int {

	return a + b

}

func three_return() (int, int, int) {
	return 1, 2, 3
}

func main() {

	one, two, three := three_return()

	fmt.Println(one, two, three)
	fmt.Println(add(1, 2))

}
