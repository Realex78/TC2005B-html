if (!sessionStorage.id && sessionStorage.id != 0) window.location = window.location.origin;

const url = new URL(window.location)
if (!url.searchParams.get("id")) window.location = window.location + "?id=" + sessionStorage.id;