package main

import "fmt"

type rectangle struct {
	length  int
	breadth int
}

// Methods in go

func (r *rectangle) area() int {

	return r.length * r.breadth
}

func (r *rectangle) perimeter() int {
	return 2*r.length + 2*r.breadth
}

func main() {

	myRect := rectangle{length: 10, breadth: 20}

	fmt.Println(myRect.area())
	fmt.Println(myRect.perimeter())

	newRect := &myRect

	fmt.Println(newRect.area())
	fmt.Println(newRect.perimeter())

}
