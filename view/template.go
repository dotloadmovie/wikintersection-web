package view

import (
	"github.com/labstack/echo"
	"html/template"
	"io"
)

type Template struct {
	template *template.Template
}

func (t *Template) Render(writer io.Writer, name string, data interface{}, context echo.Context) error {
	return t.template.ExecuteTemplate(writer, name, data)
}
