package models

type User struct {
	Id       uint64
	Name     string
	Email    string
	Password []byte
}