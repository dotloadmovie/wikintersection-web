package actions

import (
	"encoding/json"
	"github.com/dotloadmovie/wikintersect/network"
	"github.com/dotloadmovie/wikintersect/utils"
	"github.com/labstack/echo"
	"net/http"
	"log"
)

func CompareWiki(ctx echo.Context) error {
	firstResults := network.GetWiki(ctx.Param("article1"))
	secondResults := network.GetWiki(ctx.Param("article2"))

	intersection := utils.GetIntersect(firstResults, secondResults)

	enc := JOutput{"CompareResult", intersection}

	bytes, err := json.Marshal(enc)

	if err != nil {
		log.Fatal(err)
	}

	return ctx.JSONBlob(http.StatusOK, bytes)
}

