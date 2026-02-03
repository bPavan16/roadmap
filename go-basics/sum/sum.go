package main

import "fmt"

func main() {

	var sum int = 0
	arr := []int{1, 2, 3, 4, 5}

	for _, val := range arr {
		sum += val
	}

	fmt.Println(sum)

}
