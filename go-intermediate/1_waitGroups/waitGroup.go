// package main

// import (
// 	"fmt"
// 	"sync"
// )

// func task(i int, wg *sync.WaitGroup) {
// 	defer wg.Done()

// 	fmt.Println(i)
// }

// func main() {

// 	var wg sync.WaitGroup

// 	for i := range 10 {
// 		wg.Add(1)
// 		go task(i, &wg)
// 	}

// 	wg.Wait()

// }
