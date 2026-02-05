package main

import "fmt"

func createCounter() func() int {

	i := 0
	return func() int {
		i++
		return i
	}

}

func add(a int, b int) int {
	return a + b
}

func getFibo(a int, b int, n int) {

	if n == 0 {
		return
	}
	fmt.Println(a + b)
	getFibo(b, a+b, n-1)

}

func main() {

	// counter := createCounter()

	// fmt.Println(counter())
	// fmt.Println(counter())
	// fmt.Println(counter())

	// newCounter := createCounter()

	// fmt.Println(newCounter())
	// fmt.Println(newCounter())
	// fmt.Println(newCounter())

	// fmt.Print(add(1, 3))

	getFibo(0, 1, 5)

}
