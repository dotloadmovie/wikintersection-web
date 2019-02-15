package main

import (
	"github.com/dotloadmovie/wikintersect-web/actions"
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

	// Templates
	t := &Template{
		template: template.Must(template.ParseGlob("public/views/*.html")),
	}

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Route => handler
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!\n")
	})

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