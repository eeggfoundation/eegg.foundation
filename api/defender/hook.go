package defender

import (
	"fmt"
	"io"
	"net/http"
)

// Hook handles web-hooks from OpenZeppelin Defender.
func Hook(w http.ResponseWriter, r *http.Request) {
	var (
		b   []byte
		err error
	)

	if b, err = io.ReadAll(r.Body); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Println(string(b))
}
