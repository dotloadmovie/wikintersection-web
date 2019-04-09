package main

import (
	"github.com/dotloadmovie/wikintersection-web/actions"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"html/template"
	"io"
	"net/http"
)

type Template struct {
	template *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.template.ExecuteTemplate(w, name, data)
}

func main() {
	// Echo instance
	e := echo.New()

	// Static files
	e.Static("/", "static")

	// Templates
	t := &Template{
		template: template.Must(template.ParseGlob("public/views/*.html")),
	}

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	// Route => handler
	e.GET("/", Index)

	e.Renderer = t
	e.GET("/hello", Hello)

	e.GET("/search/:search", actions.SearchWiki)
	e.GET("/compare/:article1/:article2", actions.CompareWiki)


	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}

func Hello(c echo.Context) error {
	return c.Render(http.StatusOK, "hello", "world")
}

func Index(c echo.Context) error {
	return c.Render(http.StatusOK, "index", "")
}