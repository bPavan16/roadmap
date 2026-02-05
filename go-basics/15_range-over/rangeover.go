package main

import "fmt"

func main() {

	mp := map[string]int{"one": 1, "two": 2, "three": 3, "four": 4, "five": 5}

	for key, val := range mp {
		fmt.Println(key, "->", val)
	}

	for idx, val := range "Hello world!" {
		fmt.Println(idx, "->", string(val))
	}

}
