package main

import "fmt"

func PrintSlice[T int | string](elements []T) {

	for idx, ele := range elements {
		fmt.Println(idx, ele)
	}

}

func main() {

	nums := []int{0, 1, 2, 3, 4, 5, 6, 7, 8}

	names := []string{"one", "two", "three", "four"}

	PrintSlice(nums)
	PrintSlice(names)

}
