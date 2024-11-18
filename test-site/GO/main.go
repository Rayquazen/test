package main

import (
	"GO/database"
	"GO/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	database.Connect() // call the Connect function

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:8000",
		AllowCredentials: true,
	}))

	routes.Setup(app)

	app.Listen(":8000")
}
