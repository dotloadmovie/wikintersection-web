package actions

import (
	"encoding/json"
	"github.com/dotloadmovie/wikintersect/network"
	"github.com/labstack/echo"
	"log"
	"net/http"
)

func SearchWiki(ctx echo.Context) error {
	output := make([]string, 0)

	if ctx.Param("search") != "" {
		output = network.GetSearch(ctx.Param("search"))
	}

	enc := JOutput{"SearchResult", output}

	bytes, err := json.Marshal(enc)

	if err != nil {
		log.Fatal(err)
	}

	return ctx.JSONBlob(http.StatusOK, bytes)
}
