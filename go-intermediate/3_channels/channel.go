package main

import (
	"fmt"
	"math/rand"
)

func main() {

	for true {

		myChan := make(chan int)

		// var number int
		go newFunction(myChan)

		// time.Sleep(time.Second * 2)
		myChan <- rand.Intn(100)

	}

}

func newFunction(myChan chan int) {
	number := <-myChan

	fmt.Println(number)
}
