package main

import "fmt"

func main() {

	array := []int{1, 2, 3, 4, 5}

	for _, ele := range array {
		fmt.Println(ele)
	}

	sum := 0

	for i := 0; i < len(array); i++ {

		sum += array[i]

	}

	println("sum = ", sum)

}
