package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Profile struct {
	Name    string   `json:"name"`
	Hobbies []string `json:"hobbies"`
}

func main() {

	profile := Profile{
		Name:    "Alex",
		Hobbies: []string{"snowboarding", "programming"},
	}

	// Register a handler function for the "/" endpoint
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set("Content-Type", "application/json")

		w.WriteHeader(http.StatusOK)

		if err := json.NewEncoder(w).Encode(profile); err != nil {

			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}
