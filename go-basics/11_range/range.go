package main

import "fmt"

func main() {

	for idx, char := range "pavan h bhakta" {
		fmt.Println(idx, " has letter ", string(char))
	}

}
