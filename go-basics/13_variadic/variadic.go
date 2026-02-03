package main

import "fmt"

func find_sum(nums ...int) int {

	sum := 0

	for _, ele := range nums {
		sum = sum + ele

	}

	return sum

}

func main() {

	nums := []int{1, 2, 3, 4, 5}

	ans := find_sum(nums...)

	fmt.Println(ans)

}
