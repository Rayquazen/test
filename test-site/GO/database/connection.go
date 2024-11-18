package database

import (
	"GO/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open("root:1596@/siteusers"), &gorm.Config{})

	if err != nil {
		panic("failed to connect to database")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
