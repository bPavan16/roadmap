package main

import "fmt"

func main() {

	arr := []string{"pavan", "varun", "samarth", "ishan"}

	maper := make(map[string]int)

	for i, val := range arr {
		maper[val] = i
	}

	for e, i := range maper {
		fmt.Println(e, i)
	}

	mp := map[string]int{"prize": 100, "nope": 12}

	val, ok := mp["win"]

	if ok {
		fmt.Println("winner ", val)
	} else {
		fmt.Println("no winner")
	}

}
