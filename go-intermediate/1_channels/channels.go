package main

import (
	"fmt"
	"time"
)

func main() {

	messages := make(chan string)

	go func() {
		time.Sleep(time.Second * 4)
		messages <- "pinging"
	}()

	fmt.Println("hello everyone")
	msg := <-messages

	fmt.Println(msg)

}
