package main

import (
	"fmt"
	"time"
)

type orderstatus int

const (
	Received orderstatus = iota
	Confirmed
	Prepared
	Delivered
)

type order struct {
	id         int
	name       string
	status     orderstatus
	created_at time.Time
}

func (o *order) ChangeOrderStatus(Mystatus orderstatus) {

	o.status = Mystatus

}

func main() {

	myOrder := order{
		id:         12,
		name:       "something",
		created_at: time.Now(),
	}

	fmt.Println(myOrder)

	myOrder.ChangeOrderStatus(Prepared)

	fmt.Println(myOrder)

}
