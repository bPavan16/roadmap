package main

import "fmt"

func change(x int) {
	x = 20
	fmt.Println("Value of x inside change function: ", x)
}

func changeValue(x *int) {
	fmt.Println(*x)
	*x = 20

}

func main() {
	var a int = 10
	fmt.Println("Value of a before calling change function: ", a)
	changeValue(&a)
	fmt.Println("Value of a before calling change function: ", a)
}
